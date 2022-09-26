import React from "react"
import { Routes, Route} from 'react-router-dom'

import { MainLayout} from "./layouts";
import { Dashboard, Form } from "./pages";
import { DataProvider } from "./context";

import { Login } from "./pages";
import { Register} from "./pages"

export default function App(){
  return (
    <DataProvider>
      <Routes>
        <Route path={'/'} element={<MainLayout />}>
          <Route index element={<Dashboard />}></Route>
          <Route path={'/form'} element={<Form />}></Route>
        </Route>
      <Route path={'/login'} element={<Login />}></Route>
      <Route path={'/register'} element={<Register />}></Route>
          
      </Routes>
    </DataProvider>
  );
}
