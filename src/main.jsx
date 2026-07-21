import React from "react"
import ReactDOM from "react-dom/client"
import { MotionConfig } from "framer-motion"
import "@fontsource/titan-one"
import "@fontsource-variable/instrument-sans"
import App from "./App"
import "./assets/css/main.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MotionConfig reducedMotion="user">
      <App />
    </MotionConfig>
  </React.StrictMode>,
)
