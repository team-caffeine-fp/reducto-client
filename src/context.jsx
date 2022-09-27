import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { useEffect } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const navigate = useNavigate()
  axios.defaults.baseURL="http://127.0.0.1:5000"
  // Sidebar
  const drawerWidth = 240;
  const [open, setOpen] = useState(false);
  const [styles, setStyles] = useState({});

  //user
  const [user, setUser] = useState(null);

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
      let resp = await axios.post("/auth/login", { username, password });
      const {token, _id} = resp.data
      localStorage.setItem("token", token)
      resp = await axios.get(`/users/${_id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      setUser(resp.data);
      navigate('/');   
    } catch (error) {
        console.log(error)
    }
  }

  async function logout() {
    try{
      const options = {
        headers: new Headers({
            'Authorization': localStorage.getItem("token")
        }) 
    }
      const resp = await axios.post("/auth/logout",{}, options);
      console.log(resp)
      localStorage.removeItem('token')
      setUser(null);
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
        user,
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
