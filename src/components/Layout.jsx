import React from "react"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = () => {
  return (
    <>
      <div className="dotted-bg">
        <Navbar />
        <Outlet />
      </div>
      
      <Footer />
    </>
  )
}

export default Layout
