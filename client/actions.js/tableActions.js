import { getAllTables } from "../apis/tablesApi"
import { updateT } from "../apis/tablesApi"


export const SET_TABLES = 'SET_TABLES'
export const UPDATE_TABLE = 'UPDATE_TABLE'


export function AllTables(items) {
    return {
        type: SET_TABLES,
        items
    }
}
const updateTableCurrent = (oldTable, newTable) => {
   
    return {
        type: UPDATE_TABLE,
        old: oldTable,
        table: newTable
    }
}

/////////////////////////////////////////////////////////////////////////

export const setAllTables = () => {
    return dispatch => {
        return getAllTables()
        .then(items => {
            return dispatch(AllTables(items))
        })
    }
}
export function updateTable (task, newTable) {
    return dispatch => {
        updateT(task.id, newTable)
        .then(item => {
            dispatch(updateTableCurrent(task.table, newTable))
        })
            }
    

}