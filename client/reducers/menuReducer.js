//Write reducers here I think this is part which links to global store


// import { SET_FRUITS } from '../actions'

import { SET_MENU } from "../actions.js/menuActions"

// const initialState = []
const initialState = []

const reducer  = (state = initialState, action) => {
    switch (action.type) {
        case SET_MENU:
            return action.items
        default: 
            return state
    }
}

export default reducer