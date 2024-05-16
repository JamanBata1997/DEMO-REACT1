import { OrderItem } from './OrderItem'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { Button, Card } from '@mantine/core'
import { useNavigate } from 'react-router-dom'

export const OrderItemsPos = () => {
    const navigate = useNavigate()
    const orderItems = useSelector((state: any) => state.posReducer.orderItems)
    // console.log(...orderItems)
    const [total, setTotal] = useState('0')
    const [taxValue, setTaxValue] = useState('0')

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

    return (
        <section className={'p-sm'}>
            <div className="text-md font-bold">Order Items</div>
            <div
                className="order-items-list overflow-y"
                style={{ height: 'calc(100vh - 330px)' }}
            >
                {orderItems.map((item: any, key: number) => (
                    <OrderItem item={item} key={key} />
                ))}
            </div>
            <div className="flex flex-col justify-between mt-sm">
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
                        <div className=" xs: text-md md:text-lg font-bold my-xs flex justify-between">
                            <div className="">Gross Amount</div>
                            <div className="">
                                {' '}
                                {(+total + +taxValue).toFixed(3)}
                            </div>
                        </div>
                        <div className="mt-md">
                            <Button
                                color="yellow"
                                className="w-full"
                                onClick={() => navigate('placeorder')}
                            >
                                Confirm Order
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    )
}
