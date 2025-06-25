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
  imageVolunteer,
}) {
  const { isUK } = useLocale()

  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  const selectedText = isUK ? textUK : text
  const selectedImage = isUK ? imageUK : image
  const selectedButton = isUK ? buttonUK : button

  if (!hasMounted) return null
  if (!selectedText || !selectedButton) return null

  return (
    <div className="text-black bg-white px-4 sm:px-4 md:px-10 lg:px-30 xl:mx-50 py-10">
      <div className="font-[Convergence] text-3xl">Join Us</div>
      <div className="font-[Convergence] text-2xl pt-10">Volunteer</div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-start">
        <div className="sm:col-span-2 space-y-3 sm:space-y-4 text-md py-5 font-[Convergence]">
          {selectedText}
        </div>

        {selectedImage?.url && (
          <div className="flex justify-center sm:justify-end">
            <StrapiImage
              src={selectedImage.url}
              alt={selectedImage.alternativeText || 'Join us image'}
              width={400}
              height={240}
              className="w-auto h-40"
            />
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 grid-rows-1 gap-1 mt-4 text-center">
        <div className="font-[Convergence] lg:text-xl text-md">
          Check for Current vacancies!
        </div>

        <div className="px-15">
          <GeneralBtn cta={selectedButton} />
        </div>
      </div>

      {imageVolunteer?.url && (
        <StrapiImage
          src={imageVolunteer.url}
          alt={imageVolunteer.alternativeText || 'Volunteer image'}
          width={400}
          height={240}
          className="w-full"
        />
      )}
    </div>
  )
}
