'use client'
import React, { useState } from 'react'

export default function HamburgerMenu() {
  // State to track which menu item is selected
  const [activeMenu, setActiveMenu] = useState(null)

  // Handler to toggle between menu items
  const handleClick = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu) // Toggle the menu
  }

  return (
    <div className="flex flex-col">
      {' '}
      {/* Changed to flex column */}
      {/* Menu */}
      <div className="bg-gradient-to-b from-[#8A5082] to-[#A5CAD2] w-50 drop-shadow-lg shadow-gray-400 shadow-md p-4">
        <div className="ml-4">
          <div
            className="py-2 text-white font-[Convergence] hover:scale-105 hover:text-[#FFB635] hover:translate-x-1 transition-transform duration-200"
            onClick={() => handleClick('about')}
          >
            About
          </div>
          <div
            className="py-2 text-white font-[Convergence] hover:scale-105 hover:text-[#FFB635] hover:translate-x-1 transition-transform duration-200"
            onClick={() => handleClick('whatWeDo')}
          >
            What We Do
          </div>
          <div
            className="py-2 text-white font-[Convergence] hover:scale-105 hover:text-[#FFB635] hover:translate-x-1 transition-transform duration-200"
            onClick={() => handleClick('joinUs')}
          >
            Join Us
          </div>
          <div
            className="py-2 text-white font-[Convergence] hover:scale-105 hover:text-[#FFB635] hover:translate-x-1 transition-transform duration-200"
            onClick={() => handleClick('donate')}
          >
            Donate
          </div>
        </div>
      </div>
      {/* Box that appears underneath the menu */}
      <div className="mt-4 ">
        {' '}
        {/* Added margin-top to give space */}
        {activeMenu === 'about' && (
          <div className="bg-[#CADEE2] w-50 p-4 mt-0 mb-6 drop-shadow-lg shadow-gray-400 shadow-md">
            <div className="pb-2">
              <a
                href="/"
                className="text-[#986100] text-md font-[Convergence] mb-2  font-bold"
              >
                About
              </a>
            </div>
            <ul className="text-black text-sm font-[Convergence] space-y-2">
              <li>
                <a href="about-us">About Us</a>
              </li>
              <li>
                <a href="our-team">Our Team</a>
              </li>
              <li>
                <a href="mission-statement">Mission Statement</a>
              </li>
              <li>
                <a href="privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href="contact-us">Contact Us</a>
              </li>
            </ul>
          </div>
        )}
        {activeMenu === 'whatWeDo' && (
          <div className="bg-[#CADEE2] w-50 p-4 mt-0 mb-6 drop-shadow-lg shadow-gray-400 shadow-md">
            <a
              href="what-we-do"
              className="text-[#986100] text-md font-[Convergence] mb-2 font-bold"
            >
              What We Do
            </a>
            <div className="pb-2">
              <a
                href="what-we-do#projects"
                className="text-[#986100] text-md font-[Convergence] mb-2 "
              >
                Projects
              </a>
            </div>

            <ul className="text-black text-sm font-[Convergence] space-y-2">
              <li>
                <a href="what-we-do#projects">Stretch and Flex (Yoga)</a>
              </li>
              <li>
                <a href="what-we-do#projects">Smart Tech for Seniors</a>
              </li>
              <li>
                <a href="what-we-do#projects">Homework Clubs</a>
              </li>
              <li>
                <a href="what-we-do#projects">Dance Classes</a>
              </li>
            </ul>
            <div className="py-2">
              <a
                href="what-we-do#events"
                className="text-[#986100] text-md font-[Convergence] "
              >
                Events
              </a>
            </div>

            <ul className="text-black text-sm font-[Convergence] space-y-2">
              <li>
                <a href="what-we-do#events">Feed4All</a>
              </li>
              <li>
                <a href="what-we-do#events#">Foreign Exchange NZ</a>
              </li>
              <li>
                <a href="what-we-do#events">House Dance NZ</a>
              </li>
            </ul>
          </div>
        )}
        {activeMenu === 'joinUs' && (
          <div className="bg-[#CADEE2] w-50 p-4 mt-0 mb-6 drop-shadow-lg shadow-gray-400 shadow-md">
            <div className="pb-2">
              <a
                href="join-us"
                className="text-[#986100] text-md font-[Convergence] mb-2 font-bold"
              >
                Join Us
              </a>
            </div>
            <ul className="text-black text-sm font-[Convergence] space-y-2">
              <li>
                <a href="join-us">Volunteer</a>
              </li>
              <li>
                <a href="newsletter">Newsletter</a>
              </li>
            </ul>
          </div>
        )}
        {activeMenu === 'donate' && (
          <div className="bg-[#CADEE2] w-50 p-4 mt-0 mb-6 drop-shadow-lg shadow-gray-400 shadow-md">
            <div className="pb-2">
              <a
                href="donate"
                className="text-[#986100] text-md font-[Convergence] mb-2 font-bold"
              >
                Donate
              </a>
            </div>
            <ul className="text-black text-sm font-[Convergence] space-y-2">
              <li>
                <a href="donate#givealittle">Give a little</a>
              </li>
              <li>
                <a href="donate#direct-donation">Direct donations</a>
              </li>
              <li>
                <a href="donate#gifts">Gifts</a>
              </li>
              <li>
                <a href="donate#partnerships">Partnerships</a>
              </li>
              <li>
                <a href="donate#sponsorships">Sponsorships (CSR)</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
