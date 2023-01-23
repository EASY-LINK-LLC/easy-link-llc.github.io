import React from "react"
import { Route, Switch } from "react-router-dom"
import DefaultLayout from "./layouts/default"
import MinimalLayout from "./layouts/minimal"
import AboutPage from "./pages/aboutPage"
import HomePage from "./pages/homePage"
import PricePage from "./pages/pricePage"
import QuotePage from "./pages/qoutePage"
import SolutionsPage from "./pages/solutionsPage"
import PolicyPage from "./contents/policy"
import PrivacyPage from "./contents/privacy"
import TermsPage from "./contents/tos"

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
