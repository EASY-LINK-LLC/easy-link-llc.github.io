import { Grid, Link, Spacer } from "@geist-ui/core"
import React from "react"
import logo from "../../assets/svg/logo.svg"
import { BasicRoute } from "../routes/index"

const HeaderSection = () => {
  return (
    <>
      <Spacer h />
      <Grid.Container gap={2} justify="center">
        <Grid xs={12} md={12} lg={14} xl={14} justify="flex-start">
          <Link href="/">
            <img className="logo" src={logo} alt="Easy Link Server" />
          </Link>
        </Grid>
        <Grid xs={12} md={12} lg={8} xl={8} justify="flex-end" alignContent="center">
          <BasicRoute />
        </Grid>
      </Grid.Container>
    </>
  )
}
export default HeaderSection
