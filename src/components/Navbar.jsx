import { useEffect, useRef, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { navigation } from "../data/portfolio"

const mobileBreakpoint = 1024

function navClass({ isActive }) {
  return isActive ? "nav-link is-current" : "nav-link"
}

export default function Navbar() {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const triggerRef = useRef(null)
  const closeRef = useRef(null)
  const dialogRef = useRef(null)
  const restoreFocus = useRef(true)

  const closeMenu = (shouldRestore = true) => {
    restoreFocus.current = shouldRestore
    setOpen(false)
  }

  useEffect(() => {
    if (!open) return undefined
    const main = document.getElementById("main-content")
    const footer = document.querySelector("footer")
    main?.setAttribute("inert", "")
    footer?.setAttribute("inert", "")
    document.body.style.overflow = "hidden"
    closeRef.current?.focus()
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault()
        closeMenu(true)
      }
      if (event.key === "Tab") {
        const controls = [...(dialogRef.current?.querySelectorAll('a[href], button:not([disabled])') ?? [])]
        if (!controls.length) return
        const first = controls[0]
        const last = controls[controls.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.removeEventListener("keydown", onKeyDown)
      main?.removeAttribute("inert")
      footer?.removeAttribute("inert")
      document.body.style.overflow = ""
      if (restoreFocus.current) triggerRef.current?.focus()
    }
  }, [open])

  useEffect(() => {
    if (open) closeMenu(false)
  }, [location.pathname, location.search, location.hash])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= mobileBreakpoint && open) closeMenu(true)
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [open])

  function activateLink() {
    closeMenu(false)
  }

  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <Link className="wordmark" to="/" aria-label="Han Ye Htun home">Han Ye Htun<span aria-hidden="true"> / HYH</span></Link>
      <div className="desktop-nav" aria-hidden={open || undefined} inert={open ? "" : undefined}>
        {navigation.map((item) => <NavLink className={navClass} key={item.href} to={item.href}>{item.label}</NavLink>)}
      </div>
      <button
        ref={triggerRef}
        className="menu-trigger"
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => { restoreFocus.current = true; setOpen(true) }}
      >
        Menu
      </button>
      {open && (
        <div ref={dialogRef} id="mobile-navigation" className="mobile-dialog" role="dialog" aria-modal="true" aria-label="Site navigation">
          <div className="mobile-dialog__inner">
            {navigation.map((item) => <NavLink className={navClass} key={item.href} to={item.href} onClick={activateLink}>{item.label}</NavLink>)}
            <button ref={closeRef} className="menu-close" type="button" aria-label="Close menu" onClick={() => closeMenu(true)}>Close menu</button>
          </div>
        </div>
      )}
    </nav>
  )
}
