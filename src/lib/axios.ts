import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://viniciuscosta1998.vercel.app/api',
  headers: {
    'Content-Type': 'application/json',
  },
})
