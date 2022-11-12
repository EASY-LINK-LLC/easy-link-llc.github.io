import { Grid, Image, Spacer, Text } from "@geist-ui/core"
import { Component } from "react"

import programmer_f from "../assets/svg/programmer_f.svg"
import programmer_m from "../assets/svg/programmer_m.svg"

export default class Contents extends Component {
  render() {
    return (
      <>
        <Grid.Container gap={1} justify="center" alignContent="center">
          <Grid xs={12} justify="center" alignContent="center">
            <Image src={programmer_f} alt="programmer female" width="550px" />
          </Grid>
          <Grid xs={12}>
            <Grid.Container>
              <Grid xs={24}>
                <Text h4>What is Dedicated Server Hosting?</Text>
              </Grid>
              <Grid xs={24}>
                <Grid.Container gap={0.5}>
                  <Grid>
                    <Text p>
                      Unlike Shared or Virtual hosting, in which a user must share resources with other domains on a
                      single server, Dedicated Server hosting gives users full control over their server’s resource
                      usage and hardware specifications. By running your own private server, you can maintain the
                      highest levels of security and control over your system’s features, including it’s operating
                      system, control panel, internal software, and more.
                    </Text>
                    <Text p>
                      At Easy Link, we offer our customers both instantly deployable and custom-built server options.
                      Whether you need a machine up and running in an hour or a hand-picked powerhouse customized to
                      your specifications, Easy Link has the perfect dedicated server solution for your needs. All our
                      servers include IPMI access, are connected to our private network, and are built using Dell and
                      SuperMicro rack-mount chassis.
                    </Text>
                  </Grid>
                </Grid.Container>
              </Grid>
            </Grid.Container>
          </Grid>
        </Grid.Container>

        <Spacer h={8} />

        <Grid.Container gap={1} justify="center" alignContent="center">
          <Grid xs={24}>
            <Text h4>Solutions that backed by an industry leading Bare metal Server</Text>
          </Grid>
          <Grid xs={12}>
            <Grid.Container gap={0.5}>
              <Grid>
                <Text p>
                  When it comes to running a successful e-commerce business, you need three things: speed, reliability,
                  and security. Our e-commerce experts have worked with leading global businesses to develop cloud
                  hosting solutions that address the industry’s specific requirements.
                </Text>
                <Text p>
                  With a comprehensive, hybrid ready product portfolio, iron clad cybersecurity solutions, 99.999% core
                  uptime, and an extensive global network that lets you reach your customer no matter where they are, we
                  make sure your business is always open and that your customers are happy.
                </Text>
              </Grid>
            </Grid.Container>
          </Grid>
          <Grid xs={12} justify="center" alignContent="center">
            <Image src={programmer_m} alt="programmer male" width="550px" />
          </Grid>
        </Grid.Container>
      </>
    )
  }
}
