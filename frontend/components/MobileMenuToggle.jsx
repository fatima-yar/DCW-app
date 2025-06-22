'use client'
import { useState } from 'react'
import HamburgerMenu from './ui/HamburgerMenu'

export default function MobileMenuToggle() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  return (
    <div className="relative">
      {/* Hamburger Icon */}
      <div className="cursor-pointer" onClick={toggleMenu}>
        {isMenuOpen ? (
          <svg className="h-6 w-6 fill-current text-black" viewBox="0 0 20 20">
            <title>Close menu</title>
            <path d="M4.293 4.293L10 10l5.707-5.707 1.414 1.414L11.414 11.414l5.707 5.707-1.414 1.414L10 12.828l-5.707 5.707-1.414-1.414L8.586 11.414 2.879 5.707l1.414-1.414z" />
          </svg>
        ) : (
          <svg className="h-6 w-6 fill-current text-black" viewBox="0 0 20 20">
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        )}
        <p className="font-[Convergence] text-black text-xs">
          {isMenuOpen ? 'Close' : 'Menu'}
        </p>
      </div>

      {/* Absolute-positioned menu below the header */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 z-40 mt-4">
          <HamburgerMenu />
        </div>
      )}
    </div>
  )
}
