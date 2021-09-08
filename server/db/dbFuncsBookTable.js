const connection = require('./connect')

const getAllbookings = (db = connection) => {
    return db('tables')
    .select()
    .catch(err => {
        console.log(err.message)
    })
}
const deleteTables = (id, db = connection)=> {
    return db('tables')
    .where('id', id)
    .delete()
}
const updateBooking = (id, item, db = connection) => {
    console.log(id, item, 'this is what the functions is being sent')
    return db('tables')
    .where('id', id)
    .update(item)
    .catch(err => {
        console.log(err.message)
    })
}
const addTable = (item, db = connection) => {
    return db('tables')
    .insert(item)
    .catch(err => {
        err.message
    })
}

module.exports = {
    getAllbookings,
    deleteTables,
    updateBooking,
    addTable,

}