import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { useSpring, animated } from 'react-spring'
import UpdateBookings from './UpdateBookings'

function Bookings({items, history}) {
    const[open, changeOpen] = useState(0)
    function handleClick() {
        changeOpen(1)
    }
 return (
     <ul>
         {items.map(item => {
             return(
                 <li key={item.id}>
                    <span>{item.table}</span>
                    <span>{item.booked}</span>
                    <button onClick={() => handleClick()}>Book now</button>
                    {!!open &&<UpdateBookings table={item}/>}
                 </li>
             )
         })}
     </ul>
 )
}

const ms2p = (globalState) => {
    return {
        items: globalState.tablesReducer
    }
}
export default connect(ms2p)(Bookings)