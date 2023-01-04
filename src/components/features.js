import { Card, Grid, Image, Text } from "@geist-ui/core"
import React from "react"
import applications from "../assets/svg/applications.svg"
import maintenance from "../assets/svg/maintenance.svg"
import secure_server from "../assets/svg/secure_server.svg"

export default class Features extends React.Component {
  render() {
    return (
      <>
        <Grid.Container gap={2} justify="center">
          <Grid xs={12} md={6}>
            <Card width="100%" shadow>
              <Image src={secure_server} alt="Secure Server" height="200px" width="100%" draggable={false} />
              <Text h4 mb={0}>
                Anti-DDoS Protection
              </Text>
              <Text p>
                DDoS Firewall can sustain attacks from all over the world. Attack traffic is sent to local scrubbing
                centers then sending only good, clean traffic back to your server.
              </Text>
            </Card>
          </Grid>

          <Grid xs={12} md={6}>
            <Card width="100%" shadow>
              <Image src={applications} alt="Featured applications" height="200px" width="100%" draggable={false} />
              <Text h4 mb={0}>
                Solutions
              </Text>
              <Text p>
                Self managed dedicated servers with scalable, production ready private cloud that fits your needs, and
                connected with Optimal routing and peering, stable, low lentacy, Optimized network. More..
              </Text>
            </Card>
          </Grid>

          <Grid xs={12} md={6}>
            <Card width="100%" shadow>
              <Image src={maintenance} alt="24x7 Support" height="200px" width="100%" draggable={false} />
              <Text h4 mb={0}>
                Client Services
              </Text>
              <Text p>
                We will monitor your service 24/7 and, should an issue occurs, automatically open a support ticket, our
                team of experts can resolve it as soon as possible.
              </Text>
            </Card>
          </Grid>
        </Grid.Container>
      </>
    )
  }
}
