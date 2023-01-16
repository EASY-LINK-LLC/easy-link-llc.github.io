import React from "react"
import { Route, Switch } from "react-router-dom"
import DefaultLayout from "./components/layouts/default"
import MinimalLayout from "./components/layouts/minimal"
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
      <Switch>
        <Route path="/policy">
          <MinimalLayout>
            <PolicyPage />
          </MinimalLayout>
        </Route>
        <Route path="/privacy">
          <MinimalLayout>
            <PrivacyPage />
          </MinimalLayout>
        </Route>
        <Route path="/tos">
          <MinimalLayout>
            <TermsPage />
          </MinimalLayout>
        </Route>
        <Route path="/solutions">
          <DefaultLayout>
            <SolutionsPage />
          </DefaultLayout>
        </Route>
        <Route path="/price">
          <DefaultLayout>
            <PricePage />
          </DefaultLayout>
        </Route>
        <Route path="/About">
          <DefaultLayout>
            <AboutPage />
          </DefaultLayout>
        </Route>
        <Route path="/quote">
          <DefaultLayout>
            <QuotePage />
          </DefaultLayout>
        </Route>
        <Route path="/">
          <DefaultLayout>
            <HomePage />
          </DefaultLayout>
        </Route>
      </Switch>
    )
  }
}
