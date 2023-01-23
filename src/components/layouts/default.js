import { Page, Spacer } from "@geist-ui/core"
import React from "react"

import Footer from "../sections/footer"
import Header from "../sections/header"

export default class DefaultLayout extends React.Component {
  render() {
    return (
      <>
        <Page render="effect-seo">
          <Page.Header>
            <Header />
          </Page.Header>

          <Page.Content>{this.props.children}</Page.Content>

          <Spacer h={30} />

          <Page.Footer>
            <Footer />
          </Page.Footer>
        </Page>
      </>
    )
  }
}
