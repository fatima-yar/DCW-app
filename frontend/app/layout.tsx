import { Lora, Convergence, Dosis } from 'next/font/google' // Import the fonts
import './globals.css'

// Load the Google fonts
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
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/sansation?styles=756"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${lora.variable} ${convergence.variable} ${dosis.variable} font-sansation antialiased`} // Added Dosis variable
      >
        {children}
      </body>
    </html>
  )
}
