import Footer from '@/components/Footer'
import Navbar from '../components/Navbar'
import Motto from '../components/Motto'
import HeroBox from '../components/HeroBox'

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
      <main className="flex items-center justify-center min-h-[calc(100vh-120px)]">
        <h1 className="text-5xl font-bold">Dream Catcher</h1>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
