import { ActionIcon, Avatar, Grid, TextInput } from '@mantine/core'
import { Minus, Plus, Trash } from 'tabler-icons-react'
import { useDispatch } from 'react-redux'
import {
    changeOrderItemsValue,
    deleteOrderItem,
} from '../../../store/modules/pos/actions'

export const OrderItem = (props: any) => {
    const { item } = props
    const dispatch = useDispatch()
    return (
        <div>
            <Grid className={'items-center'}>
                <Grid.Col md={6}>
                    <div className="flex items-center">
                        <Avatar size={48} src={item.item.img}>
                            DFD
                        </Avatar>
                        <div className={'pl-xs'}>
                            <div>{item.item.name}</div>
                            <div>{item.item.price}</div>
                        </div>
                    </div>
                </Grid.Col>
                <Grid.Col md={3}>
                    <div className="flex items-center justify-center w-full">
                        <ActionIcon
                            color={'dark'}
                            variant={'filled'}
                            onClick={() =>
                                dispatch(
                                    changeOrderItemsValue({
                                        itemId: item.item.id,
                                        value: -1,
                                    }),
                                )
                            }
                        >
                            <Minus />
                        </ActionIcon>
                        <div className={'mx-xs'}>{item.value}</div>
                        <ActionIcon
                            color={'yellow'}
                            variant={'filled'}
                            onClick={() =>
                                dispatch(
                                    changeOrderItemsValue({
                                        itemId: item.item.id,
                                        value: 1,
                                    }),
                                )
                            }
                        >
                            <Plus />
                        </ActionIcon>
                    </div>
                </Grid.Col>
                <Grid.Col md={3}>
                    <div className="flex items-center justify-end">
                        <div className="font-bold text-right mr-xs"></div>
                        <ActionIcon
                            onClick={() =>
                                dispatch(deleteOrderItem(item.item.id))
                            }
                            color={'red'}
                            variant={'light'}
                        >
                            <Trash />
                        </ActionIcon>
                    </div>
                </Grid.Col>
            </Grid>
        </div>
    )
}
