import { useEffect, useRef } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { metadata } from "../data/portfolio"
import Footer from "./Footer"
import Navbar from "./Navbar"

function metadataForPath(pathname) {
  if (pathname === "/") return metadata.home
  if (pathname === "/about") return metadata.about
  if (pathname === "/contact") return metadata.contact
  if (pathname === "/work/chromatic-affinities") return metadata.chromatic
  return metadata.notFound
}

function moveFocus(element) {
  if (!element) return
  element.focus({ preventScroll: true })
  if (typeof element.scrollIntoView === "function") {
    element.scrollIntoView({ behavior: "auto", block: "start" })
  }
}

export default function Layout() {
  const location = useLocation()
  const initialLocation = useRef(true)

  useEffect(() => {
    const pageMetadata = metadataForPath(location.pathname)
    document.title = pageMetadata.title
    const description = document.querySelector('meta[name="description"]')
    if (description) description.setAttribute("content", pageMetadata.description)
  }, [location.pathname])

  useEffect(() => {
    const isInitial = initialLocation.current
    initialLocation.current = false
    const frame = requestAnimationFrame(() => {
      const hash = location.hash ? decodeURIComponent(location.hash.slice(1)) : ""
      const destination = hash ? document.getElementById(hash) : null
      if (destination) {
        moveFocus(destination)
      } else if (!isInitial) {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" })
        moveFocus(document.getElementById("main-content"))
      }
    })
    return () => cancelAnimationFrame(frame)
  }, [location.pathname, location.search, location.hash, location.key])

  function skipToContent(event) {
    event.preventDefault()
    moveFocus(document.getElementById("main-content"))
  }

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content" onClick={skipToContent}>Skip to main content</a>
      <header className="site-header">
        <Navbar />
      </header>
      <main id="main-content" tabIndex="-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
