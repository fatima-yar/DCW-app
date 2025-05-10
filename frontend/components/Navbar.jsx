'use client'

import { useState, useEffect } from 'react'
import NavbarHomeBox from './ui/NavbarHomeBox'
import NavbarWhatWeDoBox from './ui/NavbarWhatWeDoBox'
import NavbarJoinUsBox from './ui/NavbarJoinUsBox'
import NavbarDonateBox from './ui/NavbarDonateBox'
import HamburgerMenu from './ui/HamburgerMenu'
import NavbarButton from './NavbarButtons'
import { useLocale } from './LocaleContext'

const navItems = [
  {
    key: 'home',
    label: 'Home',
    subLabel: 'Kāinga',
    BoxComponent: NavbarHomeBox,
  },
  {
    key: 'whatWeDo',
    label: 'What We Do',
    subLabel: 'He aha ta tatou mahi',
    BoxComponent: NavbarWhatWeDoBox,
  },
  {
    key: 'joinUs',
    label: 'Join Us',
    subLabel: 'Hono Mai',
    BoxComponent: NavbarJoinUsBox,
  },
  {
    key: 'donate',
    label: 'Donate',
    subLabel: 'Koha',
    BoxComponent: NavbarDonateBox,
  },
]

export default function Navbar() {
  const { isUK } = useLocale()
  const [openBox, setOpenBox] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

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
        <div className="hidden md:flex justify-center space-x-40 lg:space-x-62 text-md relative">
          {navItems.map(({ key, label, subLabel }) => (
            <div className="relative" key={key}>
              <NavbarButton
                isOpen={openBox === key}
                handleClick={() => handleClick(key)}
                label={label}
                subLabel={hasMounted && !isUK ? subLabel : ''}
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
      <div className="ml-0">
        <div className="block md:hidden sticky top-0 z-50 ml-4 pb-0">
          <div className="cursor-pointer " onClick={toggleMenu}>
            {isMenuOpen ? (
              // "X" icon
              <svg
                className="block h-6 w-6 fill-current text-black"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Close menu</title>
                <path d="M4.293 4.293L10 10l5.707-5.707 1.414 1.414L11.414 11.414l5.707 5.707-1.414 1.414L10 12.828l-5.707 5.707-1.414-1.414L8.586 11.414 2.879 5.707l1.414-1.414z" />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                className="block h-6 w-6 fill-current text-black  ml-1"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            )}

            <p className="font-[Convergence] text-black text-xs pb-4">
              {isMenuOpen ? 'Close' : 'Menu'}
            </p>
          </div>
        </div>

        {isMenuOpen && <HamburgerMenu />}
      </div>
    </>
  )
}
