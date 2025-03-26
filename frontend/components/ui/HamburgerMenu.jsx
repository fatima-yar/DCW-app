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
      <div className="bg-gradient-to-b from-[#8A5082] to-[#A5CAD2] w-50 ml-4 mt-4">
        <div className="ml-4">
          <div
            className="py-2 text-white font-[Convergence] hover:scale-105 hover:text-[#FFB635] hover:translate-x-1 transition-transform duration-200"
            onClick={() => handleClick('home')}
          >
            Home
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
      <div className="mt-4 ml-4">
        {' '}
        {/* Added margin-top to give space */}
        {activeMenu === 'home' && (
          <div className="bg-[#CADEE2] w-50 p-4 mt-0">
            <h3 className="text-[#986100] text-md font-[Convergence] mb-2  font-bold">
              Home
            </h3>
            <ul className="text-black text-sm font-[Convergence] space-y-2">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Our Team</a>
              </li>
              <li>
                <a href="#">Mission Statement</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        )}
        {activeMenu === 'whatWeDo' && (
          <div className="bg-[#CADEE2] w-50 p-4 mt-0">
            <h3 className="text-[#986100] text-md font-[Convergence] mb-2 font-bold">
              What We Do
            </h3>
            <h3 className="text-[#986100] text-md font-[Convergence] mb-2">
              Projects
            </h3>

            <ul className="text-black text-sm font-[Convergence] space-y-2">
              <li>
                <a href="#">Stretch and Flex (Yoga)</a>
              </li>
              <li>
                <a href="#">Smart Tech for Seniors</a>
              </li>
              <li>
                <a href="#">Homework Clubs</a>
              </li>
              <li>
                <a href="#">Dance Classes</a>
              </li>
            </ul>
            <h3 className="text-[#986100] text-md font-[Convergence] mb-2 mt-2">
              Events
            </h3>

            <ul className="text-black text-sm font-[Convergence] space-y-2">
              <li>
                <a href="#">Feed4All</a>
              </li>
              <li>
                <a href="#">Foreign Exchange NZ</a>
              </li>
              <li>
                <a href="#">House Dance NZ</a>
              </li>
            </ul>
          </div>
        )}
        {activeMenu === 'joinUs' && (
          <div className="bg-[#CADEE2] w-50 p-4 mt-0">
            <h3 className="text-[#986100] text-md font-[Convergence] mb-2 font-bold">
              Join Us
            </h3>
            <ul className="text-black text-sm font-[Convergence] space-y-2">
              <li>
                <a href="#">Volunteer</a>
              </li>
              <li>
                <a href="#">Newsletter</a>
              </li>
            </ul>
          </div>
        )}
        {activeMenu === 'donate' && (
          <div className="bg-[#CADEE2] w-50 p-4 mt-0">
            <h3 className="text-[#986100] text-md font-[Convergence] mb-2 font-bold">
              Donate
            </h3>
            <ul className="text-black text-sm font-[Convergence] space-y-2">
              <li>
                <a href="#">Give a little</a>
              </li>
              <li>
                <a href="#">Direct donations</a>
              </li>
              <li>
                <a href="#">Gifts</a>
              </li>
              <li>
                <a href="#">Partnerships</a>
              </li>
              <li>
                <a href="#">Sponsorships (CSR)</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
