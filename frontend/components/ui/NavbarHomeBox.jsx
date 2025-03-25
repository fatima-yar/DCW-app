export default function NavbarHomeBox() {
  return (
    <div className="mx-45 bg-[#CADEE2] p-6 mt-2">
      <div className="flex">
        {/* Left Column - Smaller Size */}
        <div className="flex-[0.5] p-4">
          <h2 className="text-2xl font-[Convergence] text-black">Overview</h2>
        </div>

        {/* Vertical Line 1 (between left and middle) */}
        <div className="border-l-3 border-white h-auto mr-8 "></div>

        {/* Middle Column - Larger Size */}
        <div className="flex-1 p-4 font-[Convergence]">
          <h2 className="text-xl text-[#986100] mt-8">Home</h2>
          <div className="mt-8">
            <ul className="space-y-4 text-sm">
              <li className="hover:scale-105 hover:translate-x-1 transition-transform duration-200">
                <a href="#" className="text-black">
                  About Us
                </a>
              </li>
              <li className="hover:scale-105 hover:translate-x-1 transition-transform duration-200">
                <a href="#" className="text-black">
                  Our Team
                </a>
              </li>
              <li className="hover:scale-105 hover:translate-x-1 transition-transform duration-200">
                <a href="#" className="text-black">
                  Mission Statement
                </a>
              </li>
              <li className="hover:scale-105 hover:translate-x-1 transition-transform duration-200">
                <a href="#" className="text-black">
                  Privacy Policy
                </a>
              </li>
              <li className="hover:scale-105 hover:translate-x-1 transition-transform duration-200">
                <a href="#" className="text-black">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Vertical Line 2 (between middle and right) */}
        <div className="border-l-3 border-white h-auto mr-8"></div>

        {/* Right Column - Larger Size */}
        <div className="flex-1 p-4">{/* Empty column */}</div>
      </div>
    </div>
  )
}
