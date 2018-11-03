import axios from 'axios'

let reqTimer = null
let resTimer = null
let reqCount = false
let resCount = false

const service = axios.create({
  withCredentials: true // 允许携带cookie
  // baseURL: process.env.API_ROOT
})

service.interceptors.request.use(
  (config) => {
    if (!reqCount) {
      reqCount = true
      reqTimer = setTimeout(() => {
        clearTimeout(reqTimer)
        reqCount = false
      }, 1000)
    }
    return config
  },
  (err) => { Promise.reject(err) }
)

// http response
service.interceptors.response.use(
  response => response,
  (error) => {
    if (!resCount) {
      resCount = true
      resTimer = setTimeout(() => {
        resCount = false
        clearTimeout(resTimer)
      }, 5000)
    }
    return Promise.reject(error.response)
  })
// service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// get请求
export const Get = (url, args = {}) => {
  args.timestamp = new Date().getTime()
  return new Promise(function (resolve, reject) {
    service.get(url, { params: args })
      .then(function (r) {
        resolve(r)
      }).catch(function (err) {
        reject(err)
      })
  })
}

// post请求
export const Post = (url, args) => {
  return new Promise(function (resolve, reject) {
    service.post(url, args)
      .then(function (r) {
        resolve(r)
      }).catch(function (err) {
        reject(err)
      })
  })
}

// export default {
//   Post,
//   Get,
//   service
// }
