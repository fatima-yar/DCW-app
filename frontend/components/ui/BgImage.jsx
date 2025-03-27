import DonateButton from './DonateButton'

export default function BgImage() {
  return (
    <>
      <div className="relative lg:mx-50 md:mx-30 sm:mx:10 text-black overflow-hidden">
        {/* Background image */}
        <img
          src="/bgImage.jpg"
          alt="bgImage"
          className="w-full object-cover  sm:h-[200px] md:h-[300px] lg:h-[400px]"
        />

        {/* Pink box overlay */}
        <div className="mx-10 my-15 absolute inset-0 bg-[#705F938F] opacity-100 grid grid-cols-4 grid-rows-4 gap-4 ">
          <div className="col-span-3">
            {' '}
            <p
              className="m-20 sm:m-20 md:m-20  font-[Sansation] text-xl sm:text-xl md:text-3xl  lg:text-5xl font-bold text-[#FFB635]"
              style={{ lineHeight: '1.25' }}
            >
              Empowering Dreams,
              <br /> Building Futures.
            </p>
          </div>
          <div className="col-span-3 col-start-1 row-start-3">
            {' '}
            <p className=" font-[Sansation] text-white lg:text-3xl md:text-xl sm:text-md">
              Together, we uplift and inspire communities.
            </p>
          </div>
          <div className="col-start-4 row-start-2">
            {' '}
            <div className="">
              <DonateButton />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
