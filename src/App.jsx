import React from "react"
import { Routes, Route} from 'react-router-dom'

import { Dashboard, FormView, Login, Register } from "./pages";
import { DataProvider } from "./context";

import ProtectedRoute from "./routes";

export default function App(){
  return (
    <DataProvider>
      <Routes>
          <Route path="/" element={<ProtectedRoute redirectTo="/login"/>}>
              <Route index element={<Dashboard />}></Route>
              <Route path='/form' element={<FormView />}></Route>
          </Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>   
      </Routes>
    </DataProvider>
  );
}
