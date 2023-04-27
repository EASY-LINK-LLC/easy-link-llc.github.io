import { Page, Spacer } from "@geist-ui/core"
import React from "react"

import { FooterSection, HeaderSection } from "../sections"

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Page render="effect-seo">
        <Page.Header>
          <HeaderSection />
        </Page.Header>
        <Page.Content>{children}</Page.Content>
        <Spacer h={25} />
        <Page.Footer className="footer">
          <FooterSection />
        </Page.Footer>
      </Page>
    </>
  )
}

export default DefaultLayout
