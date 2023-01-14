import React from "react"
import { Grid, Link, Text } from "@geist-ui/core"

export default class BasicRoute extends React.Component {
  render() {
    return (
      <>
        <Grid.Container alignContent="center" gap={0.8}>
          <Grid xs={6} justify="center">
            <Text h5>
              <Link href="/" underline>
                Home
              </Link>
            </Text>
          </Grid>
          <Grid xs={6} justify="center">
            <Text h5>
              <Link href="/price" underline>
                Price
              </Link>
            </Text>
          </Grid>
          <Grid xs={6} justify="center">
            <Text h5>
              <Link href="/solutions" underline>
                Solutions
              </Link>
            </Text>
          </Grid>
          <Grid xs={6} justify="center">
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
