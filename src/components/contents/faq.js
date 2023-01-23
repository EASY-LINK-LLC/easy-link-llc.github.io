import { Collapse, Grid, Image, Link, Text } from "@geist-ui/core"
import React from "react"
import Faq from "../../assets/svg/faq.svg"

export default class FAQ extends React.Component {
  render() {
    return (
      <>
        <Grid.Container justify="center">
          <Image width="800px" height="200px" src={Faq} />
          <Grid xs={16} justify="center">
            <Collapse.Group>
              <Collapse title={<Text small>Can I use the full capacity of my server's uplink?</Text>}>
                <Text>Abosolutely, Each server is deployed with dedicated 1x 1GE, 1x 10GE unshared uplink.</Text>
              </Collapse>
              <Collapse title={<Text small>How do I upgrade/downgrade my bandwidth plan?</Text>}>
                <Text>
                  To change bandwidth plan, please{" "}
                  <Link href="/support" color>
                    submit a ticket
                  </Link>{" "}
                  with our sales team. An upgrade can be done anytime. Downgrading is possible from next upcoming
                  billing cycle onwards.
                </Text>
              </Collapse>
              <Collapse title={<Text small>What would happended if host abuse content?</Text>}>
                <Text>
                  We have Zero tolerance against abuse. For more information, please check our{" "}
                  <Link href="/tos" color>
                    Term of use
                  </Link>{" "}
                  In case of abuse, We will null any devise that is violated above term at least for 24 hours.
                </Text>
              </Collapse>
            </Collapse.Group>
          </Grid>
        </Grid.Container>
      </>
    )
  }
}
