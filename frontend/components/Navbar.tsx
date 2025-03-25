'use client'

import { useState } from 'react'
import NavbarHome from './ui/NavbarHome'
import NavbarHomeBox from './ui/NavbarHomeBox'
import NavbarWhatWeDo from './ui/NavbarWhatWeDo'
import NavbarWhatWeDoBox from './ui/NavbarWhatWeDoBox'

export default function Navbar() {
  const [openBox, setOpenBox] = useState('')

  const handleHomeClick = () => {
    setOpenBox(openBox === 'home' ? '' : 'home')
  }

  const handleWhatWeDoClick = () => {
    setOpenBox(openBox === 'WhatWeDo' ? '' : 'WhatWeDo')
  }

  return (
    <>
      {/* Navbar bar */}
      <div className="w-full h-12 bg-gradient-to-r from-[#8A5082] to-[#A5CAD2]">
        <div className="flex items-center justify-start h-full px-6">
          {/* First Navbar item */}
          <NavbarHome
            isOpen={openBox === 'home'}
            handleClick={handleHomeClick}
          />

          {/* Second Navbar item */}
          <NavbarWhatWeDo
            isOpen={openBox === 'WhatWeDo'}
            handleClick={handleWhatWeDoClick}
          />
        </div>
      </div>
      {/* Conditionally render below the navbar */}
      {openBox === 'home' && (
        <div className="w-full">
          <NavbarHomeBox />
        </div>
      )}
      {/* Conditionally render the What We Do dropdown box */}
      {openBox === 'WhatWeDo' && (
        <div className="w-full">
          <NavbarWhatWeDoBox />{' '}
          {/* Render this when `isWhatWeDoOpen` is true */}
        </div>
      )}
    </>
  )
}
