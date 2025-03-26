import type { Metadata } from 'next'
import { Lora, Convergence } from 'next/font/google' // Import the fonts
import './globals.css'

// Load the fonts
const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin'],
  weight: ['400', '700'], // Include the font weights you want to use
})

const convergence = Convergence({
  variable: '--font-convergence',
  subsets: ['latin'],
  weight: ['400'], // Add weights you need (Convergence has a default weight of 400)
})

export const metadata: Metadata = {
  title: 'Your App Title',
  description: 'Your app description',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${convergence.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
