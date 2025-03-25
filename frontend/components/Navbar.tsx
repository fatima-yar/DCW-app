'use client'

import { useState } from 'react'
import NavbarHome from './ui/NavbarHome'
import NavbarHomeBox from './ui/NavbarHomeBox'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Navbar bar */}
      <div className="w-full h-12 bg-gradient-to-r from-[#8A5082] to-[#A5CAD2]">
        <div className="flex items-center justify-start h-full px-6">
          <NavbarHome isOpen={isOpen} handleClick={handleClick} />
          {/* You can add more navbar items here */}
        </div>
      </div>

      {/* Conditionally render NavbarHomeBox below the navbar */}
      {isOpen && (
        <div className="w-full">
          <NavbarHomeBox />
        </div>
      )}
    </>
  )
}
