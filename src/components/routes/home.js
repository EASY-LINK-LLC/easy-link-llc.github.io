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
              <Link href="/" block>
                Home
              </Link>
            </Text>
          </Grid>
          <Grid xs>
            <Text h5>
              <Link href="/price" block>
                Price
              </Link>
            </Text>
          </Grid>
          <Grid xs>
            <Text h5>
              <Link href="/solutions" block>
                Solutions
              </Link>
            </Text>
          </Grid>
          <Grid xs>
            <Text h5>
              <Link href="/about" block>
                About
              </Link>
            </Text>
          </Grid>
        </Grid.Container>
      </>
    )
  }
}
