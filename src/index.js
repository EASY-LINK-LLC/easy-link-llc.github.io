import { CssBaseline, GeistProvider } from "@geist-ui/core"
import React from "react"
import { hydrate, render } from "react-dom"
import { BrowserRouter } from "react-router-dom"
import App from "./components/app"
import "./assets/styles/App.css"
import "./assets/styles/index.css"
import reportWebVitals from "./reportWebVitals"

import ReactGA from "react-ga4"

ReactGA.initialize("G-S5S8MDLVCK")
ReactGA.send("pageview")

const rootElement = document.getElementById("root")

if (rootElement.hasChildNodes()) {
  hydrate(
    <React.StrictMode>
      <GeistProvider>
        <CssBaseline />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GeistProvider>
    </React.StrictMode>,
    rootElement
  )
} else {
  render(
    <React.StrictMode>
      <GeistProvider>
        <CssBaseline />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GeistProvider>
    </React.StrictMode>,
    rootElement
  )
}

// ReactDOM.render(
//     <React.StrictMode>
//         <GeistProvider>
//             <CssBaseline />
//             <BrowserRouter>
//                 <App />
//             </BrowserRouter>
//         </GeistProvider>
//     </React.StrictMode>,
//     document.getElementById('root')
// )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
