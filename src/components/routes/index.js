import React from "react"
// import { Link } from 'react-router-dom'
import { Grid, Link, Text } from "@geist-ui/core"

export default class BasicRoute extends React.Component {
  render() {
    return (
      <>
        <Grid.Container alignContent="center">
          <Grid xs={8} justify="center">
            <Text h5>
              <Link href="/price" underline>
                Pricing
              </Link>
            </Text>
          </Grid>
          <Grid xs={8} justify="center">
            <Text h5>
              <Link href="/solutions" underline>
                Solutions
              </Link>
            </Text>
          </Grid>
          <Grid xs={8} justify="center">
            <Text h5>
              <Link href="/about" underline>
                Why Us?
              </Link>
            </Text>
          </Grid>
        </Grid.Container>
      </>
    )
  }
}
