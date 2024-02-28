import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { BsLinkedin, BsGithub, BsMenuButtonFill } from "react-icons/bs"
import { AiOutlineCloseCircle } from "react-icons/ai"

const styles = {
  navbar: `p-6 py-3 flex justify-between`,
  logoBox: `w-full flex gap-3 items-center p-3 lg:p-0`,
  logo: `font-extrabold tracking-tight underline text-lg md:text-xl`,
  icon: `hover:text-white hover:bg-darkBlue hover:shadow-btn`,
  list: `hidden lg:flex m-1 px-1 gap-3 border-b lg:gap-6`,
  active: `text-lg font-title bg-black text-white px-2 rounded text-sm`,
  inactive: `text-lg px-2 font-title hover:bg-accent rounded hover:text-white active:bg-grey text-sm`,
  divider: `hidden border-r h-3 place-self-end lg:block`,
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoBox}>
        <Link to="/">
          <h2 className={styles.logo}>#HanYeHtun</h2>
        </Link>
        <a href="https://linkedin.com/in/hanyehtun30799" target="_blank">
          <BsLinkedin size={"1.5rem"} className={styles.icon} />
        </a>
        <a href="https://github.com/sloth30799" target="_blank">
          <BsGithub size={"1.5rem"} className={styles.icon} />
        </a>
        <BsMenuButtonFill
          size={"1.5rem"}
          onClick={open}
          className="lg:hidden block ml-auto"
        />
      </div>
      <ul className={styles.list}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.active : styles.inactive
          }
        >
          Home
        </NavLink>
        <li className={styles.divider}></li>
        <NavLink
          to="about"
          className={({ isActive }) =>
            isActive ? styles.active : styles.inactive
          }
        >
          About
        </NavLink>
        <li className={styles.divider}></li>
        <NavLink
          to="contact"
          className={({ isActive }) =>
            isActive ? styles.active : styles.inactive
          }
        >
          Contact
        </NavLink>
      </ul>
      {isOpen && (
        <ul className="fixed left-0 top-0 z-10 m-auto w-screen h-screen bg-base-100 flex flex-col gap-3 justify-center items-center">
          <li>
            <AiOutlineCloseCircle onClick={close} />
          </li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
            onClick={close}
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
            onClick={close}
          >
            About
          </NavLink>
          <NavLink
            to="contact"
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
            onClick={close}
          >
            Contact
          </NavLink>
        </ul>
      )}
    </nav>
  )
}

export default Navbar
