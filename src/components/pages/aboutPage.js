import { Display, Grid, Image, Spacer, Text } from "@geist-ui/core"
import React from "react"
import happy_2023 from "../../assets/svg/happy_2023.svg"
import happy_2022 from "../../assets/svg/happy_2022.svg"
import team from "../../assets/svg/team.svg"
import Contents from "../contents/contents"
import FAQ from "../contents/faq"

class AboutPage extends React.Component {
  render() {
    return (
      <>
        <Grid.Container>
          <Display
            caption={
              <>
                <Text p>We are Easy Link</Text>
                <Text p>
                  A global bare-metal server hosting company that specializes on cutting-edge hardware and high-speed
                  data transport for bandwidth-hungry companies.
                </Text>
              </>
            }
          >
            <Image width="400px" height="200px" src={happy_2023} />
          </Display>
        </Grid.Container>
        <Spacer h={8} />

        <Contents />

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
                      As a leading global provider of bare-metal server hosting, we specialize in providing
                      state-of-the-art hardware and fast data transport for companies with high bandwidth needs. We
                      believe that exceptional customer support is crucial for customer satisfaction in our industry.
                      Our key advantages include fast response times and experienced specialists who are ready to assist
                      and provide guidance. We also value open and transparent communication as a key component of
                      building trust with our clients.
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
              <Text p>
                16 LocationsUnited States: Los Angeles • Dallas • Chicago • AshburnEurope: Amsterdam • London •
                Barcelona • MoscowAfrica: JohannesburgAsia: Mumbai, Tokyo, Singapore, Taipei, SeoulS. America: São
                PauloOceania: Sydney
              </Text>
            </>
          }
        >
          <Image width="400px" height="200px" src={happy_2022} />
        </Display>

        <Spacer h={4} />

        <FAQ />
      </>
    )
  }
}

export default AboutPage
