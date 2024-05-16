import React from 'react'
import { Grid } from '@mantine/core'
import { Logo } from '../components/common/Logo'

export const AuthLayout = () => {
    return (
        <main className={'h-screen'}>
            <nav className={'fixed top w-full p-md'}>
                <Logo />
            </nav>
            <Grid className={'w-full h-full'}>
                <Grid.Col
                    md={6}
                    className={'flex justify-center items-end'}
                ></Grid.Col>
                <Grid.Col
                    md={6}
                    className={'flex justify-center items-center'}
                ></Grid.Col>
            </Grid>
        </main>
    )
}
