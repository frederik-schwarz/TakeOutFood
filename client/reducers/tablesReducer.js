import { SET_TABLES, UPDATE_TABLE } from "../actions.js/tableActions"

// const initialState = []
const initialState = []

const reducer  = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case SET_TABLES:
            return action.items
        case UPDATE_TABLE:
            return state.map(booking => {
                if(booking.id === action.old) {
                    return action.table
                } {
                    return booking
                }
            })
        default: 
            return state
    }
}

export default reducer