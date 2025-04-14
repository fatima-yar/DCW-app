export default function NavbarHomeBox() {
  return (
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
              href="join-us"
              className="text-lg sm:text-xl text-[#986100] mt-6 sm:mt-8 "
            >
              Join Us
            </a>
          </div>
          <div className="mt-6 sm:mt-8">
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
              <li className="hover:scale-105 hover:translate-x-1 transition-transform duration-200">
                <a href="join-us" className="text-black">
                  Volunteer
                </a>
              </li>
              <li className="hover:scale-105 hover:translate-x-1 transition-transform duration-200">
                <a href="newsletter" className="text-black">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Vertical Line 2 (between middle and right) */}
        <div className="border-l-2 sm:border-l-3 border-white h-80 my-4 sm:my-0 sm:mr-8 mx-7"></div>

        {/* Right Column - Larger Size */}
        <div className="flex-1 p-2 sm:p-4">{/* Empty column */}</div>
      </div>
    </div>
  )
}
