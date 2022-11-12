import { Card, Dot, Grid, Image, Link, Spacer, Text } from "@geist-ui/core"
import React from "react"
import { ReactComponent as connected_world } from "../assets/svg/connected_world.svg"
import { ReactComponent as server_cluster } from "../assets/svg/server_cluster.svg"
import { ReactComponent as video_influencer } from "../assets/svg/video_influencer.svg"
import { ReactComponent as video_streaming } from "../assets/svg/video_streaming.svg"
import { ReactComponent as virtual_reality } from "../assets/svg/virtual_reality.svg"

export default class Solutions extends React.Component {
  render() {
    return (
      <>
        <Spacer h={2} />

        <Grid.Container gap={2} justify="center" alignContent="center">
          <Grid xs>
            <Card shadow>
              <Image src={connected_world} draggable={true} />
              <Text h4 mb={0}>
                Content Delivery Network
              </Text>
              <Text p small>
                We meet and surpass the standards for establishing global CDNs with no performance bottlenecks, with
                over 6 Tbps of bandwidth, 16 pops globally, and a dense server network covering 5 continents. We enable
                CDN providers to provide digital assets of any type, size, or complexity, from static information to
                live video.
              </Text>
              <Card.Footer>
                <Link block href="https://easylinkserver.com">
                  Clearance
                </Link>

                <Link block href="https://easylinkserver.com">
                  Bare-Metal
                </Link>
              </Card.Footer>
            </Card>
          </Grid>

          <Grid xs>
            <Card shadow>
              <Image src={virtual_reality} draggable={true} />
              <Text h4 mb={0}>
                Gaming servers
              </Text>
              <Text p small>
                Whether it's during peak hours or not, our dedicated servers and the network infrastructure that
                supports them enable gaming firms to avoid frequent internet bottlenecks and provide excellent online
                gaming experiences to players of all sizes.
              </Text>
              <Card.Footer>
                <Link block href="https://easylinkserver.com">
                  Clearance
                </Link>

                <Link block href="https://easylinkserver.com">
                  Bare-Metal
                </Link>
              </Card.Footer>
            </Card>
          </Grid>

          <Grid xs>
            <Card shadow>
              <Image src={video_influencer} draggable={true} />
              <Text h4 mb={0}>
                Online Streaming
              </Text>
              <Text p small>
                Our streaming servers are equipped with twin 40GE ports and scalable bandwidth pools of 10–900 Gbps to
                handle the infrastructure issues associated with providing video content to thousands of simultaneous
                users. Each video packet is efficiently sent across uncongested optical fiber lines.
              </Text>
              <Card.Footer>
                <Link block href="https://easylinkserver.com">
                  Clearance
                </Link>

                <Link block href="https://easylinkserver.com">
                  Bare-Metal
                </Link>
              </Card.Footer>
            </Card>
          </Grid>

          <Grid xs>
            <Card shadow>
              <Image src={video_streaming} draggable={true} />
              <Text h4 mb={0}>
                VoIP providers
              </Text>
              <Text p small>
                Our network works with a strong bandwidth reserve to provide smooth and reliable conversations at scale,
                reducing congestion, excessive latency, and jitter, the major enemies of successful VoIP installations.
              </Text>
              <Card.Footer>
                <Link block href="https://easylinkserver.com">
                  Clearance
                </Link>

                <Link block href="https://easylinkserver.com">
                  Bare-Metal
                </Link>
              </Card.Footer>
            </Card>
          </Grid>
        </Grid.Container>

        <Spacer h={8} />

        <Grid.Container>
          <Grid xs={12} sm={12} md={12} lg={12}>
            <Image src={server_cluster} draggable={true} width="160px" />
          </Grid>
          <Grid xs={12} sm={12} md={12} lg={12} direction="column">
            <Dot>Dedicated Network Port (Never Shared Bandwidth)</Dot>
            <Dot>IPMI (Remote Administration)</Dot>
            <Dot>24/7/365 Technical Support</Dot>
            <Dot>Free ASN / IP Space Announcement</Dot>
            <Dot>Anti-DDoS Protection</Dot>
            <Dot>Highly Customizable Hardware Configurations</Dot>
          </Grid>
        </Grid.Container>
        <Spacer h={8} />
        <Grid.Container gap={1}>
          <Grid xs>
            <Card>
              {/* <Image src={proxy_vpn} draggable={true} /> */}
              <Text h4 mb={0}>
                VPN Proxy
              </Text>
              <Text p>
                Our dense server network, ultra-low latency connection, and nearly infinite IP space are used by the
                world's best VPN providers to give borderless online experiences to everyone, wherever, without
                sacrificing network performance.
              </Text>
            </Card>
          </Grid>

          <Grid xs>
            <Card>
              {/* <Image src={data_server} draggable={true} /> */}
              <Text h4 mb={0}>
                Data Server
              </Text>
              <Text p>
                We're pleased to provide as many terabytes (or petabytes) as you need, with up to 648 TB of HDD storage
                per server, no matter what kind of storage-intensive service you're delivering.
              </Text>
            </Card>
          </Grid>
          <Grid xs>
            <Card>
              {/* <Image src={server_cluster} draggable={true} /> */}
              <Text h4 mb={0}>
                Ad-tech companies
              </Text>
              <Text p small>
                Our network fulfills the severe timeout requirements required to ensure that advertising are served
                swiftly and effectively over the best-performing pathways, operating in the single or double-digit
                latency range.
              </Text>
            </Card>
          </Grid>
          <Grid xs>
            <Card>
              {/* <Image src={server_cluster} draggable={true} /> */}
              <Text h4 mb={0}>
                Trading platforms and tools
              </Text>
              <Text p small>
                low-latency, times between market events and trade executions benefit exchange platforms, trading
                applications, and even retail investors thanks to our low-latency infrastructure.
              </Text>
            </Card>
          </Grid>
        </Grid.Container>

        <Spacer h={8} />
      </>
    )
  }
}
