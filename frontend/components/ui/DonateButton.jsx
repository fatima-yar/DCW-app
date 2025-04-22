export default function DonateButton() {
  return (
    <>
      <div className="flex gap-4 justify-center w-full">
        <div>
          <a
            className="font-[Convergence] text-sm px-2 py-1 sm:px-8 sm:py-2 md:px-8 md:py-3 mb-8 lg:px-10 lg:py-5 inline-flex justify-center whitespace-nowrap rounded-full text-base sm:text-md md:text-lg lg:text-xl font-medium text-slate-200 dark:text-slate-800 bg-gradient-to-r from-[#FFB635] to-[#FF9E00] hover:from-[#FF9E00] hover:to-[#FFB635] shadow-lg hover:shadow-2xl focus:outline-none focus:ring focus:ring-[#FFB635]/50 focus-visible:outline-none focus-visible:ring focus-visible:ring-[#FFB635]/50 relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.5)_50%,transparent_75%,transparent_100%)] dark:before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1500ms] hover:scale-110 transform transition-all"
            href="/donate"
          >
            DONATE NOW
          </a>
        </div>
      </div>
    </>
  )
}
