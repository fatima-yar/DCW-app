'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import GoogleMapEmbed from './ui/GoogleMapEmbed'
import Link from 'next/link'

const Footer = () => {
  const [openSection, setOpenSection] = useState(null)

  const toggleSection = (section: any) => {
    setOpenSection(openSection === section ? null : section)
  }

  return (
    <footer className="bg-gradient-to-r from-[#8A5082] to-[#A5CAD2] text-whi50 pt-10">
      <div className="relative lg:mx-50 md:mx-30 sm:mx-10 pl-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 font-[sansation] text-md">
          {['Home', 'What We Do', 'Join Us', 'Donate'].map((section) => (
            <div key={section}>
              <div
                className="flex justify-between items-center cursor-pointer lg:cursor-default"
                onClick={() => toggleSection(section)}
              >
                {section === 'Home' ? (
                  <a
                    href="/"
                    className="font-bold pb-4 hover:text-xl transition-all duration-200"
                  >
                    {section}
                  </a>
                ) : section === 'What We Do' ? (
                  <a
                    href="/what-we-do"
                    className="font-bold pb-4 hover:text-xl transition-all duration-200"
                  >
                    {section}
                  </a>
                ) : section === 'Join Us' ? (
                  <a
                    href="/join-us"
                    className="font-bold pb-4 hover:text-xl transition-all duration-200"
                  >
                    {section}
                  </a>
                ) : section === 'Donate' ? (
                  <a
                    href="/donate"
                    className="font-bold pb-4 hover:text-xl transition-all duration-200"
                  >
                    {section}
                  </a>
                ) : (
                  <p className="font-bold pb-4">{section}</p>
                )}

                <span className="lg:hidden">
                  {openSection === section ? <ChevronUp /> : <ChevronDown />}
                </span>
              </div>
              <ul
                className={`space-y-1 ${
                  openSection === section ? 'block' : 'hidden'
                } lg:block`}
              >
                {section === 'Home' && (
                  <>
                    <li>
                      <a
                        href="/about-us"
                        className="hover:text-xl transition-all duration-200"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="/our-team"
                        className="hover:text-xl transition-all duration-200"
                      >
                        Our Team
                      </a>
                    </li>
                    <li>
                      <a
                        href="/mission-statement"
                        className="hover:text-xl transition-all duration-200"
                      >
                        Mission Statement
                      </a>
                    </li>
                    <li>
                      <a
                        href="/privacy-policy"
                        className="hover:text-xl transition-all duration-200"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="/contact-us"
                        className="hover:text-xl transition-all duration-200"
                      >
                        Contact Us
                      </a>
                    </li>
                  </>
                )}
                {section === 'What We Do' && (
                  <>
                    <div className=" pb-2">
                      <a
                        href="what-we-do#projects"
                        className="font-bold hover:text-xl transition-all duration-200 "
                      >
                        Projects
                      </a>
                    </div>
                    <li>
                      <a
                        href="what-we-do#projects"
                        className="hover:text-xl transition-all duration-200"
                      >
                        Stretch and Flex (Yoga)
                      </a>
                    </li>
                    <li>
                      <a
                        href="what-we-do#projects"
                        className="hover:text-xl transition-all duration-200"
                      >
                        Smart Tech for Seniors
                      </a>
                    </li>
                    <li>
                      <a
                        href="what-we-do#projects"
                        className="hover:text-xl transition-all duration-200"
                      >
                        Homework Clubs
                      </a>
                    </li>
                    <li>
                      <a
                        href="what-we-do#projects"
                        className="hover:text-xl transition-all duration-200"
                      >
                        Dance Classes
                      </a>
                    </li>
                    <div className="pt-4 pb-2">
                      <a
                        href="what-we-do#events"
                        className="font-bold hover:text-xl transition-all duration-200 "
                      >
                        Events
                      </a>
                    </div>
                    <li>
                      <a
                        href="what-we-do#events"
                        className="hover:text-xl transition-all duration-200"
                      >
                        Feed4All
                      </a>
                    </li>
                    <li>
                      <a
                        href="what-we-do#events"
                        className="hover:text-xl transition-all duration-200"
                      >
                        Foreign Exchange NZ
                      </a>
                    </li>
                    <li>
                      <a
                        href="what-we-do#events"
                        className="hover:text-xl transition-all duration-200"
                      >
                        House Dance NZ
                      </a>
                    </li>
                  </>
                )}
                {section === 'Join Us' && (
                  <>
                    <li>
                      <a
                        href="/#"
                        className="hover:text-xl transition-all duration-200"
                      >
                        Volunteer
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#"
                        className="hover:text-xl transition-all duration-200"
                      >
                        Newsletter
                      </a>
                    </li>
                  </>
                )}
                {section === 'Donate' && (
                  <>
                    <li>
                      <a href="/#">Givealittle</a>
                    </li>
                    <li>
                      <a
                        href="/#"
                        className="hover:text-xl transition-all duration-200"
                      >
                        Direct donations
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#"
                        className="hover:text-xl transition-all duration-200"
                      >
                        Gifts
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#"
                        className="hover:text-xl transition-all duration-200"
                      >
                        Partnerships
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#"
                        className="hover:text-xl transition-all duration-200"
                      >
                        Sponsorships (CSR)
                      </a>
                    </li>
                  </>
                )}
              </ul>
            </div>
          ))}
          <div>
            <p className="font-bold pb-4">What's On</p>
            <hr className="border-t-2 border-gray-300" />
            <p className="font-bold pb-4 pt-4">Contact us</p>
            <p>+64 21 083 74545</p>
            <p>+44 7516 016 779</p>
            <p className="pt-2">
              272 New Windor Road, New Windsor, Auckland, 0600
            </p>
            <div className="flex space-x-1 pt-2  ">
              <a
                href="https://x.com/i/flow/login?redirect_after_login=%2Fdreamcatchersnz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="x.svg" alt="xLogo" className="w-8 h-auto" />
              </a>
              <a
                href="https://www.instagram.com/dreamcatchersworldwide/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="instagram.svg"
                  alt="instagramLogo"
                  className="w-8 h-auto"
                />
              </a>
              <a
                href="https://www.facebook.com/dreamcatchersworldwide"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="facebook.svg"
                  alt="facebookLogo"
                  className="w-8 h-auto"
                />
              </a>
              <a
                href="https://www.tiktok.com/@dreamcatchersworldwide"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="tiktok.svg" alt="tiktokLogo" className="w-8 h-auto" />
              </a>
              <a
                href="https://www.linkedin.com/company/dreamcatchers-worldwide"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="linkedin.svg"
                  alt="linkedinLogo"
                  className="w-8 h-auto"
                />
              </a>
              <a
                href="+44 7516 016 779"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="whatsapp.svg"
                  alt="linkedinLogo"
                  className="w-8 h-auto"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 grid-rows-1 gap-1 pb-1 pt-10">
          <div className="flex flex-col justify-between">
            <p className="font-[sansation] text-sm font-bold text-gray-100"></p>
            <p className="font-[sansation] text-xs text-gray-100 pb-4">
              <span className="font-bold pr-2">Privacy Policy</span>
              <br />
              <span className="pt-2 block">
                © 2024 by DreamCatchers WorldWide
              </span>
            </p>
          </div>
          <div>
            <a href="/">
              <img src="DCWhite.png" alt="Logo" />
            </a>
          </div>
          <div className="flex justify-end pb-4">
            <GoogleMapEmbed size="small" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
