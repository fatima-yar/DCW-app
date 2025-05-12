'use client'
import { StrapiImage } from '../components/StrapiImage'
import GeneralBtn from './ui/GeneralBtn'
import { useLocale } from './LocaleContext'
import { useState, useEffect } from 'react'

export default function JoinUs({
  text,
  image,
  button,
  textUK,
  imageUK,
  buttonUK,
}) {
  const { isUK } = useLocale()
  const selectedText = isUK ? textUK : text
  const selectedImage = isUK ? imageUK : image
  const selectedButton = isUK ? buttonUK : button

  if (!selectedText || !selectedImage || !selectedButton) return null

  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) return null
  return (
    <>
      <div className="text-black bg-white px-20 sm:px-10 md:mx-10 lg:mx-25 xl:mx-50 py-10">
        <div className="font-[Convergence] text-3xl">Join Us</div>
        <div className="font-[Convergence] text-2xl pt-10">Volunteer</div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-start">
            <div className="sm:col-span-2 space-y-3 sm:space-y-4 text-md py-5 font-[Convergence]">
              {selectedText}
            </div>

            <div className="flex justify-center sm:justify-end">
              <StrapiImage
                src={selectedImage?.url}
                alt={selectedImage?.alternativeText}
                width={400}
                height={240}
                className="w-auto h-auto"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 grid-rows-1 gap-1 mt-4 text-center">
          <div className="font-[Convergence] lg:text-xl text-md ">
            Check for Current vacancies!
          </div>

          <div>
            <GeneralBtn cta={selectedButton} />
          </div>
        </div>
      </div>
    </>
  )
}
