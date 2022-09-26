import React from "react"
import { Routes, Route} from 'react-router-dom'

import { MainLayout } from "./layouts";
import { Dashboard, FormView } from "./pages";

export default function App(){
  return (
    <Routes>
      <Route path={'/'} element={<MainLayout />}>
        <Route index element={<Dashboard />}></Route>
        <Route path={'/form'} element={<FormView />}></Route>
      </Route>
    </Routes>
  );
}
