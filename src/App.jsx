import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  useLocation,
} from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Layout from "./components/Layout"
import Homepage from "./pages/Homepage"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    )
  )

  return (
    <AnimatePresence mode="wait" initial={false}>
      <RouterProvider router={router} />
    </AnimatePresence>
  )
}

export default App
