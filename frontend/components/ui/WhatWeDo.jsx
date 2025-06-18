'use client'
import WhatWeDoPhoto3in1 from './WhatWeDoPhoto3in1'
// import { StrapiImage } from '../StrapiImage'
import Button from './Button'
import { useLocale } from '../LocaleContext'
import dynamic from 'next/dynamic'
const StrapiImage = dynamic(
  () => import('../StrapiImage').then((mod) => mod.StrapiImage),
  {
    ssr: false,
  }
)
export default function AboutUs({
  serviceNZ,
  serviceUK,
  serviceNZImage,
  serviceUKImage,
}) {
  const { isUK } = useLocale()
  const selectedImage = isUK ? serviceUKImage : serviceNZImage
  const selectedText = isUK ? serviceUK : serviceNZ
  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-4">
        {/* Photo on the left */}
        <div className="lg:pl-20 pl-4 lg:pr-0 pr-4">
          <StrapiImage
            src={selectedImage?.url || '/bg.jpg'}
            alt={selectedImage?.alternativeText || 'Background Image'}
            className="w-full object-cover sm:h-[200px] md:h-[300px] lg:h-[600px] rounded-4xl"
            width={1920}
            height={1080}
          />
        </div>

        {/* Text and button on the right */}
        <div className="lg:pr-20 pl-4 font-[sansation] pt-5">
          <p className="text-md lg:text-xl text-red-700">What We Do</p>
          <p className="text-md text-black lg:text-3xl font-bold pt-3 pb-4">
            Our Services
          </p>
          <p className="text-md text-black lg:text-lg pr-10">{selectedText}</p>
          <div className="pt-8">
            <Button text="Learn more" link="/what-we-do" />
          </div>
        </div>
      </div>
    </div>
  )
}
