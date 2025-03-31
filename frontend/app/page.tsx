import Footer from '@/components/Footer'
import Navbar from '../components/Navbar'
import Motto from '../components/Motto'
import HeroBox from '../components/HeroBox'
import InfoBox from '../components/InfoBox'

export default function Home() {
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
      {/* White space above Navbar */}
      <div className="pt-20">
        {/* Navbar */}
        <Navbar />
      </div>

      {/* Main Content */}
      <Motto />
      <HeroBox />

      {/* Info Box */}
      <InfoBox />
      {/* Footer */}
      <Footer />
    </div>
  )
}
