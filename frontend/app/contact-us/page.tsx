import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import TopLogos from '@/components/TopLogos'
import Toggle from '@/components/Toggle'
import ContactUs from '@/components/ContactUs'

export default async function contactUs() {
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

      <ContactUs />

      <Footer />
    </div>
  )
}
