import React from "react"
import { Route, Switch } from "react-router-dom"
import Layout from "./components/layouts/default"
import AboutPage from "./components/pages/aboutPage"
import HomePage from "./components/pages/homePage"
import PricePage from "./components/pages/pricePage"
import QuotePage from "./components/pages/qoutePage"
import SolutionsPage from "./components/pages/solutionsPage"
import PolicyPage from "./components/policy"
import PrivacyPage from "./components/privacy"
import TermsPage from "./components/tos"

export default class App extends React.Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/policy">
            <PolicyPage />
          </Route>
          <Route path="/privacy">
            <PrivacyPage />
          </Route>
          <Route path="/tos">
            <TermsPage />
          </Route>
          <Route path="/solutions">
            <SolutionsPage />
          </Route>
          <Route path="/price">
            <PricePage />
          </Route>
          <Route path="/About">
            <AboutPage />
          </Route>
          <Route path="/quote">
            <QuotePage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Layout>
    )
  }
}
