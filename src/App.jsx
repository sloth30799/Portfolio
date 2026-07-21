import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import About from "./pages/About"
import ChromaticCaseStudy from "./pages/ChromaticCaseStudy"
import Contact from "./pages/Contact"
import Homepage from "./pages/Homepage"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work/chromatic-affinities" element={<ChromaticCaseStudy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
