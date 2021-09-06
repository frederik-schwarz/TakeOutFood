import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'

function Nav({history}) {
    return (
        <ul>
            <li onClick={() => history.push('/')}>Home</li>
            <li onClick={() => history.push('/Menu')}>Order Online</li>
        </ul>
    )
  
}
export default connect() (Nav)