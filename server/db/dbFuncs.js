const connection = require('./connect')

//write your db funcs that are called from routes here

const getAllItems = (db = connection) => {
    return db('forSale')
    .select()
    .catch(err => {
        console.log(err.message)
    })
}
const getAllItemsBasket = (db = connection) => {
    return db('basket')
    .select()
    .catch(err => {
        console.log(err.message)
    })
}
const getAllLocations = (db = connection) => {
    return db('locations')
    .select()
    .catch(err => {
        console.log(err.message)
    })
}
const deleteMenuItem = (id, db = connection)=> {
    return db('forSale')
    .where('id', id)
    .delete()
}
const deleteBasketItem = (id, db = connection)=> {
    return db('basket')
    .where('id', id)
    .delete()
}
const deleteLocation = (id, db = connection)=> {
    return db('locations')
    .where('id', id)
    .delete()
}

module.exports = {
 getAllItems,
 deleteMenuItem,
 getAllLocations,
 getAllItemsBasket,
 deleteBasketItem,
 deleteLocation,
}