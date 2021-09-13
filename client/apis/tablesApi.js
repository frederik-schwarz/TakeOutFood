import request from 'superagent'

const rootUrl = '/api/v1/Home'

export function getAllTables () {
    return request
    .get(rootUrl + '/bookings')
    .then(res => {
        return res.body
    })
}
export function updateT(id, newTable) {
    return request
    .patch(rootUrl + '/bookings/' + id)
    .send(newTable)
    .then(res => res.body)
}
