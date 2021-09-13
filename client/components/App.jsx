import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {Route} from 'react-router-dom'

import { setAllItems } from '../actions.js/menuActions'
import { setAllTables } from '../actions.js/tableActions'

import Menu from './Menu'
import Nav from './Nav'
import Starters from './Starters'
import MenuNav from './MenuNav'
import SharePlates from './SharePlates'
import Mains from './Mains'
import Bookings from './BookComponent/Bookings'
import BookCustomer from './BookComponent/BookCustomer'





function App ({dispatch}) {
  useEffect(() => {
    dispatch(setAllItems())
    dispatch(setAllTables())
  }, [])

  return (
    <>
      <Route path='/' component={Nav}/>
      <div className="appDivMenu">
      <Route path='/Menu' component={MenuNav}/>
      <Route exact path='/Menu' component={Menu}/>
      <Route exact path='/Menu/starters' component={Starters}/>
      <Route exact path='/Menu/mains' component={Mains}/>
      <Route exact path='/Menu/share' component={SharePlates}/>
      <Route exact path='/bookings' component={Bookings}/>
      <Route exact path='/bookings/customer' component={BookCustomer}/>

      </div>
    </>
  )
}


export default connect()(App)