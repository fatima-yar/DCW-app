'use client'

import React, { useState } from 'react';
import Image from "next/image";
import NavbarHome from "./ui/NavbarHome-NoMaori";
import NavbarWhatWeDo from './ui/NavbarWhatWeDo-NoMaori';




const Footer = () => {

  const [openBox, setOpenBox] = useState('')

  const handleHomeClick = () => {
    setOpenBox(openBox === 'home' ? '' : 'home')
  }

  const handleClick = () => {
    window.location.href = '/';
  }





  return (
    <footer className="bg-gradient-to-r from-[#8A5082] to-[#A5CAD2] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">

        {/* Column 1 */}
        <div>
          <h3 className="font-bold text-lg">
            <div className="relative">
              <NavbarHome
                isOpen={openBox === 'home'}
                handleClick={handleHomeClick}
              />
              {openBox === 'home'}
            </div>
          </h3>



{/* Can use ui component to link if possible belowed all sections*/}

          <ul className="mt-4 space-y-2">
            <li>
              <div className="text-white font-[Convergence] hover:scale-105 hover:text-[#FFB635] hover:translate-x-1 transition-transform duration-200">
                <button onClick={handleClick} className="flex flex-col items-center">
                  <div className="flex items-center justify-center">
                    <span className="text-md">About Us</span>
                  </div>
                </button>
              </div>
            </li>

            <li>
              <div className="text-white font-[Convergence] hover:scale-105 hover:text-[#FFB635] hover:translate-x-1 transition-transform duration-200">
                <button onClick={handleClick} className="flex flex-col items-center">
                  <div className="flex items-center justify-center">
                    <span className="text-md">Our Team</span>
                  </div>
                </button>
              </div>
            </li>

            <li>
              <div className="text-white font-[Convergence] hover:scale-105 hover:text-[#FFB635] hover:translate-x-1 transition-transform duration-200">
                <button onClick={handleClick} className="flex flex-col items-center">
                  <div className="flex items-center justify-center">
                    <span className="text-md">Mission Statement</span>
                  </div>
                </button>
              </div>
            </li>

            <li>
              <div className="text-white font-[Convergence] hover:scale-105 hover:text-[#FFB635] hover:translate-x-1 transition-transform duration-200">
                <button onClick={handleClick} className="flex flex-col items-center">
                  <div className="flex items-center justify-center">
                    <span className="text-md">Privacy Policy</span>
                  </div>
                </button>
              </div>
            </li>

            <li>
              <div className="text-white font-[Convergence] hover:scale-105 hover:text-[#FFB635] hover:translate-x-1 transition-transform duration-200">
                <button onClick={handleClick} className="flex flex-col items-center">
                  <div className="flex items-center justify-center">
                    <span className="text-md">Contact Us</span>
                  </div>
                </button>
              </div>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-bold text-lg hover-text">
            <div className="relative">
              <NavbarWhatWeDo
                isOpen={openBox === 'home'}
                handleClick={handleHomeClick}
              />
              {openBox === 'home'}
            </div>
          </h3>



          <ul className="mt-2 space-y-2">

          <li>
              <div className="text-white mt-6 font-[Convergence] hover:scale-105 hover:text-[#FFB635] hover:translate-x-1 transition-transform duration-200">
                <button onClick={handleClick} className="flex flex-col items-center">
                  <div className="font-semibold flex items-center justify-center">
                    <span className="text-md">Projects</span>
                  </div>
                </button>
              </div>
            </li>

            <li>
              <div className="text-white font-[Convergence] hover:scale-105 hover:text-[#FFB635] hover:translate-x-1 transition-transform duration-200">
                <button onClick={handleClick} className="flex flex-col items-center">
                  <div className=" flex items-center justify-center">
                    <span className="text-md">Stretch and Flex (Yoga)</span>
                  </div>
                </button>
              </div>
            </li>

            <li>
              <div className="text-white font-[Convergence] hover:scale-105 hover:text-[#FFB635] hover:translate-x-1 transition-transform duration-200">
                <button onClick={handleClick} className="flex flex-col items-center">
                  <div className=" flex items-center justify-center">
                    <span className="text-md">Smart Tech for Seniors</span>
                  </div>
                </button>
              </div>
            </li>

            <li>
              <div className="text-white font-[Convergence] hover:scale-105 hover:text-[#FFB635] hover:translate-x-1 transition-transform duration-200">
                <button onClick={handleClick} className="flex flex-col items-center">
                  <div className=" flex items-center justify-center">
                    <span className="text-md">Stretch and Flex (Yoga)</span>
                  </div>
                </button>
              </div>
            </li>

            <li>
              <div className="text-white font-[Convergence] hover:scale-105 hover:text-[#FFB635] hover:translate-x-1 transition-transform duration-200">
                <button onClick={handleClick} className="flex flex-col items-center">
                  <div className=" flex items-center justify-center">
                    <span className="text-md">Homework Clubs</span>
                  </div>
                </button>
              </div>
            </li>

            <li>
              <div className="text-white font-[Convergence] hover:scale-105 hover:text-[#FFB635] hover:translate-x-1 transition-transform duration-200">
                <button onClick={handleClick} className="flex flex-col items-center">
                  <div className=" flex items-center justify-center">
                    <span className="text-md">Dance Classes</span>
                  </div>
                </button>
              </div>
            </li>


            <li>
              <div className="text-white font-[Convergence] mt-6 hover:scale-105 hover:text-[#FFB635] hover:translate-x-1 transition-transform duration-200">
                <button onClick={handleClick} className="flex flex-col items-center">
                  <div className=" font-semibold flex items-center justify-center">
                    <span className="text-md">Event</span>
                  </div>
                </button>
              </div>
            </li>

            <li>
              <div className="text-white font-[Convergence] hover:scale-105 hover:text-[#FFB635] hover:translate-x-1 transition-transform duration-200">
                <button onClick={handleClick} className="flex flex-col items-center">
                  <div className="  flex items-center justify-center">
                    <span className="text-md">Feed4All</span>
                  </div>
                </button>
              </div>
            </li>


            <li>
              <div className="text-white font-[Convergence] hover:scale-105 hover:text-[#FFB635] hover:translate-x-1 transition-transform duration-200">
                <button onClick={handleClick} className="flex flex-col items-center">
                  <div className="  flex items-center justify-center">
                    <span className="text-md">Foreign Exchange NZ</span>
                  </div>
                </button>
              </div>
            </li>

            <li>
              <div className="text-white font-[Convergence] hover:scale-105 hover:text-[#FFB635] hover:translate-x-1 transition-transform duration-200">
                <button onClick={handleClick} className="flex flex-col items-center">
                  <div className="  flex items-center justify-center">
                    <span className="text-md">House Dance N</span>
                  </div>
                </button>
              </div>
            </li>

          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-bold text-lg">Join Us</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="/volunteer" className="hover:underline">Volunteer</a></li>
            <li><a href="/newsletter" className="hover:underline">Newsletter</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-bold text-lg">Donate</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="/givealittle" className="hover:underline">Givealittle</a></li>
            <li><a href="/donations" className="hover:underline">Direct donations</a></li>
            <li><a href="/gifts" className="hover:underline">Gifts</a></li>
            <li><a href="/partnerships" className="hover:underline">Partnerships</a></li>
            <li><a href="/sponsorships" className="hover:underline">Sponsorships (CSR)</a></li>
          </ul>
        </div>

        {/* Column 5 - Contact Info */}
        <div>
          <h3 className="font-bold text-lg">What’s On</h3>
          <hr className="my-2 border-white" />
          <p className="font-semibold">Contact Us</p>
          <p><a href="tel:+642108374545" className="hover:underline">+64 21 083 74545</a></p>
          <p><a href="tel:+447516016779" className="hover:underline">+44 7516 016 779</a></p>
          <p>272 New Windsor Road, New Windsor, Auckland, 0600</p>
          <div className="flex space-x-4 mt-3">
            <a href="https://twitter.com" target="_blank">
              <img src="/icons-socialmedias/twitter.svg" alt="Twitter" className="w-6 h-6" />
            </a>
            <a href="https://facebook.com" target="_blank">
              <img src="/icons-socialmedias/facebook.svg" alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="https://instagram.com" target="_blank">
              <img src="/icons-socialmedias/instagram.svg" alt="Instagram" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 flex flex-col items-center">
        <img src="/logo.png" alt="DreamCatchers Worldwide" className="h-12" />
        <p className="mt-2">&copy; 2024 by DreamCatchers Worldwide</p>
      </div>
    </footer>

  );
};

export default Footer;
