import { Grid, Page } from "@geist-ui/core"
import React from "react"
import { FooterSection, HeaderSection } from "../sections"

const MinimalLayout = ({ children }) => {
  return (
    <>
      <Page>
        <Page.Header>
          <HeaderSection />
        </Page.Header>

        <Page.Content>
          <Grid.Container gap={2} justify="center">
            <Grid xs={16}>{children}</Grid>
          </Grid.Container>
        </Page.Content>

        <Page.Footer>
          <FooterSection />
        </Page.Footer>
      </Page>
    </>
  )
}

export default MinimalLayout
