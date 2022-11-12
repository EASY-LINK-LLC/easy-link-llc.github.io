import { Display, Image, Text } from "@geist-ui/core"
import { Component } from "react"

import features_overview from "../../assets/svg/features_overview.svg"

export default class QuotePage extends Component {
  render() {
    return (
      <>
        <Display
          caption={
            <>
              <Text p mb={0}>
                Easy Link LLC is located in Los Angeles , it has low latency and fast speeds, Asian OptimizedNetwork.
                This allows us to cater to all audiences providing client's the quality they need at an affordable
                price. Companies that hosts their businesses with us can have an ease of mind with the idea that the IT
                group has been operating since 2012 with a powerful financial backing and infrastructure.
              </Text>
              <Text p mb={0}>
                Easy Link LLC has been provide 24/7 Unsurpassed Managed Support with years of experience, proper
                disaster planning has been implemented to preserve enterprise level data and services.
              </Text>
            </>
          }
        >
          <Image width="800px" height="400px" src={features_overview} alt="Feature" />
        </Display>
      </>
    )
  }
}
