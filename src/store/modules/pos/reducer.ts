import { CHANGE_ITEM, DELETE_ITEM } from './actionTypes'
import { changeFoodItemsList, deleteFoodItem } from './actions'

const initialState = {
    orderItems: [],
}

export const posReducer = (state = initialState, action: any) => {
    console.log('order items', state.orderItems)
    console.log('action', action)
    switch (action.type) {
        //change item le state lai change gardinxaa
        case CHANGE_ITEM:
            // console.log(
            //     'Reducer: ',
            //     changeFoodItemsList(state.orderItems, action.payload),
            // )
            return {
                //default ma j state xa teslai nai return garnu
                ...state,
                orderItems: changeFoodItemsList(
                    state.orderItems,
                    action.payload,
                ),
            }
        case DELETE_ITEM:
            return {
                ...state,
                orderItems: deleteFoodItem(state.orderItems, action.payload),
            }
        default:
            return state
    }
    // console.log('order items', state.orderItems)
}
