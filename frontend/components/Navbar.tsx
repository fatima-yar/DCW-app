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
import HamburgerMenu from './ui/HamburgerMenu'
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

  //for hamburger menu
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <div className="sticky top-0 z-50 pt-2 pb-2 bg-gradient-to-r from-[#8A5082] to-[#A5CAD2] w-full overflow-x-hidden hidden md:block">
        <div className="hidden md:flex justify-center md:space-x-20 lg:space-x-50 text-md relative">
          <div className="relative">
            <NavbarHome
              isOpen={openBox === 'home'}
              handleClick={handleHomeClick}
            />
            {openBox === 'home'}
          </div>

          {/* Second Navbar item */}
          <div className="relative">
            <NavbarWhatWeDo
              isOpen={openBox === 'WhatWeDo'}
              handleClick={handleWhatWeDoClick}
            />
            {openBox === 'WhatWeDo'}
          </div>

          {/* Third Navbar item */}
          <div className="relative">
            <NavbarJoinUs
              isOpen={openBox === 'JoinUs'}
              handleClick={handleJoinUsClick}
            />
            {openBox === 'JoinUs'}
          </div>

          {/* Fourth Navbar item */}
          <div className="relative">
            <NavbarDonate
              isOpen={openBox === 'Donate'}
              handleClick={handleDonateClick}
            />
            {openBox === 'Donate'}
          </div>
        </div>
      </div>

      {/* <div className="block md:hidden sticky top-0 z-50 ">
        <HamburgerMenu />
      </div> */}
      <div>
        {/* Hamburger icon to toggle the menu */}
        <div className="block md:hidden sticky top-0 z-50 ml-4">
          <div className="cursor-pointer" onClick={toggleMenu}>
            <svg
              className="block h-6 w-6 fill-current text-black "
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </div>
        </div>

        {/* Use HamburgerMenu component */}
        {isMenuOpen && <HamburgerMenu />}
      </div>

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
