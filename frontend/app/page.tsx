import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div
      className="min-h-screen bg-white"
      style={{
        backgroundImage: 'url(/bg-pattern.png)',
        backgroundSize: 'auto 150%', // Adjust this value to control the size of the background image
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat',
      }}
    >
      {/* White space above Navbar */}
      <div className="pt-20">
        {/* Navbar */}
        <Navbar />
      </div>

      {/* Main Content */}
      <main className="flex items-center justify-center min-h-[calc(100vh-120px)]">
        <h1 className="text-5xl font-bold">Welcome to My Website</h1>
      </main>

      {/* Footer */}
      <footer className="py-4 text-center text-sm text-gray-500">
        &copy; 2025 My Website. All rights reserved.
      </footer>
    </div>
  )
}
