'use client'

export default function NavbarButton({ isOpen, handleClick, label, subLabel }) {
  return (
    <div className="text-white font-[Convergence] hover:text-[#FFB635] hover:scale-105 hover:translate-x-1 transition-transform duration-200">
      <button onClick={handleClick} className="flex flex-col items-center">
        <div className="flex items-center justify-center">
          <span className="text-lg">{label}</span>
          <span className="ml-2">{isOpen ? 'v' : '^'}</span>
        </div>
        <span className="text-sm w-full text-center">{subLabel}</span>
      </button>
    </div>
  )
}
