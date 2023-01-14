import React from "react"
import { Grid, Link, Text, Spacer } from "@geist-ui/core"

export default class BasicRoute extends React.Component {
  render() {
    return (
      <>
        <Spacer h={4} />
        <Grid.Container gap={1}>
          <Grid xs={12} md={6} lg={6} width="100%">
            <Text h5>
              <Link href="/" underline>
                Home
              </Link>
            </Text>
          </Grid>
          <Grid xs={12} md={6} lg={6} width="100%">
            <Text h5>
              <Link href="/price" underline>
                Price
              </Link>
            </Text>
          </Grid>
          <Grid xs={12} md={6} lg={6} width="100%">
            <Text h5>
              <Link href="/solutions" underline>
                Solutions
              </Link>
            </Text>
          </Grid>
          <Grid xs={12} md={6} lg={6} width="100%">
            <Text h5>
              <Link href="/about" underline>
                About
              </Link>
            </Text>
          </Grid>
        </Grid.Container>
      </>
    )
  }
}
