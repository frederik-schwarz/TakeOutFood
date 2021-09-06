import request from 'superagent'

const rootUrl = '/api/v1/Home'

export function getAllMenuItems () {
    return request
    .get(rootUrl)
    .then(res => {
        return res.body
    })
}



// export function getTemplate () {
//   return request.get(rootUrl + '/fruits')
//     .then(res => {
//       return res.body.fruits
//     })
// }