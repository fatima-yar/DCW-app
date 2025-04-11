import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

import TopLogos from '@/components/TopLogos'
import Toggle from '@/components/Toggle'
import MissionStatement from '@/components/MissionStatement'

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

      <MissionStatement />

      <Footer />
    </div>
  )
}
