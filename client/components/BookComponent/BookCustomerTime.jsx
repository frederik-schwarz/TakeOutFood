import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { useSpring, animated } from 'react-spring'
import { updateTable } from '../../actions.js/tableActions'

function BookCustomerTime({dispatch, table, items, history}) {
    const[full, changefull] = useState(false)
    var table
    items.map(item => {
        if(parseInt(table.booked) <= item.space){

        } else {
            console.log('there are no spaces available')
        }
    })
    
    const[data, setFormData] = useState({
        booked: table.booked,
        name: '',
        time: table.time,
        number: 0
    })
    const handleChange = (e) => {
        setFormData({
            ...data,
            [e.target.name]: e.target.value
          })
          console.log(e.target.name, e.target.value)
          console.log(data.time)
          
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data)
        items.map(item => {
            if(parseInt(table.booked) <= item.space && item.booked === 0){
                dispatch(updateTable(item, data))
                console.log('it worked')
            } else {
                changefull(!full)
            }
        })
        

    }
 return (
     <>
     <div className='TimeDivParent'>
        <form onSubmit={handleSubmit}>
        <span className='spanTimeContainer'>
        <label className='guestsLabel' htmlFor="time">Choose a time:</label>
            <select className='select-Menu' id="time" name="time" onChange={handleChange} value={data.time} >
                <option className='selectedItems' value='8:00'>8:00</option>
                <option className='selectedItems' value='8:15'>8:15</option>
                <option className='selectedItems' value='8:30'>8:30</option>
                <option className='selectedItems' value='8:45'>8:45</option>
            </select>
            <label className='guestsLabel' htmlFor="name">Full Name:</label>
            <input className='timeInput' type='text' name="name" id="name" onChange={handleChange} value={data.name} /><br />
            <label className='guestsLabel' htmlFor="number">Contact Number:</label>
            <input className='timeInput' type='number' name="number" id="number" onChange={handleChange} value={data.number} /><br />
            </span>
            <button type='submit'>Book now!</button>
        </form>
        {!!full &&<span>We are fully booked sorry!</span>}
        </div>


        
     </>
 )
}

const ms2p = (globalState) => {
    return {
        items: globalState.tablesReducer
    }
}
export default connect(ms2p)(BookCustomerTime)