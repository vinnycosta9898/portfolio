import axios from 'axios'

const baseURL = 'https://viniciuscosta1998.vercel.app/api'

export const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})
