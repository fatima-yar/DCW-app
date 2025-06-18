'use client'

import { useLocale } from './LocaleContext'
import { useState, useEffect } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import TopLogos from './TopLogos'
import Toggle from './Toggle'
import PageWrapper from './PageWrapper'

export default function RootClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { isUK } = useLocale()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const backgroundStyle = isUK
    ? { backgroundColor: '#f1f9fb' } // UK
    : {
        backgroundImage: 'url(/bg-pattern-symmetrical.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }

  return (
    <div style={backgroundStyle}>
      <TopLogos />
      <div className="lg:pt-5 pt-2">
        <Toggle />
        <Navbar />
      </div>
      <PageWrapper>{children}</PageWrapper>
      <Footer />
    </div>
  )
}
