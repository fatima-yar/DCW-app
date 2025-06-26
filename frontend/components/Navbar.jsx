'use client'

import { useState, useEffect } from 'react'
import NavbarAboutBox from './ui/NavbarAboutBox'
import NavbarWhatWeDoBox from './ui/NavbarWhatWeDoBox'
import NavbarJoinUsBox from './ui/NavbarJoinUsBox'
import NavbarDonateBox from './ui/NavbarDonateBox'
import NavbarButton from './NavbarButtons'
import { useLocale } from './LocaleContext'

const navItems = [
  {
    key: 'about',
    label: 'About',
    subLabel: 'Kāinga',
    BoxComponent: NavbarAboutBox,
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
    </>
  )
}
