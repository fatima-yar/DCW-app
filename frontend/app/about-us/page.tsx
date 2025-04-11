import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import TopLogos from '@/components/TopLogos'
import Toggle from '@/components/Toggle'
import AboutUs from '@/components/AboutUs'

export default async function aboutUs() {
  return (
    <div
      className="min-h-screen bg-white"
      style={{
        backgroundImage: 'url(/bg-pattern.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
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

      <AboutUs />

      <Footer />
    </div>
  )
}
