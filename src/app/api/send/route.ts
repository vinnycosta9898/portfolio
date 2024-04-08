import { EmailTemplate } from '../../../components/EmailTemplate'
import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)

  const { name, subject, content } = await req.json()

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
