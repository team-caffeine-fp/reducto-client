import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from '../../common';

function index() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default index