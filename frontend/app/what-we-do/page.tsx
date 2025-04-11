import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

import TopLogos from '@/components/TopLogos'
import Toggle from '@/components/Toggle'
import WhatWeDoComponent from '@/components/WhatWeDoComponent'

export default async function whatWeDo() {
  return (
    <div
      className="min-h-screen bg-white"
      style={{
        backgroundImage: 'url(/bg-pattern.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <div>
        <TopLogos />
      </div>

      <div className="pt-5">
        <Toggle />

        <Navbar />
      </div>

      {/* Main Content */}

      <WhatWeDoComponent />

      <Footer />
    </div>
  )
}
