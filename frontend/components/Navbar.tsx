'use client'

import { useState } from 'react'
import NavbarHome from './ui/NavbarHome'
import NavbarHomeBox from './ui/NavbarHomeBox'
import NavbarWhatWeDo from './ui/NavbarWhatWeDo'
import NavbarWhatWeDoBox from './ui/NavbarWhatWeDoBox'
import NavbarJoinUs from './ui/NavbarJoinUs'
import NavbarJoinUsBox from './ui/NavbarJoinUsBox'
import NavbarDonate from './ui/NavbarDonate'
import NavbarDonateBox from './ui/NavbarDonateBox'

export default function Navbar() {
  const [openBox, setOpenBox] = useState('')

  const handleHomeClick = () => {
    setOpenBox(openBox === 'home' ? '' : 'home')
  }

  const handleWhatWeDoClick = () => {
    setOpenBox(openBox === 'WhatWeDo' ? '' : 'WhatWeDo')
  }
  const handleJoinUsClick = () => {
    setOpenBox(openBox === 'JoinUs' ? '' : 'JoinUs')
  }
  const handleDonateClick = () => {
    setOpenBox(openBox === 'Donate' ? '' : 'Donate')
  }

  return (
    <>
      {/* Full-width gradient bar */}
      <div className="sticky top-0 z-50 pt-2 pb-2  bg-gradient-to-r from-[#8A5082] to-[#A5CAD2] w-full overflow-x-hidden">
        {/* Navbar content with 40px margin on both sides and evenly spaced items */}
        <nav className="flex justify-center md:space-x-20 lg:space-x-50 text-md">
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
          {/* Third Navbar item */}
          <NavbarJoinUs
            isOpen={openBox === 'JoinUs'}
            handleClick={handleJoinUsClick}
          />
          {/* Fourth Navbar item */}
          <NavbarDonate
            isOpen={openBox === 'Donate'}
            handleClick={handleDonateClick}
          />
        </nav>
      </div>

      {/* Conditionally render below the navbar */}
      {openBox === 'home' && (
        <div className="w-full">
          <NavbarHomeBox />
        </div>
      )}

      {openBox === 'WhatWeDo' && (
        <div className="w-full">
          <NavbarWhatWeDoBox />
        </div>
      )}

      {openBox === 'JoinUs' && (
        <div className="w-full">
          <NavbarJoinUsBox />
        </div>
      )}

      {openBox === 'Donate' && (
        <div className="w-full">
          <NavbarDonateBox />
        </div>
      )}
    </>
  )
}
