import DonateButton from './DonateButton'
import { StrapiImage } from '../StrapiImage'
import Image from 'next/image'

export default function HeroContent({
  title,
  followingText,
  image,
  button,
  transparentBox,
}) {
  const colorCode = transparentBox?.colorCode || '#705F938F'
  return (
    <>
      <div className="relative lg:mx-50 md:mx-30 sm:mx-10 text-black overflow-hidden">
        {/* Background image */}
        {/* <img
          src={image}
          alt="bgImage"
          className="w-full object-cover sm:h-[200px] md:h-[300px] lg:h-[400px]"
        /> */}
        {/* <Image src={imageUrl} alt={alt} className={className} {...rest} /> */}
        <StrapiImage
          src={image?.url || '/bg.jpg'}
          alt={image?.alternativeText || 'Background Image'}
          className="w-full object-cover sm:h-[200px] md:h-[300px] lg:h-[400px]"
          width={1920}
          height={1080}
        />

        {/* Pink box overlay */}
        <div
          style={{
            backgroundColor: `${colorCode}${'80'}`,
          }} // Dynamically set background color from transparentBox
          className="lg:mx-10 lg:my-15 mx-5 my-5 absolute bg-[#705F938F] inset-0 opacity-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-3 gap-1"
        >
          {/* Big Text */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 row-start-1">
            <p
              className="pl-4 pt-2 lg:pt-10 lg:pl-10 font-[Sansation] text-xl sm:text-xl md:text-3xl lg:text-4xl font-bold text-[#FFB635]"
              style={{ lineHeight: '1.25' }}
            >
              {/* Empowering&nbsp;Dreams,
              <br /> Building&nbsp;Futures. */}
              {title}
            </p>
          </div>

          {/* White Text */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 row-start-2">
            <p className="pt-2 pl-4 lg:pl-10 lg:pt-20  font-[dosis] text-white lg:text-3xl md:text-xl sm:text-md ">
              {/* Together,&nbsp;we&nbsp;uplift&nbsp;and&nbsp;inspire communities. */}
              {followingText}
            </p>
          </div>

          {/* Donate Button */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1 lg:row-start-1 md:row-start-3 sm:row-start-3 lg:pt-20 flex justify-center md:justify-start lg:justify-end mt-0 md:mt-6 lg:mt-0 pr-10">
            <DonateButton cta={button} />
          </div>
        </div>
      </div>
    </>
  )
}
