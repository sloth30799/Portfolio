import React from "react"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Navbar from "./Navbar"

const styles = {
  slogan: `flex p-3 px-6 justify-center`,
  logo: `hidden text-xl font-bold lg:inline`,
  logoSmall: `inline text-xl font-bold lg:hidden`,
  main: `container m-auto my-12 lg:h-1/2`,
}

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.slogan}>
        <h1 className={styles.logo}>
          Bringing ideas to life, one design at a time.
        </h1>
        <h1 className={styles.logoSmall}>Bringing ideas to life.</h1>
      </div>
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
