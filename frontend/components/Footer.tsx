'use client'

const Footer = () => {
  return (
    <>
      <footer className="bg-gradient-to-r from-[#8A5082] to-[#A5CAD2] text-whi50 py-10 px-50 ">
        <div className="grid grid-cols-5 grid-rows-1  font-[sansation] text-md">
          <div className="">
            <p className="font-bold pb-4 ">Home</p>
            <ul className=" space-y-1 ">
              <li>
                <a
                  href="/about-us"
                  className=" hover:text-xl transition-all duration-200 "
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/our-team"
                  className=" hover:text-xl transition-all duration-200"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="/mission-statement"
                  className=" hover:text-xl transition-all duration-200"
                >
                  Mission Statement
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className=" hover:text-xl transition-all duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/contact-us"
                  className=" hover:text-xl transition-all duration-200"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            {/* second */}
            <p className="font-bold pb-4 ">What We Do</p>
            <p className="font-bold pb-4 ">Projects</p>
            <ul className=" space-y-1">
              <li>
                <a
                  href="/#"
                  className=" hover:text-xl transition-all duration-200"
                >
                  Stretch and Flex (Yoga)
                </a>
              </li>
              <li>
                <a
                  href="/#"
                  className=" hover:text-xl transition-all duration-200"
                >
                  Smart Tech for Seniors
                </a>
              </li>
              <li>
                <a
                  href="/#"
                  className=" hover:text-xl transition-all duration-200"
                >
                  Homework Clubs
                </a>
              </li>
              <li>
                <a
                  href="/#"
                  className=" hover:text-xl transition-all duration-200"
                >
                  Dance Classes
                </a>
              </li>
            </ul>
            <p className="font-bold pb-4 pt-4 ">Events</p>
            <ul className=" space-y-1">
              <li>
                <a
                  href="/#"
                  className=" hover:text-xl transition-all duration-200"
                >
                  Feed4All
                </a>
              </li>
              <li>
                <a
                  href="/#"
                  className=" hover:text-xl transition-all duration-200"
                >
                  Foreign Exchange NZ
                </a>
              </li>
              <li>
                <a
                  href="/#"
                  className=" hover:text-xl transition-all duration-200"
                >
                  House Dance NZ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold pb-4 ">Join Us</p>
            <ul className=" space-y-1 ">
              <li>
                <a
                  href="/#"
                  className="hover:text-xl transition-all duration-200 "
                >
                  Volunteer
                </a>
              </li>
              <li>
                <a
                  href="/#"
                  className=" hover:text-xl transition-all duration-200"
                >
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
          <div>
            {' '}
            <p className="font-bold pb-4 ">Donate</p>
            <ul className=" space-y-1 ">
              <li>
                <a href="/#" className=" ">
                  Givealittle
                </a>
              </li>
              <li>
                <a
                  href="/#"
                  className=" hover:text-xl transition-all duration-200"
                >
                  Direct donations
                </a>
              </li>
              <li>
                <a
                  href="/#"
                  className=" hover:text-xl transition-all duration-200"
                >
                  Gifts
                </a>
              </li>
              <li>
                <a
                  href="/#"
                  className=" hover:text-xl transition-all duration-200"
                >
                  Partnerships
                </a>
              </li>
              <li>
                <a
                  href="/#"
                  className=" hover:text-xl transition-all duration-200"
                >
                  Sponsorships (CSR)
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold pb-4 ">What's On</p>
            <hr className="border-t-2 border-gray-300" />
            <p className="font-bold pb-4 pt-4">Contact us</p>
            <p>+64 21 083 74545</p>
            <p>+44 7516 016 779</p>
            <p className="pt-2">
              272 New Windor Road, New Windsor, Auckland, 0600
            </p>
            <div className="flex space-x-1 pt-2">
              <img src="x.svg" alt="Logo" className="w-8 h-auto" />
              <img src="instagram.svg" alt="Logo" className="w-8 h-auto" />
              <img src="facebook.svg" alt="Logo" className="w-8 h-auto" />
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
