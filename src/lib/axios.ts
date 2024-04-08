import { env } from '@/env'
import axios from 'axios'

export const api = axios.create({
  baseURL:  `${env.URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
})
