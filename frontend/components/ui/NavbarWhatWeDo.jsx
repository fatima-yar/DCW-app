import { useState } from 'react'

export default function NavbarWhatWeDo({ isOpen, handleClick }) {
  return (
    <div className="text-white font-[Convergence] hover:text-[#FFB635] hover:scale-105 hover:translate-x-1 transition-transform duration-200">
      <button onClick={handleClick} className="flex flex-col items-center">
        <div className="flex items-center justify-center">
          <span className="text-md">What&nbsp;We&nbsp;Do</span>
          <span className="ml-2">{isOpen ? 'v' : '^'}</span>
        </div>
        <span className="text-xs w-full text-center">
          He&nbsp;aha&nbsp;ta&nbsp;tatou&nbsp;mahi
        </span>
      </button>
    </div>
  )
}
