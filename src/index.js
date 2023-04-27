import { CssBaseline, GeistProvider } from "@geist-ui/core"
import React from "react"
import ReactDOM from "react-dom"
import "./assets/styles/index.css"
import App from "./components/app"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter } from "react-router-dom"
import ReactGA from "react-ga4"

ReactGA.initialize("G-S5S8MDLVCK")
ReactGA.send("pageview")

ReactDOM.render(
  <React.StrictMode>
    <GeistProvider>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GeistProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
