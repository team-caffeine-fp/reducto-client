import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Footer, Nav } from '../../common';

function index() {
  return (
    <div>
      <Nav />
      <Footer />
    </div>
  )
}

export default index
