'use client'

// import affiliations from '../../app/data/affiliations.json'
import { useEffect, useState } from 'react'
import { getWhatWeDo } from '@/app/src/data/loaders'
import getStrapiURL from '@/app/src/utils/get-strapi-url'
import SquarePics from './SquarePics'
import { useLocale } from '../LocaleContext'

export default function Affiliations({ affiliation, affiliationUK }) {
  const [affiliations, setAffiliations] = useState([])
  const [hasMounted, setHasMounted] = useState(false)
  const { isUK } = useLocale()

  useEffect(() => {
    setHasMounted(true)
  }, [])

  useEffect(() => {
    async function fetchAffiliations() {
      try {
        const res = await getWhatWeDo()
        const eventsBlocks = res?.data?.affiliations || []
        setAffiliations(eventsBlocks)
      } catch (error) {
        console.error('Failed to fetch affiliations data:', error)
      }
    }
    fetchAffiliations()
  }, [])

  const selectedAffiliations = isUK ? affiliationUK : affiliation
  if (!hasMounted || !selectedAffiliations) return null
  return (
    <>
      <div className="text-black bg-white px-20 sm:px-10 md:mx-10 lg:mx-25 xl:mx-50 py-10">
        <p className="font-[Convergence] text-2xl pl-16 pb-10 lg:px-36 px-4">
          Affiliations
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center gap-y-16 lg:px-36 px-4">
          {selectedAffiliations.map((affiliation, index) => {
            const image = affiliation.image?.url
              ? affiliation.image.url.startsWith('http')
                ? affiliation.image.url
                : `${getStrapiURL()}${affiliation.image.url}`
              : ''
            const alt =
              affiliation.image?.alternativeText ||
              affiliation.description ||
              ''
            const caption = affiliation.description

            return (
              <SquarePics
                key={affiliation.id || index}
                src={image}
                alt={alt}
                caption={affiliation.caption}
                captionUrl={affiliation.captionUrl}
                moreUrl={affiliation.moreUrl}
                moreText={affiliation.moreText}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}
