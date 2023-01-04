import { Grid, Link, Spacer, Text } from "@geist-ui/core"
import React from "react"
import Faq from "../faq"
import Products from "../products"

export default class Price extends React.Component {
  render() {
    return (
      <>
        <Grid.Container gap={0.5}>
          <Grid xs={24} justify="center" alignContent="center">
            <Text h2>Get a quote?</Text>
          </Grid>
          <Grid xs={24} justify="center" alignContent="center">
            <Text p>
              Please{" "}
              <Link href="/contact" color>
                contact our sales team
              </Link>{" "}
              for more information.
            </Text>
          </Grid>
        </Grid.Container>
        <Spacer h={4} />
        <Products />
        <Spacer h={4} />

        <Faq />
      </>
    )
  }
}
