import React from "react"
import { Routes, Route} from 'react-router-dom'

import { MainLayout } from "./layouts";
import { Dashboard, Form } from "./pages";

export default function App(){
  return (
    <Routes>
      <Route path={'/'} element={<MainLayout />}>
        <Route index element={<Dashboard />}></Route>
        <Route path={'/form'} element={<Form />}></Route>
      </Route>
    </Routes>
  );
}
