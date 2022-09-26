import React, { createContext, useContext, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  
  // Sidebar
  const drawerWidth = 240;
  const [open, setOpen] = useState(false);
  const [styles, setStyles] = useState({});

  //user
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  return (
    <DataContext.Provider
      value={{
        drawerWidth,
        open,
        setOpen,
        styles,
        setStyles,
        username,
        setUsername,
        email,
        setEmail,
        password,
        setPassword
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export const useData = useContext(DataContext);
