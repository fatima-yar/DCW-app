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
      {/* Navbar bar */}
      <div className="w-full h-12 bg-gradient-to-r from-[#8A5082] to-[#A5CAD2]">
        <div className="flex items-center justify-center h-full mx-40">
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
          {/* Forth Navbar item */}
          <NavbarDonate
            isOpen={openBox === 'Donate'}
            handleClick={handleDonateClick}
          />
        </div>
      </div>

      {/* Conditionally render below the navbar */}
      {openBox === 'home' && (
        <div className="w-full">
          <NavbarHomeBox />
        </div>
      )}

      {openBox === 'WhatWeDo' && (
        <div className="w-full">
          <NavbarWhatWeDoBox />{' '}
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
