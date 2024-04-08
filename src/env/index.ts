import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  NODE_END: z.enum(['dev', 'production']).default('production'),
  PORT: z.coerce.number().default(3000),
  URL: z.string(),
  RESEND_API_KEY: z.string(),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('Invalid environments variables')

  throw new Error('Invalid environments variables')
}

export const env = _env.data
