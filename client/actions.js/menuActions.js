import { getAllMenuItems } from '../apis/takeOutApi'


export const SET_MENU = 'SET_MENU'


export function AllMenuItems(items) {
    return {
        type: SET_MENU,
        items
    }
}

export const setAllItems = () => {
    return dispatch => {
        return getAllMenuItems()
        .then(items => {
            return dispatch(AllMenuItems(items))
        })
    }
}