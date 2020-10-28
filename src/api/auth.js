import axios from 'axios'
import { app } from '@/config.js'

const req = axios.create({
  baseURL: app.url,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
})

let usr = JSON.parse(localStorage.getItem('rootstack-user')) || {
  token: null,
  user: null,
}

req.interceptors.request.use((config) => {
  // console.log(config)
  if (usr && usr.token) {
    config.headers.Authorization = `Bearer ${usr.token}`
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

export async function update (data) {
  if (data && data.token !== undefined) {
    localStorage.setItem('rootstack-user', JSON.stringify(usr = data))
  }
  return data
}

export function check () {
  return !!usr && !!usr.token
}

export function user () {
  return usr ? usr.user : null
}

export function getToken () {
  return usr.token
}

export function login (data) {
  return req.post('auth/login', data).then(({ data }) => update(data))
}

export function me () {
  return req.get('auth/me').then(({ data }) => data)
}

export function register (data) {
  return req.post('auth/register', data).then(({ data }) => update(data))
}

export function logout () {
  return update({ token: null, user: { name: null } })
}
