'use client'
import OurMissionPhoto from './OurMissionPhoto'
import dynamic from 'next/dynamic'
// import { StrapiImage } from '../StrapiImage'
import Button from './Button'
import { useLocale } from '../LocaleContext'
const StrapiImage = dynamic(
  () => import('../StrapiImage').then((mod) => mod.StrapiImage),
  {
    ssr: false,
  }
)
export default function AboutUs({
  missionNZ,
  missionUK,
  missionNZImage,
  missionUKImage,
}) {
  const { isUK } = useLocale()
  const selectedImage = isUK ? missionUKImage : missionNZImage
  const selectedText = isUK ? missionUK : missionNZ

  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-4">
        <div className="lg:pl-20 pl-4 font-[sansation]">
          <p className="text-md lg:text-xl text-red-700">About Us</p>
          <p className=" text-md text-black lg:text-3xl font-bold pt-3 pb-4">
            Our Mission
          </p>
          <p className="text-md text-black lg:text-lg pr-10">{selectedText}</p>
          <div className="pt-8">
            <Button text="Learn more" link="/mission-statement" />
          </div>
        </div>
        <div className="lg:pr-20 pr-4 pl-4 lg:pl-0">
          <StrapiImage
            src={selectedImage?.url || '/bg.jpg'}
            alt={selectedImage?.alternativeText || 'Background Image'}
            className="w-full object-cover sm:h-[200px] md:h-[300px] lg:h-[400px]"
            width={1920}
            height={1080}
          />
        </div>
      </div>
    </div>
  )
}
