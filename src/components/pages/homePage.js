import { Display, Divider, Image, Spacer, Text } from "@geist-ui/core"
import { Cloud, Cpu, Database, HardDrive, Server, Shield, Terminal } from "@geist-ui/react-icons"
import React from "react"

import connected_world from "../../assets/svg/connected_world.svg"

import Contents from "../contents"
import Features from "../features"
import Products from "../products"

export default class HomePage extends React.Component {
  render() {
    return (
      <>
        <Display
          caption={
            <>
              <Text p>
                We offer <Server size={16} />
                <Spacer inline w={0.5} />
                <Cloud size={16} />
                <Spacer inline w={0.5} />
                <Cpu size={16} />
                <Spacer inline w={0.5} />
                <HardDrive size={16} />
                <Spacer inline w={0.5} />
                <Database size={16} />
                <Spacer inline w={0.5} />
                <Shield inline size={16} />
                <Spacer inline w={0.5} />
                <Terminal size={16} />
              </Text>
              <br />
              <Text small>
                Easy Link LLC is located in Los Angeles , it provids low latency and fast speeds, Asian Optimized
                Network at an affordable price. Companies that hosts their businesses with us can have an ease of mind
                with the idea that the IT group has been operating since 2014 with a powerful financial backing and
                infrastructure.
              </Text>
            </>
          }
        >
          <Image width="800px" height="400px" src={connected_world} />
        </Display>

        <Spacer h={4} />

        <Products />

        <Spacer h={4} />

        <Divider>Why us?</Divider>

        <Spacer h={4} />

        <Features />

        <Spacer h={8} />

        <Contents />

        <Spacer h={4} />
      </>
    )
  }
}
