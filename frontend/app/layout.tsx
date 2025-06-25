

import './globals.css'
import { LocaleProvider } from '../components/LocaleContext'
import { Lora, Convergence, Dosis } from 'next/font/google'
import RootClientLayout from '../components/RootClientLayout'

const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin'],
  weight: ['400', '700'],
})

const convergence = Convergence({
  variable: '--font-convergence',
  subsets: ['latin'],
  weight: ['400'],
})

const dosis = Dosis({
  variable: '--font-dosis',
  subsets: ['latin'],
  weight: ['200', '400', '600', '800'],
})

export const metadata = {
  title: 'Dream Catchers World Wide',
  description: 'Dream Catchers World Wide',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/sansation?styles=756"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${lora.variable} ${convergence.variable} ${dosis.variable} font-sansation antialiased`}
      >
        <LocaleProvider>
          <RootClientLayout>{children}</RootClientLayout>
        </LocaleProvider>
      </body>
    </html>
  )
}
