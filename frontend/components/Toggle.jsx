'use client'
import { useState } from 'react'

export default function ToggleSwitch() {
  const [isUK, setIsUK] = useState(false)

  const toggleSwitch = () => {
    const newValue = !isUK
    setIsUK(newValue)

    if (newValue) {
      // window.location.href = '/'
    } else {
      // window.location.href = '/'
    }
  }

  return (
    <div className="pl-20 flex items-center space-x-4 relative  lg:mx-50 md:mx-30 sm:mx-10  text-black overflow-hidden pb-4">
      {/* NZ Flag */}
      <img
        src="/nzFlag.svg"
        alt="New Zealand Flag"
        className={`w-10 h-10 md:w-8 md:h-8 transition-opacity duration-300 ${
          isUK ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <div>
        {/* Toggle Button */}
        <div
          onClick={toggleSwitch}
          className="w-16 h-6 md:w-20 md:h-8 flex items-center border-3 text-black rounded-full p-1 cursor-pointer transition-colors duration-300 relative"
        >
          {/* Text inside the toggle */}
          <span
            className={`absolute text-sm md:text-md font-[Convergence] transition-all duration-300 ${
              isUK ? 'right-0 text-right pr-2' : 'left-0 text-left pl-2'
            }`}
          >
            {isUK ? 'UK' : 'NZ'}
          </span>

          {/* Circle */}
          <div
            className={`w-4 h-4 md:w-6 md:h-6 border-2 text-black bg-[#8A5082] rounded-full shadow-md transform transition-transform duration-300 ${
              isUK ? 'translate-x-0' : 'translate-x-9 md:translate-x-11 '
            }`}
          />
        </div>
      </div>
      {/* UK Flag - Show only when isUK is true */}

      {/* UK Flag */}
      <img
        src="/ukFlag.svg"
        alt="UK Flag"
        className={`w-10 h-10 md:w-8 md:h-8 transition-opacity duration-300 ${
          isUK ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  )
}
