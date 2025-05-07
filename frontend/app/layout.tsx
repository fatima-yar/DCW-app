// RootLayout.tsx
import { Lora, Convergence, Dosis } from 'next/font/google' // Import the fonts
import './globals.css'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import TopLogos from '@/components/TopLogos'
import Toggle from '@/components/Toggle'
import PageWrapper from '@/components/PageWrapper'

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

const dosis = Dosis({
  variable: '--font-dosis',
  subsets: ['latin'],
  weight: ['200', '400', '600', '800'], // Include desired weights
})

export const metadata = {
  title: 'Dream Catcher',
  description: 'Dream Catcher World Wide',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
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
        style={{
          backgroundImage: 'url(/bg-pattern-symmetrical.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        <TopLogos />
        <div className="lg:pt-5 pt-2  ">
          <Toggle />
          <Navbar />
        </div>
        {/* <main>{children}</main> */}
        <PageWrapper>{children}</PageWrapper>
        <Footer />
      </body>
    </html>
  )
}
