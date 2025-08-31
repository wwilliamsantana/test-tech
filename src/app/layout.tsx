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
    <html lang="pt-br">
      <body className={`${fontRoboto.variable} min-h-screen  antialiased`}>
        <header className="border-b border-black/10 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
            <h1 className="text-lg font-semibold">Crystal 💎</h1>
            <button className="text-sm bg-cyan-600 px-4 py-2 border-none rounded text-white">
              Faça uma simulação agora!
            </button>
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-6">{children}</main>
      </body>
    </html>
  )
}
