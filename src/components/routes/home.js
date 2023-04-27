import { Grid, Link, Spacer, Text } from "@geist-ui/core"
import React from "react"

export default class BasicRoute extends React.Component {
  render() {
    return (
      <>
        <Spacer h={4} />
        <Grid.Container>
          <Grid xs>
            <Text h5>
              <Link href="/">Home</Link>
            </Text>
          </Grid>
          <Grid xs>
            <Text h5>
              <Link href="/price">Price</Link>
            </Text>
          </Grid>
          <Grid xs>
            <Text h5>
              <Link href="/solutions">Solutions</Link>
            </Text>
          </Grid>
          <Grid xs>
            <Text h5>
              <Link href="/about">About</Link>
            </Text>
          </Grid>
        </Grid.Container>
      </>
    )
  }
}
