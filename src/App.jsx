import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"
import Preloader from "./components/loading/Preloader"
import Layout from "./components/Layout"
import Homepage from "./pages/Homepage"
import About from "./pages/About"
import Contact from "./pages/Contact"
import { AnimatePresence } from "framer-motion"

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
    <Preloader backgroundColor="bg-black" color="#fff" size={80}>
      <AnimatePresence mode="wait" initial={false}>
        <RouterProvider router={router} />
      </AnimatePresence>
    </Preloader>
  )
}

export default App
