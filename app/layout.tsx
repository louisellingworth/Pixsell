import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Press_Start_2P } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'
import React from 'react'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const pressStart2P = Press_Start_2P({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-press-start-2p',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk'
})

export const metadata: Metadata = {
  title: 'Systems That Scale | AI Consultancy',
  description: 'Professional AI implementation and system scaling solutions for enterprise companies.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${pressStart2P.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <Navigation />
        {children}
      </body>
    </html>
  )
} 