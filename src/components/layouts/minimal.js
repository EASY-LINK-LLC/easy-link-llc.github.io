import { Page, Spacer, Grid } from "@geist-ui/core"
import React from "react"

import Footer from "../sections/footer"
import Header from "../sections/header"

export default class MinimalLayout extends React.Component {
  render() {
    return (
      <>
        <Page>
          <Page.Header>
            <Header />
          </Page.Header>

          <Page.Content>
            <Grid.Container gap={2} justify="center">
              <Grid xs={16}>{this.props.children}</Grid>
            </Grid.Container>
          </Page.Content>

          <Spacer h={25} />

          <Page.Footer>
            <Footer />
          </Page.Footer>
        </Page>
      </>
    )
  }
}
