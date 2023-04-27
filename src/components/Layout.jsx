import React from "react"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Navbar from "./Navbar"

// const styles = {
//   main: `p-3 lg:p-6 my-1 lg:my-6 lg:h-1/2`,
// }

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
