import React, { createContext, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  
  // Sidebar
  const drawerWidth = 240;
  const [open, setOpen] = React.useState(false);
  const [styles, setStyles] = React.useState({});


  return (
    <DataContext.Provider
      value={{
        drawerWidth,
        open,
        setOpen,
        styles,
        setStyles
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataContext;
