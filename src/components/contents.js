import { Description, Grid, Image, Spacer, Text } from "@geist-ui/core"
import React from "react"
import programmer_f from "../assets/svg/programmer_f.svg"
import programmer_m from "../assets/svg/programmer_m.svg"
export default class Contents extends React.Component {
  render() {
    return (
      <>
        <Grid.Container gap={1} justify="center" alignContent="center">
          <Grid xs={12} justify="center" alignContent="center">
            <Image src={programmer_f} alt="programmer female" width="550px" />
          </Grid>
          <Grid xs={12}>
            <Grid.Container>
              <Description
                title="What is Dedicated Server Hosting?"
                content={
                  <>
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
                  </>
                }
              />
            </Grid.Container>
          </Grid>
        </Grid.Container>

        <Spacer h={8} />

        <Grid.Container gap={1} justify="center" alignContent="center">
          <Grid xs={12}>
            <Description
              title="Solutions that backed by an industry leading Bare metal Server"
              content={
                <>
                  <Text p>
                    Unlike Shared or Virtual hosting, in which a user must share resources with other domains on a
                    single server, Dedicated Server hosting gives users full control over their server’s resource usage
                    and hardware specifications. By running your own private server, you can maintain the highest levels
                    of security and control over your system’s features, including it’s operating system, control panel,
                    internal software, and more.
                  </Text>
                  <Text p>
                    At Easy Link, we offer our customers both instantly deployable and custom-built server options.
                    Whether you need a machine up and running in an hour or a hand-picked powerhouse customized to your
                    specifications, Easy Link has the perfect dedicated server solution for your needs. All our servers
                    include IPMI access, are connected to our private network, and are built using Dell and SuperMicro
                    rack-mount chassis.
                  </Text>
                </>
              }
            />
          </Grid>
          <Grid xs={12} justify="center" alignContent="center">
            <Image src={programmer_m} alt="programmer male" width="550px" />
          </Grid>
        </Grid.Container>
      </>
    )
  }
}
