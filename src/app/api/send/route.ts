import { EmailTemplate } from '../../../components/EmailTemplate'
import { Resend } from 'resend'
import { NextResponse } from 'next/server'
import { FormSchemaData } from '@/app/page'

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY)

  const { name, subject, content } = req.body as unknown as FormSchemaData

  console.log(name, subject, content)

  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['viniciuscosta9898@icloud.com'],
      subject,
      react: EmailTemplate({ name, subject, content }),
    })
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error })
  }
}
