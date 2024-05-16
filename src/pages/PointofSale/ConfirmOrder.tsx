import React, { useEffect, useState } from 'react'
import { useForm } from '@mantine/form'
import { useNavigate } from 'react-router-dom'
import { ActionIcon, Avatar, Card } from '@mantine/core'
import {
    Button,
    Grid,
    Input,
    TextInput,
    Paper,
    MultiSelect,
} from '@mantine/core'
import { Dropzone } from '@mantine/dropzone'
import { CloudUpload, Minus, Plus, Trash } from 'tabler-icons-react'
import { StackTitleComponent } from '../../components/common/StackTitleComponent'
import { errorNotification } from '../../utils/helpers/notifications'
import { Switch } from '@mantine/core'
import { useSelector } from 'react-redux'
import { OrderItem } from '../../components/modules/pointofSale/OrderItem'

export const ConfirmOrder = () => {
    const navigate = useNavigate()
    const orderItems = useSelector((state: any) => state.posReducer.orderItems)
    console.log('Ordered', orderItems)
    const [total, setTotal] = useState('0')
    const [taxValue, setTaxValue] = useState('0')

    // console.log(
    //     [1, 2, 3, 4, 5].reduce((prev: any, acc: any) => {
    //         console.log(prev, acc)
    //         return prev + acc
    //     }, 0),
    // )

    useEffect(() => {
        const totalValue = orderItems
            .reduce((prev: any, acc: any) => {
                console.log(acc, prev)
                return acc.value * acc.item.price + prev
            }, 0)
            .toFixed(3)
        setTotal(totalValue)
        setTaxValue((totalValue * 0.13).toFixed(3))
    }, [orderItems])
    const data = [
        { value: 'react', label: 'Table 1' },
        { value: 'ng', label: 'Table 2' },
        { value: 'svelte', label: 'Table 3' },
        { value: 'vue', label: 'Table 4' },
    ]
    return (
        <section>
            <Paper p={'sm'}>
                <div className={'mb-md'}>
                    <StackTitleComponent>Place Order</StackTitleComponent>
                </div>
                <Grid>
                    <Grid.Col md={4} className="my-xs">
                        <TextInput
                            placeholder="Enter Customer Name"
                            label="Customer"
                        />
                    </Grid.Col>
                    <Grid.Col md={4} className="my-xs">
                        <TextInput
                            placeholder="Enter Customer Phone Number"
                            label="Phone"
                        />
                    </Grid.Col>
                    <Grid.Col md={4} className="my-xs">
                        <MultiSelect
                            data={data}
                            label="Table"
                            placeholder="Enter table number"
                            className="w-3/5"
                        />
                    </Grid.Col>
                </Grid>

                <Grid>
                    <Grid.Col md={4} className="my-xs">
                        <TextInput placeholder="Remarks" label="Remarks" />
                    </Grid.Col>

                    <Grid.Col md={4} className="my-xs">
                        <div className="">Order Type</div>
                        <div className="space-x-xs">
                            <Button variant="outline" color="yellow">
                                Takeaway
                            </Button>
                            <Button variant="filled" color="gray">
                                Order
                            </Button>
                            <Button variant="filled" color="gray">
                                Checkout
                            </Button>
                        </div>
                    </Grid.Col>

                    <Grid.Col md={2} className="my-xs">
                        <div className="">Payment Method</div>
                        <div className="space-x-xs">
                            <Button variant="outline" color="yellow">
                                Cash
                            </Button>
                            <Button variant="filled" color="gray">
                                Card
                            </Button>
                        </div>
                    </Grid.Col>
                </Grid>

                <Grid className={'w-full h-full'}>
                    <Grid.Col md={8}>
                        Order Items
                        {orderItems.map((item: any, key: number) => (
                            <OrderItem item={item} key={key} />
                        ))}
                        {/* <div>
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
                                        <div className={'mx-xs'}>
                                            {item.value}
                                        </div>
                                        <ActionIcon
                                            color={'primary'}
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
                                                dispatch(
                                                    deleteOrderItem(
                                                        item.item.id,
                                                    ),
                                                )
                                            }
                                            color={'red'}
                                            variant={'light'}
                                        >
                                            <Trash />
                                        </ActionIcon>
                                    </div>
                                </Grid.Col>
                            </Grid>
                        </div> */}
                    </Grid.Col>

                    <Grid.Col md={4}>
                        <div className="overflow-auto flex flex-col justify-between mt-sm">
                            <Card className="shadow-md bg-slate-100">
                                <div className="mr-2xl flex-col justify-end">
                                    <div className=" xs: text-md md:text-1lg my-xs flex justify-between">
                                        <div className="">Sub Total</div>
                                        <div className="">{total}</div>
                                    </div>
                                    <div className=" xs: text-md md:text-lg my-xs flex justify-between">
                                        <div className="">Tax</div>
                                        <div className="">{taxValue}</div>
                                    </div>
                                    <div className=" xs: text-md md:text-lg my-xs flex justify-between">
                                        <div className="">Amount Paid</div>
                                        <div className="">0.00</div>
                                    </div>
                                    <div className=" xs: text-md md:text-lg my-xs flex justify-between">
                                        <div className="">Discount</div>
                                        <div className="">0.00</div>
                                    </div>
                                    <div className=" xs: text-md md:text-lg my-xs flex justify-between">
                                        <div className="">Tender Amount</div>
                                        <div className="">0.00</div>
                                    </div>
                                    <div className=" xs: text-md md:text-lg font-bold my-xs flex justify-between">
                                        <div className="">Total Payment</div>
                                        <div className="">
                                            {' '}
                                            {(+total + +taxValue).toFixed(3)}
                                        </div>
                                    </div>
                                    <div className="mt-md">
                                        <Button
                                            className="w-full"
                                            color="yellow"
                                        >
                                            Place Order
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Grid.Col>
                </Grid>
            </Paper>
        </section>
    )
}
