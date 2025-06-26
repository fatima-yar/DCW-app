export default function NavbarAbout({ isOpen, handleClick }) {
  return (
    <div className="text-white font-[Convergence] hover:scale-105 hover:text-[#FFB635] hover:translate-x-1 transition-transform duration-200">
      <button onClick={handleClick} className="flex flex-col items-center">
        <div className="flex items-center justify-center">
          <span className="text-md">About</span>
        </div>
      </button>
    </div>
  )
}
