import React from "react"
import { Routes, Route} from 'react-router-dom'

import { MainLayout } from "./layouts";
import { Dashboard } from "./pages";

export default function App(){
  return (
    <Routes>
      <Route to={'/'} element={<MainLayout />}>
        <Route index element={<Dashboard />}></Route>
      </Route>
    </Routes>
  );
}
