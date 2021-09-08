
import React, {useEffect, useState} from 'react'
import { updateTable } from '../../actions.js/tableActions'
import { connect } from 'react-redux'
import { AllMenuItems } from '../../actions.js/menuActions'

function UpdateBookings ({dispatch, table}) {
    const [editing, setEditing] = useState(table) // useState({id: 2, item: "hello"})
    const handleChange = (e) => {
       setEditing({id: table.id, name: e.target.value}) //setEditing("hello")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateTable(table, editing))
       
    }
    
    return (
        <>
        <form onSubmit={(e) => handleSubmit(e)}>
        <label for='bookingName'></label>
        <input onChange={(e) => handleChange(e)} value={editing.name} name='bookingName' className="change-todo" placeholder="change a todo" autoFocus={true} />
        <button>click me</button>
        </form>
        </>
    )
}

export default connect()(UpdateBookings)