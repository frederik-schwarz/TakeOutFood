import { combineReducers } from 'redux'

import menuReducer from './menuReducer'
import tablesReducer from './tablesReducer'

export default combineReducers({
  menuReducer,
  tablesReducer,
})

//exports all the reducers from this file