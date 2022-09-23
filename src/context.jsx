import { createContext, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  
  // Sidebar
  const drawerWidth = 240;

  return (
    <DataContext.Provider
      value={{drawerWidth}}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataContext;
