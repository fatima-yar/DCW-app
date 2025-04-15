'use client'

import { useState, useEffect } from 'react'
import NavbarHome from './ui/NavbarHome'
import NavbarHomeBox from './ui/NavbarHomeBox'
import NavbarWhatWeDo from './ui/NavbarWhatWeDo'
import NavbarWhatWeDoBox from './ui/NavbarWhatWeDoBox'
import NavbarJoinUs from './ui/NavbarJoinUs'
import NavbarJoinUsBox from './ui/NavbarJoinUsBox'
import NavbarDonate from './ui/NavbarDonate'
import NavbarDonateBox from './ui/NavbarDonateBox'
import HamburgerMenu from './ui/HamburgerMenu'

const navItems = [
  {
    key: 'home',
    Component: NavbarHome,
    BoxComponent: NavbarHomeBox,
  },
  {
    key: 'WhatWeDo',
    Component: NavbarWhatWeDo,
    BoxComponent: NavbarWhatWeDoBox,
  },
  {
    key: 'JoinUs',
    Component: NavbarJoinUs,
    BoxComponent: NavbarJoinUsBox,
  },
  {
    key: 'Donate',
    Component: NavbarDonate,
    BoxComponent: NavbarDonateBox,
  },
]

export default function Navbar() {
  const [openBox, setOpenBox] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleClick = (key) => {
    setOpenBox((prev) => (prev === key ? '' : key))
  }

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  useEffect(() => {
    const handleResize = () => {
      setOpenBox('')
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      {/* Desktop Navbar */}
      <div className="sticky top-0 z-50 pt-2 pb-2 bg-gradient-to-r from-[#8A5082] to-[#A5CAD2] w-full overflow-x-hidden hidden md:block">
        <div className="hidden md:flex justify-center space-x-40 lg:space-x-60 text-md relative">
          {navItems.map(({ key, Component }) => (
            <div className="relative" key={key}>
              <Component
                isOpen={openBox === key}
                handleClick={() => handleClick(key)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dropdown Boxes */}
      {navItems.map(
        ({ key, BoxComponent }) =>
          openBox === key && (
            <div
              key={key}
              className="w-full"
              onMouseEnter={() => setOpenBox(key)}
              onMouseLeave={() => setOpenBox('')}
            >
              <BoxComponent />
            </div>
          )
      )}

      {/* Mobile Hamburger Menu */}
      <div>
        <div className="block md:hidden sticky top-0 z-50 ml-4 pb-4">
          <div className="cursor-pointer" onClick={toggleMenu}>
            <svg
              className="block h-6 w-6 fill-current text-black"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </div>
        </div>

        {isMenuOpen && <HamburgerMenu />}
      </div>
    </>
  )
}
