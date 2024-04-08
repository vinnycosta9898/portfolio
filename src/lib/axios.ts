import { env } from '@/env'
import axios from 'axios'

const baseURL =
  env.NODE_END === 'dev' ? 'http://localhost:3000/api' : `${env.URL}/api`

export const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})
