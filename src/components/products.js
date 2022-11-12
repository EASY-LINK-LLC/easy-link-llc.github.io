import { Card, Grid, Link, Text } from "@geist-ui/core"
import React from "react"

export default class Products extends React.Component {
  render() {
    return (
      <>
        <Grid.Container gap={1.5} justify="center" alignContent="center">
          <Grid xs={12} md={6} justify="center">
            <Card width="100%">
              <Text h4 my={0}>
                Bare-Metal Server
              </Text>
              <Text>
                Our dedicated servers are available in two configurations: preconfigured with immediate delivery or
                totally configurable.
              </Text>
              <Card.Footer>
                <Link block target="_blank" href="https://easylinkserver.com">
                  Clearance
                </Link>

                <Link block target="_blank" href="https://easylinkserver.com">
                  Bare-Metal
                </Link>
              </Card.Footer>
            </Card>
          </Grid>

          <Grid xs={12} md={6} justify="center">
            <Card width="100%">
              <Text h4>Cloud</Text>
              <Text>
                Scalable virtualized solutions that can scale with your business. We have a cloud hosting solution for
                any workload or purpose, from hosting a website to large-scale business applications.
              </Text>
              <Card.Footer>
                <Link block href="https://easylinkserver.com">
                  Virtual Private Server
                </Link>

                <Link block href="https://easylinkserver.com">
                  Cloud Server
                </Link>
              </Card.Footer>
            </Card>
          </Grid>

          <Grid xs={12} md={6} justify="center">
            <Card width="100%">
              <Text h4>Content Delivery Network (CDN)</Text>
              <Text>
                Make your website and videos fly by using the strength and scale of our worldwide network. Our CDN
                combines our technology and network knowledge to provide lightning-fast, secure performance at a low
                cost.
              </Text>
              <Card.Footer>
                <Link block target="_blank" href="https://easylinkserver.com">
                  Standard
                </Link>

                <Link block target="_blank" href="https://easylinkserver.com">
                  Preimum
                </Link>
              </Card.Footer>
            </Card>
          </Grid>
          <Grid xs={12} md={6} justify="center">
            <Card width="100%">
              <Text h4 my={0}>
                DDoS Firewall
              </Text>
              <Text>
                Using cost-effective yet comprehensive security solutions, protect online applications against DDoS
                attacks. Our DDoS IP protection and Web Application Firewall services are simple to set up and utilize.
              </Text>
              <Card.Footer>
                <Link block target="_blank" href="https://easylinkserver.com">
                  Mitigation Plan
                </Link>

                <Link block target="_blank" href="https://easylinkserver.com">
                  Anti-DDoS Rules
                </Link>
              </Card.Footer>
            </Card>
          </Grid>
        </Grid.Container>
      </>
    )
  }
}
