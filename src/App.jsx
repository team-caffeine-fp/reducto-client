import React from "react"
import { Routes, Route} from 'react-router-dom'

import { MainLayout, Layout } from "./layouts";
import { Dashboard, Form } from "./pages";
import { DataProvider } from "./context";


export default function App(){
  return (
    <DataProvider>
      <Routes>
        <Route path={'/'} element={<MainLayout />}>
          <Route index element={<Dashboard />}></Route>
          <Route path={'/form'} element={<Form />}></Route>
        </Route>
        <Route path={'/beans'} element={<Layout />}>
        <Route path={'/beans'} element={<Dashboard />}></Route>
        </Route>
          
      </Routes>
    </DataProvider>
  );
}
