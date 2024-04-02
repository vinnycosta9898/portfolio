import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'

const poppins = Poppins({ subsets: ['latin'], weight: ['400'] })

export const metadata: Metadata = {
  title: 'Vinicius Costa',
  description: 'Welcome to my portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Toaster richColors />
      <body
        className={`${poppins.className} min-w-screen bg-blue flex flex-col items-center`}
      >
        {children}
      </body>
    </html>
  )
}
