import React from "react"
import { NavLink } from "react-router-dom"

const styles = {
  list: `w-full flex flex-wrap m-auto gap-3 justify-center my-3 border-b lg:gap-6 lg:w-1/2`,
  divider: `hidden border-r h-3 place-self-end lg:block`,
  active: `text-lg font-bold bg-black text-white px-2 rounded`,
  inactive: `text-lg px-2`,
}

const Navbar = () => {
  return (
    <nav>
      {" "}
      <ul className={styles.list}>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? styles.active : styles.inactive
          }
        >
          Home
        </NavLink>
        <li className={styles.divider}></li>
        <NavLink
          to="about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? styles.active : styles.inactive
          }
        >
          About
        </NavLink>
        <li className={styles.divider}></li>
        <NavLink
          to="skill"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? styles.active : styles.inactive
          }
        >
          Skills
        </NavLink>
        <li className={styles.divider}></li>
        <NavLink
          to="work"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? styles.active : styles.inactive
          }
        >
          Work
        </NavLink>
        <li className={styles.divider}></li>
        <NavLink
          to="contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? styles.active : styles.inactive
          }
        >
          Contact
        </NavLink>
      </ul>
    </nav>
  )
}

export default Navbar
