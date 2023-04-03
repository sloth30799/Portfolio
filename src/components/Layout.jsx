import React from "react"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Navbar from "./Navbar"

const styles = {
  main: `container m-auto p-6 my-1 lg:my-6 lg:h-1/2`,
}

const Layout = () => {
  return (
    <div className="z-1">
      <Navbar />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
