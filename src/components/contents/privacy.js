import { Divider } from "@geist-ui/core"
import React from "react"
export default class Privacy extends React.Component {
  render() {
    return (
      <>
        <p>
          <Divider align="start">CLIENT LIABILITY AND INDEMNIFICATION</Divider>
          <br />
          The parties agree that in no event shall Easy Link be liable to any third party for Client's breach or alleged
          breach of any of the terms and conditions set forth in this Agreement. Client agrees to defend, indemnify and
          hold harmless Easy Link from any and all expenses, losses, liabilities, damages or third party claims
          resulting from Client's breach or alleged breach of any Client obligations set forth hereunder.
          <br />
          <br />
          <Divider align="start">DISCLAIMER OF WARRANTY</Divider>
          <br />
          THE SERVICES, THE Easy Link SITE, INCLUDING WITHOUT LIMITATION, ALL PRODUCTS AND SERVICES DISPLAYED OR OFFERED
          ON THE Easy Link SITE, AND ALL TEXT, GRAPHICS, LINKS AND APPLICATIONS ARE PROVIDED TO CLIENT ON AN 'AS IS'
          BASIS AND WITHOUT WARRANTY OF ANY KIND. Easy Link Hosting DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, WITH
          RESPECT TO EACH OF THE FOREGOING, WITHOUT LIMITATION, ANY WARRANTY OF MERCHANTABILITY, FITNESS FOR A
          PARTICULAR PURPOSE, NON-INFRINGEMENT OR ARISING FROM A COURSE OF DEALING. WITHOUT LIMITING THE GENERALITY OF
          THE FOREGOING, Easy Link SPECIFICALLY DISCLAIMS ANY WARRANTY THAT (1)THE SERVICES WILL BE UNINTERRUPTED OR
          ERROR-FREE; (2) DEFECTS WILL BE CORRECTED; (3) THERE ARE NO VIRUSES OR OTHER HARMFUL COMPONENTS; AND (4) THE
          SECURITY METHODS EMPLOYED WILL BE SUFFICIENT.
          <br />
          <br />
          <Divider align="start">LIMITATION OF LIABILITY</Divider>
          <br />
          IN NO EVENT SHALL Easy Link BE LIABLE FOR DAMAGES RESULTING FROM LOSS OF DATA, PROFITS, USE OF THE Easy Link
          SITE OR ANY Easy Link PRODUCTS OR SERVICES, OR FOR ANY INCIDENTAL, INDIRECT, PUNITIVE, OR CONSEQUENTIAL
          DAMAGES IN CONNECTION WITH THIS AGREEMENT OR IN CONNECTION WITH ANY PRODUCTS OR SERVICES PROVIDED HEREUNDER.
        </p>
      </>
    )
  }
}
