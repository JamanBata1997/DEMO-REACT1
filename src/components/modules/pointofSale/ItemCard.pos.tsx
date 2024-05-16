import { useState } from 'react'
import { Card, Modal } from '@mantine/core'
import { useDispatch } from 'react-redux'
import { onErrorImage } from '../../../utils/helpers/imageUrlHandler'
import { changeOrderItemsValue } from '../../../store/modules/pos/actions'

export const ItemCardPos = (props: any) => {
    const dispatch = useDispatch()
    const { item } = props
    const [opened, setOpened] = useState(false)

    const handleDoubleClick = () => {
        setOpened(true)
    }

    return (
        <>
            <Card
                p={0}
                withBorder
                onClick={() =>
                    dispatch(
                        changeOrderItemsValue({ itemId: item.id, value: 1 }),
                    )
                }
            >
                <img
                    src={item.img}
                    alt=""
                    className={'w-full rounded-md'}
                    style={{ aspectRatio: '16 / 9' }}
                    onDoubleClick={handleDoubleClick}
                    onError={onErrorImage}
                />
                <div className="item-content-area p-xs">
                    <div className="font-bold">{item.name}</div>
                    <div className="">${item.price}</div>
                </div>
            </Card>

            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title={item.name}
            >
                <img
                    src={item.img}
                    alt={item.name}
                    className={'w-full rounded-md mb-sm'}
                    onError={onErrorImage}
                />
                <div className="item-content-area">
                    <div className="font-bold">{item.name}</div>
                    <div className="">${item.price}</div>
                    <div className="mt-sm">
                        {item.description || 'No description available.'}
                    </div>
                </div>
            </Modal>
        </>
    )
}
