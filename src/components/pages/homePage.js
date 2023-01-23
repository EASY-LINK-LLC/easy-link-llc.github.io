import { Display, Divider, Image, Spacer, Text, Link } from "@geist-ui/core"
import { Cloud, Cpu, Database, HardDrive, Server, Shield, Terminal } from "@geist-ui/react-icons"
import React from "react"
import connected_world from "../../assets/svg/connected_world.svg"
import Features from "../contents/features"
import Products from "../contents/products"

export default class HomePage extends React.Component {
  render() {
    return (
      <>
        <Image width="1200px" height="540px" src={connected_world} />
        <Display
          caption={
            <>
              <Text p>
                Easy Link LLC, based in Los Angeles, offers affordable, low-latency, high-speed, Asian-optimized network
                solutions to companies. With a solid financial foundation and infrastructure dating back to 2014,
                customers can trust in the company's IT expertise.
              </Text>

              <br />
              <Text p>
                <Link icon={false} target="" href="#">
                  <Server size={36} color="CornflowerBlue" />
                </Link>

                <Spacer inline w={0.5} />
                <Link icon={false} target="" href="#">
                  <Cloud size={36} alt="cloud server" color="CornflowerBlue" />
                </Link>

                <Spacer inline w={0.5} />
                <Link icon={false} target="" href="#">
                  <Cpu size={36} alt="hign-end processors" color="CornflowerBlue" />
                </Link>

                <Spacer inline w={0.5} />
                <Link icon={false} target="" href="#">
                  <HardDrive size={36} alt="reliable hard drive" color="CornflowerBlue" />
                </Link>

                <Spacer inline w={0.5} />
                <Link icon={false} target="" href="#">
                  <Database size={36} alt="reliable database" color="CornflowerBlue" />
                </Link>

                <Spacer inline w={0.5} />
                <Link icon={false} target="" href="#">
                  <Shield inline size={36} alt="Anti-DDoS Protection" color="CornflowerBlue" />
                </Link>

                <Spacer inline w={0.5} />
                <Link icon={false} target="" href="#">
                  <Terminal size={36} alt="Full Root Access" color="CornflowerBlue" />
                </Link>
              </Text>
            </>
          }
        ></Display>
        <Spacer h={4} />
        <Products />
        <Spacer h={4} />
        <Divider>Why us?</Divider>
        <Spacer h={4} />
        <Features />
        <Spacer h={4} />
      </>
    )
  }
}
