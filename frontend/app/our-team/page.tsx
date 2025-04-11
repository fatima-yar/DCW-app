import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

import TopLogos from '@/components/TopLogos'
import Toggle from '@/components/Toggle'
import { notFound } from 'next/navigation'
import { OurTeam } from '@/components/OurTeam'

export default async function ourTeam() {
  return (
    <div
      className="min-h-screen bg-white"
      style={{
        backgroundImage: 'url(/bg-pattern.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        // overflowX: 'hidden',
      }}
    >
      <div>
        <TopLogos />
      </div>

      {/* White space above Navbar */}
      <div className="pt-5">
        <Toggle />
        {/* Navbar */}
        <Navbar />
      </div>

      {/* Main Content */}

      <OurTeam />
      {/* <BlockRenderer blocks={blocks} /> */}

      {/* Footer */}
      <Footer />
    </div>
  )
}
