import { Card, Grid, Link, Text } from "@geist-ui/core"
import React from "react"

export default class Products extends React.Component {
  render() {
    return (
      <>
        <Grid.Container gap={1.5} justify="center" alignContent="center">
          <Grid xs={12} md={6}>
            <Card width="100%">
              <Card.Content>
                <Text h3 my={0}>
                  Bare-Metal Server
                </Text>
                <Text p>
                  Our dedicated servers are available in two configurations: preconfigured with immediate delivery or
                  totally configurable.
                </Text>
              </Card.Content>
              <Card.Footer>
                <Grid.Container justify="center">
                  <Grid xs>
                    <Link block target="_blank" href="https://easylinkserver.com">
                      Clearance
                    </Link>
                  </Grid>
                  <Grid xs>
                    <Link block target="_blank" href="https://easylinkserver.com">
                      Bare-Metal
                    </Link>
                  </Grid>
                </Grid.Container>
              </Card.Footer>
            </Card>
          </Grid>

          <Grid xs={12} md={6}>
            <Card width="100%">
              <Card.Content>
                <Text h3>Cloud</Text>
                <Text p>
                  Scalable virtualized solutions that can scale with your business. We have a cloud hosting solution for
                  any workload or purpose, from hosting a website to large-scale business applications.
                </Text>
              </Card.Content>
              <Card.Footer>
                <Grid.Container justify="center">
                  <Grid xs>
                    <Link block href="https://easylinkserver.com">
                      Virtual Private Server
                    </Link>
                  </Grid>
                  <Grid xs>
                    <Link block href="https://easylinkserver.com">
                      Cloud Server
                    </Link>
                  </Grid>
                </Grid.Container>
              </Card.Footer>
            </Card>
          </Grid>

          <Grid xs={12} md={6}>
            <Card width="100%">
              <Card.Content>
                <Text h3>Content Delivery Network (CDN)</Text>
                <Text p>
                  Make your website and videos fly by using the strength and scale of our worldwide network. Our CDN
                  combines our technology and network knowledge to provide lightning-fast, secure performance at a low
                  cost.
                </Text>
              </Card.Content>
              <Card.Footer>
                <Grid.Container justify="center">
                  <Grid xs>
                    <Link block target="_blank" href="https://easylinkserver.com">
                      Standard
                    </Link>
                  </Grid>
                  <Grid xs>
                    <Link block target="_blank" href="https://easylinkserver.com">
                      Preimum
                    </Link>
                  </Grid>
                </Grid.Container>
              </Card.Footer>
            </Card>
          </Grid>
          <Grid xs={12} md={6}>
            <Card width="100%">
              <Card.Content>
                <Text h3 my={0}>
                  DDoS Firewall
                </Text>
                <Text p>
                  Using cost-effective yet comprehensive security solutions, protect online applications against DDoS
                  attacks. Our DDoS IP protection and Web Application Firewall services are simple to set up and
                  utilize.
                </Text>
              </Card.Content>
              <Card.Footer>
                <Grid.Container justify="center">
                  <Grid xs>
                    <Link block target="_blank" href="https://easylinkserver.com">
                      Mitigation Plan
                    </Link>
                  </Grid>
                  <Grid xs>
                    <Link block target="_blank" href="https://easylinkserver.com">
                      Anti-DDoS Rules
                    </Link>
                  </Grid>
                </Grid.Container>
              </Card.Footer>
            </Card>
          </Grid>
        </Grid.Container>
      </>
    )
  }
}
