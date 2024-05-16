import { useNavigate } from 'react-router-dom'
import { ActionIcon } from '@mantine/core'
import { ChevronLeft } from 'tabler-icons-react'

export const StackTitleComponent = (props: any) => {
    const navigate = useNavigate()
    return (
        <div className={'flex items-center'}>
            <ActionIcon onClick={() => navigate(-1)}>
                <ChevronLeft />
            </ActionIcon>
            <div className={'text-xl text-primary-700 font-bold'}>
                {props.children}
            </div>
        </div>
    )
}
