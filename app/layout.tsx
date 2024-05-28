import type { Metadata } from 'next'
import { Outfit as FontSans } from 'next/font/google'
import { cn } from './lib/utils'
import './styles/globals.css'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'no way no how',
  description:
    'Listen to the music of no way no how on Spotify, Apple Music, and more.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          fontSans.variable,
          'min-h-screen bg-blue-300 font-sans antialiased'
        )}
      >
        {children}
      </body>
    </html>
  )
}
