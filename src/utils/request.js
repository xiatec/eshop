import axios from 'axios'
const instance = axios.create({
    baseURL: 'https://www.fastmock.site/mock/50b098b5e166eb3be3be5c5fc046f378/eshop',
    timeout: 10000
})
export const get = (url, params = {}) => {
    return new Promise((resolve, reject) => {
        instance.get(url, { params }).then((response) => {
            resolve(response.data)
        }, err => {
            reject(err)
        })
    })
}
export const post = (url, data = {}) => {
    return new Promise((resolve, reject) => {
        instance.post(url, data, {
            baseURL: 'https://www.fastmock.site/mock/50b098b5e166eb3be3be5c5fc046f378/eshop',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            resolve(response)
        }, err => {
            reject(err)
        })
    })
}