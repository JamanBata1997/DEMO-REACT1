import { FOOD_ITEMS } from '../../../utils/constants/fooditems.constants'

export const changeOrderItemsValue = (payload: any) => ({
    type: 'CHANGE_ITEM',
    payload: payload,
})
export const deleteOrderItem = (payload: any) => ({
    type: 'DELETE_ITEM',
    payload: payload,
})
export const changeFoodItemsList = (
    itemsList: any,
    payload: { itemId: number; value: number },
) => {
    let tempList = [...itemsList]
    const item = FOOD_ITEMS.find(v => v.id === payload.itemId)
    //item exist garirako xaina vaney every item tesko haina vaney tyo item exist garirako xaina vanera bujnu parxaa
    if (tempList.every(v => v.item.id !== payload.itemId)) {
        tempList.push({ item, value: payload.value })
        // tempList = [...tempList, { item: item, value: payload.value }]
    } else {
        //paila suru index vetayo ani index ma vayeko item xa tesko value matra change gardyo
        const index = tempList.findIndex(v => v.item.id === payload.itemId)
        tempList[index].value += payload.value
        if (tempList[index].value <= 0) {
            tempList = deleteFoodItem(tempList, payload.itemId)
        }
    }
    return tempList
}

export const deleteFoodItem = (itemsList: any, itemId: number) =>
    [...itemsList].filter(v => v.item.id !== itemId)
