import { Display, Grid, Image, Spacer, Text } from "@geist-ui/core"
import React from "react"

import { ReactComponent as happy_2020 } from "../../assets/svg/happy_2020.svg"
import { ReactComponent as happy_2021 } from "../../assets/svg/happy_2021.svg"
import { ReactComponent as team } from "../../assets/svg/team.svg"

import FAQ from "../faq"

class AboutPage extends React.Component {
  render() {
    return (
      <>
        <Grid.Container>
          <Display
            caption={
              <>
                <Text p>We are Easy Link</Text>
                <Text small>
                  A global bare-metal server hosting company that specializes on cutting-edge hardware and high-speed
                  data transport for bandwidth-hungry companies.
                </Text>
              </>
            }
          >
            <Image width="400px" height="200px" src={happy_2021} />
          </Display>
        </Grid.Container>

        <Spacer h={4} />

        <Grid.Container gap={1} justify="center" alignContent="center">
          <Grid xs={12} justify="center" alignContent="center">
            <Image width="200px" height="200px" src={team} alt="our team" />
          </Grid>
          <Grid xs={12}>
            <Grid.Container>
              <Grid xs={24}>
                <Text h4>You are in the forefront</Text>
              </Grid>
              <Grid xs={24}>
                <Grid.Container gap={0.5}>
                  <Grid>
                    <Text p>
                      In our sector, we think that having excellent help at your fingertips when you need it most is
                      critical to customer happiness. Our fundamental strengths are quick response times and skilled
                      specialists ready to assist and advise you. We also feel that open and honest communication is
                      essential for building client trust.
                    </Text>
                  </Grid>
                </Grid.Container>
              </Grid>
            </Grid.Container>
          </Grid>
        </Grid.Container>

        <Spacer h={4} />

        <Display
          caption={
            <>
              <Text small>
                16 LocationsUnited States: Los Angeles • Dallas • Chicago • AshburnEurope: Amsterdam • London •
                Barcelona • MoscowAfrica: JohannesburgAsia: Mumbai, Tokyo, Singapore, Taipei, SeoulS. America: São
                PauloOceania: Sydney
              </Text>
            </>
          }
        >
          <Image width="400px" height="200px" src={happy_2020} />
        </Display>

        <Spacer h={4} />

        <FAQ />
      </>
    )
  }
}

export default AboutPage
