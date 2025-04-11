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
        backgroundSize: 'cover', // Use cover to make sure it stays consistent
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat', // Disable repeating to avoid gaps
        backgroundAttachment: 'fixed', // Keep the background fixed during scroll
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
{
  /* <Motto {...blocks[0]} />
      <HeroBox
        {...blocks[1]}
        button={blocks[1]?.cta}
        transparentBox={blocks[1]?.transparentBox}
      />

      {/* Info Box */
}
// <InfoBox {...blocks[2]} />
