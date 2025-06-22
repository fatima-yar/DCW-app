'use client'
import { useState, useEffect } from 'react'
import { useLocale } from '@/components/LocaleContext'

export default function ToggleSwitch() {
  const { isUK, toggleLocale } = useLocale()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex justify-end md:justify-start">
      <div className="pr-4 md:pl-30 lg:pl-50 flex items-center space-x-2 relative text-black overflow-hidden lg:pb-4 md:pb-4 sm:pb-0">
        {/* NZ Flag */}
        <img
          src="/nzFlag.svg"
          alt="New Zealand Flag"
          className={`w-6 h-6 md:w-10 md:h-8 transition-opacity duration-300 ${
            isUK ? 'opacity-30' : 'opacity-100'
          }`}
        />
        <div>
          {/* Toggle Button */}
          <div
            onClick={toggleLocale}
            className="w-10 h-4 md:w-16 md:h-7 flex items-center border-2  text-black rounded-full p-1 cursor-pointer transition-colors duration-300 relative"
          >
            {/* Text inside the toggle */}
            <span
              className={`absolute text-sm md:text-md font-[Convergence] transition-all duration-300 ${
                isUK ? 'right-0 text-right pr-2' : 'left-0 text-left pl-2'
              }`}
            >
              {/* {isUK ? 'UK' : 'NZ'} */}
            </span>

            {/* Circle */}
            <div
              className={`w-3 h-3 md:w-5 md:h-5 border-1 text-black bg-[#8A5082] rounded-full shadow-md transform transition-transform duration-300 ${
                !isUK
                  ? '-translate-x-1 md:translate-x-0'
                  : 'translate-x-5 md:translate-x-8 '
              }`}
            />
          </div>
        </div>
        {/* UK Flag - Show only when isUK is true */}

        {/* UK Flag */}
        <img
          src="/ukFlag.svg"
          alt="UK Flag"
          className={`w-6 h-6 md:w-10 md:h-8 transition-opacity duration-300 ${
            isUK ? 'opacity-100' : 'opacity-30'
          }`}
        />
      </div>
    </div>
  )
}
