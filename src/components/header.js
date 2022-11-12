import { Grid, Link, Spacer } from '@geist-ui/core'
import React from 'react'

import logo from '../assets/images/logo.png'
import Router from '../routes'

export default class Header extends React.Component {
    render() {
        return (
            <>
                <Spacer h={1} />
                <Grid.Container alignContent='center'>
                    <Grid xs justify='flex-start'>
                        <Link href='/'>
                            <img className='logo' src={logo} alt='Easy Link Server' />
                        </Link>
                    </Grid>
                    <Grid xs={6} justify='flex-end'>
                        <Router />
                    </Grid>
                </Grid.Container>
            </>
        )
    }
}
