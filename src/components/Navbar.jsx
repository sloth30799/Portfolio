import { useState } from "react"
import { NavLink } from "react-router-dom"
import { BsLinkedin, BsGithub, BsMenuButtonFill } from "react-icons/bs"
import { AiOutlineCloseCircle } from "react-icons/ai"

const styles = {
  navbar: `container m-auto p-6 py-3 flex justify-between`,
  logoBox: `w-full flex gap-3 items-center p-3 lg:p-0`,
  logo: `lg:text-xl font-extrabold tracking-tight`,
  icon: `hover:text-white hover:bg-black`,
  list: `hidden lg:flex m-1 px-1 gap-3 border-b lg:gap-6`,
  active: `text-lg font-bold bg-black text-white px-2 rounded`,
  inactive: `text-lg px-2 hover:bg-accent rounded hover:text-white active:bg-grey`,
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
        <h2 className={styles.logo}>Han Ye Htun</h2>
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
          to="skill"
          className={({ isActive }) =>
            isActive ? styles.active : styles.inactive
          }
        >
          Skills
        </NavLink>
        <li className={styles.divider}></li>
        <NavLink
          to="work"
          className={({ isActive }) =>
            isActive ? styles.active : styles.inactive
          }
        >
          Work
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
        <ul className="absolute left-0 top-0 z-10 m-auto w-full h-full bg-base-100 flex flex-col gap-3 justify-center items-center">
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
            to="skill"
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
            onClick={close}
          >
            Skills
          </NavLink>
          <NavLink
            to="work"
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
            onClick={close}
          >
            Work
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
