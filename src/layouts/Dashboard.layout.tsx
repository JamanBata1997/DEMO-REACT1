import React, { useEffect, useState } from 'react'
import { AppShell, useMantineTheme } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { getUser } from '../utils/helpers/tokenStorage.helper'
import { DashboardRoutes } from '../components/modules/dashboard/Dashboard.routes'

export const DashboardLayout = () => {
    const user = getUser()
    const navigate = useNavigate()
    const theme = useMantineTheme()
    const [opened, setOpened] = useState(false)
    // useEffect(()=>{
    //     if(!user?.patientId){
    //         navigate('/onboarding');
    //     }
    // },[user])
    return (
        <AppShell
            styles={{
                main: {
                    background:
                        theme.colorScheme === 'dark'
                            ? theme.colors.dark[8]
                            : theme.colors.gray[0],
                },
            }}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            fixed
            navbar={<span>nav</span>}
            header={<span>header</span>}
        >
            <DashboardRoutes />
        </AppShell>
    )
}
