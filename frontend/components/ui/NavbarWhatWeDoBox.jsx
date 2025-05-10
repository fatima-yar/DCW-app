'use client'
import { useLocale } from '../LocaleContext'

export default function NavbarWhatWeDo() {
  const { isUK } = useLocale()
  return (
    <div>
      {isUK ? (
        <div className="mx-16 sm:mx-8 lg:mx-50 bg-[#CADEE2] p-4 sm:p-6 mt-0 h-100">
          <div className="flex flex-wrap sm:flex-nowrap">
            {/* Left Column - Smaller Size */}
            <div className="flex-[0.5] p-2 sm:p-4">
              <h2 className="text-xl sm:text-xl font-[Convergence] text-black">
                Overview
              </h2>
            </div>

            {/* Vertical Line 1 (between left and middle) */}
            <div className="border-l-2 sm:border-l-3 border-white h-80 my-4 sm:my-0 sm:mr-8"></div>

            {/* Middle Column - Larger Size */}
            <div className="flex-1 p-2 sm:p-4 font-[Convergence]">
              <div className="hover:scale-105 hover:translate-x-1 transition-transform duration-200">
                <a
                  href="what-we-do"
                  className="text-lg sm:text-xl text-[#986100] mt-6 sm:mt-8 "
                >
                  What We Do
                </a>
              </div>
              <a href="what-we-do#services" className="block">
                <h2 className="text-lg sm:text-xl text-[#986100] mt-4 sm:mt-8 hover:underline cursor-pointer hover:scale-105 hover:translate-x-1 transition-transform duration-200">
                  Services
                </h2>
              </a>

              <div className="mt-6 sm:mt-8">
                <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
                  <li className="hover:scale-105 hover:translate-x-1 transition-transform duration-200">
                    <a
                      target="_blank"
                      href="https://www.eventbrite.co.nz/e/saturday-stretch-and-flex-yoga-class-tickets-1349556512859?aff=oddtdtcreator"
                      className="text-black"
                    >
                      Stretch and Flex (Yoga)
                    </a>
                  </li>
                  <li className="hover:scale-105 hover:translate-x-1 transition-transform duration-200">
                    <a href="what-we-do#services" className="text-black">
                      Smart Tech for Seniors
                    </a>
                  </li>
                  <li className="hover:scale-105 hover:translate-x-1 transition-transform duration-200">
                    <a
                      target="_blank"
                      href="https://www.eventbrite.co.uk/e/1315650569269?aff=oddtdtcreator"
                      className="text-black"
                    >
                      Homework Hubs
                    </a>
                  </li>
                  <li className="hover:scale-105 hover:translate-x-1 transition-transform duration-200">
                    <a href="what-we-do#services" className="text-black">
                      Dance Classes
                    </a>
                  </li>
                  <li className="hover:scale-105 hover:translate-x-1 transition-transform duration-200">
                    <a href="what-we-do#services" className="text-black">
                      Financial Literacy
                    </a>
                  </li>
                  <li className="hover:scale-105 hover:translate-x-1 transition-transform duration-200">
                    <a href="what-we-do#services" className="text-black">
                      Employment Rights
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Vertical Line 2 (between middle and right) */}
            <div className="border-l-2 sm:border-l-3 border-white h-80 my-4 sm:my-0 sm:mr-8 mx-7"></div>

            {/* Right Column - Larger Size */}
            <div className="flex-1 p-2 sm:p-4">
              <div className="flex-1 p-2 sm:p-4 font-[Convergence]">
                <a href="what-we-do#events" className="block">
                  <h2 className="text-lg sm:text-xl text-[#986100] mt-6 sm:mt-9 hover:underline cursor-pointer hover:scale-105 hover:translate-x-1 transition-transform duration-200">
                    Events
                  </h2>
                </a>

                <div className="mt-6 sm:mt-8">
                  <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
                    <li className="hover:scale-105 hover:translate-x-1 transition-transform duration-200">
                      <a
                        target="_blank"
                        href="https://www.instagram.com/feed4allnz?igsh=MXJpeGQ2M3pkNHA4bw=="
                        className="text-black"
                      >
                        Feed4All
                      </a>
                    </li>

                    <a href="what-we-do#events" className="block">
                      <h2 className="text-lg sm:text-xl text-[#986100] mt-6 sm:mt-9 hover:underline cursor-pointer hover:scale-105 hover:translate-x-1 transition-transform duration-200">
                        Affiliations
                      </h2>
                    </a>
                    <li className="hover:scale-105 hover:translate-x-1 transition-transform duration-200">
                      <a href="what-we-do#events" className="text-black">
                        Foreign Exchange NZ
                      </a>
                    </li>
                    <li className="hover:scale-105 hover:translate-x-1 transition-transform duration-200">
                      <a href="what-we-do#events" className="text-black">
                        House Dance NZ
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mx-16 sm:mx-8 lg:mx-50 bg-[#CADEE2] p-4 sm:p-6 mt-0 h-100">
          <div className="flex flex-wrap sm:flex-nowrap">
            {/* Left Column - Smaller Size */}
            <div className="flex-[0.5] p-2 sm:p-4">
              <h2 className="text-xl sm:text-xl font-[Convergence] text-black">
                Overview
              </h2>
            </div>

            {/* Vertical Line 1 (between left and middle) */}
            <div className="border-l-2 sm:border-l-3 border-white h-80 my-4 sm:my-0 sm:mr-8"></div>

            {/* Middle Column - Larger Size */}
            <div className="flex-1 p-2 sm:p-4 font-[Convergence]">
              <div className="hover:scale-105 hover:translate-x-1 transition-transform duration-200">
                <a
                  href="what-we-do"
                  className="text-lg sm:text-xl text-[#986100] mt-6 sm:mt-8 "
                >
                  What We Do
                </a>
              </div>
              <a href="what-we-do#services" className="block">
                <h2 className="text-lg sm:text-xl text-[#986100] mt-4 sm:mt-8 hover:underline cursor-pointer hover:scale-105 hover:translate-x-1 transition-transform duration-200">
                  Services
                </h2>
              </a>

              <div className="mt-6 sm:mt-8">
                <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
                  <li className="hover:scale-105 hover:translate-x-1 transition-transform duration-200">
                    <a
                      target="_blank"
                      href="https://www.eventbrite.co.nz/e/saturday-stretch-and-flex-yoga-class-tickets-1349556512859?aff=oddtdtcreator"
                      className="text-black"
                    >
                      Stretch and Flex (Yoga)
                    </a>
                  </li>
                  <li className="hover:scale-105 hover:translate-x-1 transition-transform duration-200">
                    <a href="what-we-do#services" className="text-black">
                      Smart Tech for Seniors
                    </a>
                  </li>
                  <li className="hover:scale-105 hover:translate-x-1 transition-transform duration-200">
                    <a
                      target="_blank"
                      href="https://www.eventbrite.co.uk/e/1315650569269?aff=oddtdtcreator"
                      className="text-black"
                    >
                      Homework Hubs
                    </a>
                  </li>
                  <li className="hover:scale-105 hover:translate-x-1 transition-transform duration-200">
                    <a href="what-we-do#services" className="text-black">
                      Dance Classes
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Vertical Line 2 (between middle and right) */}
            <div className="border-l-2 sm:border-l-3 border-white h-80 my-4 sm:my-0 sm:mr-8 mx-7"></div>

            {/* Right Column - Larger Size */}
            <div className="flex-1 p-2 sm:p-4">
              <div className="flex-1 p-2 sm:p-4 font-[Convergence]">
                <a href="what-we-do#events" className="block">
                  <h2 className="text-lg sm:text-xl text-[#986100] mt-6 sm:mt-9 hover:underline cursor-pointer hover:scale-105 hover:translate-x-1 transition-transform duration-200">
                    Events
                  </h2>
                </a>

                <div className="mt-6 sm:mt-8">
                  <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
                    <li className="hover:scale-105 hover:translate-x-1 transition-transform duration-200">
                      <a
                        target="_blank"
                        href="https://www.instagram.com/feed4allnz?igsh=MXJpeGQ2M3pkNHA4bw=="
                        className="text-black"
                      >
                        Feed4All
                      </a>
                    </li>

                    <a href="what-we-do#events" className="block">
                      <h2 className="text-lg sm:text-xl text-[#986100] mt-6 sm:mt-9 hover:underline cursor-pointer hover:scale-105 hover:translate-x-1 transition-transform duration-200">
                        Affiliations
                      </h2>
                    </a>
                    <li className="hover:scale-105 hover:translate-x-1 transition-transform duration-200">
                      <a href="what-we-do#events" className="text-black">
                        Foreign Exchange NZ
                      </a>
                    </li>
                    <li className="hover:scale-105 hover:translate-x-1 transition-transform duration-200">
                      <a href="what-we-do#events" className="text-black">
                        House Dance NZ
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
