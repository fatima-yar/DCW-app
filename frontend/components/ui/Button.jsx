import PropTypes from 'prop-types'

export default function LearnMoreButton({ text, link, newTab = false }) {
  return (
    <div className="flex">
      <div>
        <a
          className="px-4 font-[sansation] text-md py-1 sm:px-4 sm:py-2 md:px-4 md:py-1 mb-8 lg:px-6 lg:py-2 inline-flex justify-center whitespace-nowrap rounded-full sm:text-md md:text-lg lg:text-lg font-medium text-slate-200 dark:text-slate-800 bg-gradient-to-r from-[#FFB635] to-[#FF9E00] hover:from-[#FF9E00] hover:to-[#FFB635] shadow-lg hover:shadow-2xl focus:outline-none focus:ring focus:ring-[#FFB635]/50 focus-visible:outline-none focus-visible:ring focus-visible:ring-[#FFB635]/50 relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.5)_50%,transparent_75%,transparent_100%)] dark:before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1500ms] hover:scale-110 transform transition-all"
          href={link}
          target={newTab ? '_blank' : undefined}
          rel={newTab ? 'noopener noreferrer' : undefined}
        >
          {text}
        </a>
      </div>
    </div>
  )
}

LearnMoreButton.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}
