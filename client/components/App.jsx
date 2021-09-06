import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {Route} from 'react-router-dom'

import { setAllItems } from '../actions.js/menuActions'

import Menu from './Menu'
import Nav from './Nav'


function App ({dispatch}) {
  useEffect(() => {
    dispatch(setAllItems())
  }, [])

  return (
    <>
      <Route path='/' component={Nav}/>
      <Route exact path='/Menu' component={Menu}/>
    </>
  )
}


export default connect()(App)