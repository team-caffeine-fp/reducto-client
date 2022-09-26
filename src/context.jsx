import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const navigate = useNavigate()
  
  // Sidebar
  const drawerWidth = 240;
  const [open, setOpen] = useState(false);
  const [styles, setStyles] = useState({});

  //user
  const [user, setUser] = useState(null);
  const [userId, setUserId] =useState(null)

  async function register(username, businessname, email, password) {
    try {
        const resp = await axios.post("/register", { username, businessname, email, password });
        localStorage.setItem("token", resp.data.token)
        navigate('/login');
    } catch (error) {
        console.log(error)
    }
 }

  async function login(username, password) {
    try {
      // let resp = await axios.post("/auth/login", { username, password });
      // const {token, _id} = resp.data
      // localStorage.setItem("token", token)
      // resp = await axios.get(`/users/${_id}`, {
      //   headers: {
      //     'Authorization': `Bearer ${token}`
      //   }
      // })
      // setUser(resp.data);
      // navigate('/');
      const options = {
        headers: new Headers({
            'Authorization': localStorage.getItem("token")
        }) 
    }
        const resp = await axios.post("/auth/login", { username, password }, options);
        localStorage.setItem("token", resp.data.token)
        const id = resp.data._id
        const user = await axios.get(`/user/${id}`);
        setUser(user)  
        setUserId(id)  
        navigate('/');
    } catch (error) {
        console.log(error)
    }
  }

  async function logout() {
    try{
//       const token = localStorage.getItem('token')
//       await axios.post('/auth/logout', {}, {headers: {
//         'Authorization': `Bearer ${token}`
// }})
//       localStorage.removeItem('token')
//       setUser(null);    
//       navigate("/login");
      const options = {
        headers: new Headers({
            'Authorization': localStorage.getItem("token")
        }) 
    }
      const resp = await axios.post("/auth/logout",{_id: userId}, options);
      console.log(resp)
      localStorage.removeItem('token')
      setUser(null);
      setUserId(null)
      navigate("/login");
    } catch (error) {
      console.log(error)
  }
 }

 

  return (
    <DataContext.Provider
      value={{
        drawerWidth,
        open,
        setOpen,
        styles,
        setStyles,
        register,
        login,
        logout
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
