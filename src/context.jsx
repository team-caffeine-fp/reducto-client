import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const DataContext = createContext({});
const navigate = useNavigate()

export const DataProvider = ({ children }) => {
  
  // Sidebar
  const drawerWidth = 240;
  const [open, setOpen] = useState(false);
  const [styles, setStyles] = useState({});

  //user
  const [user, setUser] = useState(null);

  async function register(username, email, password) {
    try {
        const resp = await axios.post("/register", { username, email, password });
        localStorage.setItem("token", resp.data.token)
        setUser(resp.data.user)
        navigate('/login');
    } catch (error) {
        console.log(error)
    }
 }

  async function login(username, password) {
    try {
        const resp = await axios.post("/login", { username, password });
        localStorage.setItem("token", resp.data.token)
        setUser(resp.data.user);      
        navigate('/');
    } catch (error) {
        console.log(error)
    }
  }

  function logout() {
    localStorage.removeItem('token')
    setUser(null);
    navigate("/login");
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
export const useData = useContext(DataContext);
