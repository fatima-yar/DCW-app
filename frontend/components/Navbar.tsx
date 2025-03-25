// components/ui/NavbarHome.tsx

'use client' // Add this at the top

import NavbarHome from './ui/NavbarHome'

export default function Navbar() {
  return (
    <div className=" w-full h-12 bg-gradient-to-r from-[#8A5082] to-[#A5CAD2]">
      <div className="flex items-center justify-start h-full px-6">
        <NavbarHome />
        {/* You can add more navbar items here */}
      </div>
    </div>
  )
}
