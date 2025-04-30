import { StrapiImage } from '../components/StrapiImage'
import GeneralBtn from './ui/GeneralBtn'
export default function JoinUs({ text, image, button }) {
  return (
    <>
      <div className="text-black bg-white px-20 sm:px-10 md:mx-10 lg:mx-25 xl:mx-50 py-10">
        <div className="font-[Convergence] text-3xl">Join Us</div>
        <div className="font-[Convergence] text-2xl pt-10">Volunteer</div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-start">
            {/* Text: spans full width on small, 2/3 on larger screens */}
            <div className="sm:col-span-2 space-y-3 sm:space-y-4 text-md py-5 font-[Convergence]">
              {text}
            </div>

            {/* Image: takes 1/3 on larger screens, full width & centered on small */}
            <div className="flex justify-center sm:justify-end">
              {/* <img src="/volunteerpage.png" className="h-60 w-auto" /> */}
              <StrapiImage
                src={image?.url}
                alt={image?.alternativeText}
                width={400}
                height={240}
                className="w-auto h-auto"
              />
            </div>
          </div>
        </div>

        {/* <Image src={imageUrl} alt={alt} className={className} {...rest} /> */}

        <div className="grid grid-cols-2 grid-rows-1 gap-1 mt-4 text-center">
          <div className="font-[Convergence] lg:text-xl text-md ">
            Check for Current vacancies!
          </div>

          <div>
            <GeneralBtn cta={button} />
            {/* <Button
              text="Go!"
              link="https://volunteeringauckland.org.nz/orgs/1923-dreamcatchers-worldwide"
              newTab={true}
            /> */}
          </div>
        </div>
      </div>
    </>
  )
}
