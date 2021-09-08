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
const updateSalesItems = (id, item, db = connection) => {
    return db('forSale')
    .where('id', id)
    .update(item)
}
const updateLocations = (id, item, db = connection) => {
    return db('locations')
    .where('id', id)
    .update(item)
    .catch(err => {
        err.message
    })
}
const addItemBasket = (item, db = connection) => {
    return db('basket')
    .insert(item)
    .catch(err => {
        err.message
    })
}
const addItemToMenu = (item, db = connection) => {
    return db('forSale')
    .insert(item)
    .catch(err => {
        err.message
    })
}
const addLocations = (item, db = connection) => {
    return db('locations')
    .insert(item)
    .catch(err => {
        err.message
    })
}

module.exports = {
 getAllItems,
 deleteMenuItem,
 getAllLocations,
 getAllItemsBasket,
 deleteBasketItem,
 deleteLocation,
 updateSalesItems,
 updateLocations,
 addLocations,
 addItemToMenu,
 addItemBasket,
 
}