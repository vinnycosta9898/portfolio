interface EmailTemplate {
  name: string
  subject: string
  content: string
}

export function EmailTemplate({ name, subject, content }: EmailTemplate) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{subject}</h2>
      <span>{content}</span>
    </div>
  )
}
