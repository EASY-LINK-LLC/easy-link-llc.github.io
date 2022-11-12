import React from "react"
// import ReactDOM from 'react-dom'
import App from "./App"
import reportWebVitals from "./reportWebVitals"

import { CssBaseline, GeistProvider } from "@geist-ui/core"
import { BrowserRouter } from "react-router-dom"

import "./assets/styles/App.css"
import "./assets/styles/index.css"

import { hydrate, render } from "react-dom"

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
