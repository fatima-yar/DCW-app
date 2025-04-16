'use client'
import { useState } from 'react'

export default function ToggleSwitch() {
  const [isUK, setIsUK] = useState(false)

  const toggleSwitch = () => {
    setIsUK(!isUK)
  }

  return (
    <div className="flex items-center mx-54 gap-4 pb-4 text-black">
      {/* NZ Flag */}
      <img
        src="/ukFlag.svg"
        alt="UK Flag"
        className={`w-10 h-10 md:w-8 md:h-8 transition-opacity duration-300 ${
          isUK ? 'opacity-0' : 'opacity-100'
        }`}
      />

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
          {isUK ? 'NZ' : 'UK'}
        </span>

        {/* Circle */}
        <div
          className={`w-6 h-6 bg-[#8A5082] text-black border-2 rounded-full shadow-md transform transition-transform duration-300 ${
            isUK ? 'translate-x-0' : 'translate-x-11'
          }`}
        />
      </div>

      {/* UK Flag */}
      <img
        src="/nzFlag.svg"
        alt="New Zealand Flag"
        className={`w-10 h-10 md:w-8 md:h-8 transition-opacity duration-300 ${
          isUK ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  )
}
