import { Page, Spacer } from '@geist-ui/core'
import React from 'react'

import Footer from '../components/footer'
import Header from '../components/header'

export default class Layout extends React.Component {
    render() {
        return (
            <>
                <Page>
                    <Page.Header>
                        <Header />
                    </Page.Header>

                    <Page.Content>{this.props.children}</Page.Content>

                    <Spacer h={30} />

                    <Page.Footer>
                        <Footer />
                    </Page.Footer>
                </Page>
            </>
        )
    }
}
