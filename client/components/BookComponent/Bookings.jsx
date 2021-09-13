import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { useSpring, animated } from 'react-spring'
import UpdateBookings from './UpdateBookings'

function Bookings({items, history}) {
    const[open, changeOpen] = useState({})
    const[show, changeShow] = useState(0)
    


    function handleClick(id) {
    items.map(item => {
       if(item.id === id) {
           changeOpen(item)
           changeShow(1)
           
       }
       })
    }
 return (
     <>
     <ul>
         {items.map(item => {
             return(
                 <li key={item.id}>
                    <span>Table Number:</span>
                    <span>{item.table}</span>
                    <br></br>
                    <span>booked for:</span>
                    <span>{item.booked}</span>
                    <button onClick={() => handleClick(item.id)}>Book now</button>
                    
                 </li>
                
             )
             
         })}
     </ul>
         {!!show &&<UpdateBookings table={open}/>}
        
     </>
 )
}

const ms2p = (globalState) => {
    return {
        items: globalState.tablesReducer
    }
}
export default connect(ms2p)(Bookings)