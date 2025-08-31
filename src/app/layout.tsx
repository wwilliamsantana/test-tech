import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

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
    <html lang="pt-br">
      <body className={`${fontRoboto.variable} min-h-screen  antialiased`}>
        <header className="border-b border-black/10 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
            <h1 className="text-lg font-semibold">Crystal 💎</h1>
            <Link
              href={'/'}
              className="text-sm  px-4 py-2 text-zinc-500 border-zinc-300 border rounded "
            >
              Início
            </Link>
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-6">{children}</main>
      </body>
    </html>
  )
}
