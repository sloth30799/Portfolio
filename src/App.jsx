import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  useLocation,
} from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Home from "./pages/Home"
import About from "./pages/About"
import Work from "./pages/Work"
import Contact from "./pages/Contact"
import Layout from "./components/Layout"
import Skill from "./pages/Skill"

function App() {
  const location = useLocation()

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="skill" element={<Skill />} />
        <Route path="work" element={<Work />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    )
  )

  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        <RouterProvider router={router} />
      </AnimatePresence>
    </>
  )
}

export default App
