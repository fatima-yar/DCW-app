import VolunteeringAucklandLogo from './ui/VolunteeringAucklandLogo'
import DreamCatcherBlackLogo from './ui/DreamCatcherBlackLogo'
import Feed4AllLogo from './ui/Feed4AllLogo'

export default function TopLogos() {
  return (
    <div className="pt-5 grid grid-cols-3 grid-rows-1 gap-4 relative lg:mx-50 md:mx-30 sm:mx-10 px-4 text-black overflow-hidden">
      <div className="flex justify-start">
        <VolunteeringAucklandLogo />
      </div>
      <div className="flex justify-center">
        <DreamCatcherBlackLogo />
      </div>
      <div className="flex justify-end">
        <Feed4AllLogo />
      </div>
    </div>
  )
}
