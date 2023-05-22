import React from "react"
import { Route, Switch } from "react-router-dom"

import DefaultLayout from "./layouts/default"
import MinimalLayout from "./layouts/minimal"
import { Policy, Privacy, TermsOfService } from "./contents"
import { AboutPage, HomePage, PricePage, QuotePage, SolutionsPage } from "./pages"

export default class App extends React.Component {
  
    render() {
    return (
      <Switch>
        <Route path="/policy">
          <MinimalLayout>
            <Policy />
          </MinimalLayout>
        </Route>
        <Route path="/privacy">
          <MinimalLayout>
            <Privacy />
          </MinimalLayout>
        </Route>
        <Route path="/tos">
          <MinimalLayout>
            <TermsOfService />
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

        <Route path="/about">
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
