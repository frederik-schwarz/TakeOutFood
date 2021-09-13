
import React, {useEffect, useState} from 'react'
import { updateTable } from '../../actions.js/tableActions'
import { connect } from 'react-redux'


function UpdateBookings (props) {
  
    
    const {dispatch, table, history} = props

    
   

    const [formData, setFormData] = useState({
        id: table.id,
        booked: table.booked,
        name: table.name,
        time: table.time,
        number: table.number
      })


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
          })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateTable(table, formData))
       
    }
    
    
    return (
        <>
        {!!table &&<div key={table.id}>
        <form onSubmit={handleSubmit}>
        <label htmlFor="booked">Guests:</label>
        <input type='number' name="booked" id="booked" onChange={handleChange} value={formData.booked} /><br />
        
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" onChange={handleChange} value={formData.name} /><br />

        <label htmlFor="time">Time:</label>
        <input type="text" name="time" id="time" onChange={handleChange} value={formData.time} /><br />

        <label htmlFor="number">Phone number:</label>
        <input type='number' name="number" id="number" onChange={handleChange} value={formData.number} /><br />

    
        
        <button>click me</button>
        </form>
        </div>
}
        </>
    )
}

export default connect()(UpdateBookings)