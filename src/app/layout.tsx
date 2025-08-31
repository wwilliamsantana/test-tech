import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const fontRoboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Crystal Drones',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${fontRoboto.variable}  antialiased`}>{children}</body>
    </html>
  )
}
