import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { useSpring, animated } from 'react-spring'
import UpdateBookings from './UpdateBookings'

 import BookCustomerTime from './BookCustomerTime'

function BookCustomer({items, history}) {
const [open, changeOpen] = useState(false)
const [open2, changeOpen2] = useState(true)
// let today = new Date()

// let hours = today.getHours() + 1
// let minutes = today.getMinutes() 


const[formData, setFormData] = useState({
    booked: 0,
    name: 'none',
    time: 'none',
    number: 0
})

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
          })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        changeOpen(!open)
        changeOpen2(!open2)
    }
 return (
     <>
        <div className='guestsDivParent'>
        <form className='guestsForm' onSubmit={handleSubmit}>
        <span className='spanContainer'>
         <label className='guestsLabel' htmlFor="booked">Guests:</label>
         <input className='guestsInput' type='number' name="booked" id="booked" onChange={handleChange} value={formData.booked} /><br />
        </span>
        <span className='buttonGuestsParent'>
        {!!open2 &&<button className='ButtonGuests'>Next</button>}
        </span> 
        </form>
        {!!open &&<BookCustomerTime table={formData}/>}
        </div>
        
     </>
 )
}

const ms2p = (globalState) => {
    return {
        items: globalState.tablesReducer
    }
}
export default connect(ms2p)(BookCustomer)