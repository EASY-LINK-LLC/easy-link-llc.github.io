import React from "react"

import { Button, Description, Drawer, Grid, Image, Input, Link, Spacer, Text } from "@geist-ui/core"
import { AtSign } from "@geist-ui/react-icons"

import logo from "../assets/svg/logo.svg"

const FooterCopyright = () => {
  const [state, setState] = React.useState(false)
  const [placement, setPlacement] = React.useState("")
  const open = (text) => {
    setPlacement(text)
    setState(true)
  }

  return (
    <>
      <Grid.Container>
        <Spacer h={0.5} />

        <Grid.Container justify="center" alignContent="center">
          <Grid xs={10}>
            <Input placeholder="Email" width="100%" />
            <Spacer inline w={0.35} />
            <Button type="secondary" ghost auto scale={0.7}>
              Subscribe
            </Button>
          </Grid>
        </Grid.Container>

        <Spacer h={5} />

        <Grid.Container gap={1} justify="center">
          <Grid xs>
            <a href="https://www.easylinkserver.com" rel="noopener noreferrer">
              <Image className="logo" src={logo} alt="Easy Link Server logo" width="160px" />
            </a>
          </Grid>
          <Grid xs>
            <Grid.Container>
              <Grid xs={24}>
                <Text h4>Services</Text>
              </Grid>
              <Grid xs={24}>
                <Link href="/price#bare-metal" underline>
                  Dedicated Server
                </Link>
              </Grid>
              <Grid xs={24}>
                <Link href="/price#colocation" underline>
                  Colocation Service
                </Link>
              </Grid>
              <Grid xs={24}>
                <Link href="/price#cdn" underline>
                  Content Devliey Network ( CDN )
                </Link>
              </Grid>
              <Grid xs={24}>
                <Link href="/price#firewall" underline>
                  DDoS Protection
                </Link>
              </Grid>
            </Grid.Container>
          </Grid>
          <Grid xs>
            <Grid.Container>
              <Grid xs={24}>
                <Text h4>Useful Links</Text>
              </Grid>
              <Grid xs={24}>
                <Link href="/portal" underline>
                  Your Account
                </Link>
              </Grid>
              <Grid xs={24}>
                <Link href="/affiliate" underline>
                  Become an Affiliate
                </Link>
              </Grid>
              <Grid xs={24}>
                <Link href="/support" underline>
                  Open a Ticket
                </Link>
              </Grid>
              <Grid xs={24}>
                <Link href="/faq" underline>
                  FAQ
                </Link>
              </Grid>
            </Grid.Container>
          </Grid>
          <Grid xs>
            <Grid.Container>
              <Grid xs={24}>
                <Text h4>Contact</Text>
              </Grid>
              <Grid xs={24}>
                <Description title="Business Hour:" content="Monday - Friday: 9:00 - 18:00" />
              </Grid>
              <Spacer h={1} />
              <Spacer h={0.5} />
              <Grid xs={24}>
                <Description title="Address:" content="700 Wilshire Blvd,Los Angeles, CA 90017" />
              </Grid>

              <Spacer h={1} />
              <Grid xs={24}>
                <Description
                  title="Email:"
                  content={
                    <>
                      <Link href="mailto:easylinkidc@gmail.com?subject=Quote" underline>
                        <Text p>
                          hello
                          <AtSign size={10} />
                          easylinkserver.com
                        </Text>
                      </Link>
                    </>
                  }
                />
              </Grid>
            </Grid.Container>
          </Grid>
        </Grid.Container>

        <Spacer h={2} />

        <Grid.Container justify="flex-end" alignContent="center">
          <Grid>
            <Button auto type="abort" onClick={() => open("bottom")} scale={1 / 2} mr="10px">
              Cookies
            </Button>

            <Drawer visible={state} onClose={() => setState(false)} placement={placement}>
              <Drawer.Title scale={1 / 2}>How we use Cookies</Drawer.Title>
              <Drawer.Subtitle scale={1 / 2}>Cookie Notice</Drawer.Subtitle>
              <Drawer.Content>
                <Text small>
                  This website uses cookies to enhance user experience and to analyze performance and traffic on our
                  website. We also share information about your use of our site with our social media, advertising and
                  analytics partners. This website stores data such as cookies to enable essential site functionality
                  and marketing, personalization, and analytics. By remaining on this website, you indicate your
                  consent.
                </Text>
              </Drawer.Content>
            </Drawer>
          </Grid>
        </Grid.Container>

        {/* Copyright */}
        <Grid.Container>
          <Grid xs={24} md={24} lg={24} justify="center" alignContent="center">
            <Text type="secondary" small>
              &copy; 2014 - {new Date().getFullYear()}.{"  "}
              <Link href="https://www.easylinkserver.com" underline>
                Easy Link LLC
              </Link>
              {"  "}All Rights Reserved.
            </Text>
          </Grid>
          <Grid xs={24} md={24} lg={24} justify="center" alignContent="center">
            <Text small type="secondary">
              <Link href="/tos" underline>
                Terms of Service
              </Link>
              {" | "}
              <Link href="/privacy" underline>
                Privacy
              </Link>
              {" | "}
              <Link href="/policy" underline>
                Policy
              </Link>
            </Text>
          </Grid>
        </Grid.Container>
        {/* Copyright */}
      </Grid.Container>
      <Spacer h={0.5} />
    </>
  )
}

export default FooterCopyright
