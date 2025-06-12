'use client'
// import projects from '../../app/data/projects.json'
import { useEffect, useState } from 'react'
import { getWhatWeDo } from '@/app/src/data/loaders'
import getStrapiURL from '@/components/utils/get-strapi-url'
import SquarePics from './SquarePics'
import { useLocale } from '../LocaleContext'

export default function Services({ service, serviceUK }) {
  const [services, setServices] = useState([])
  const [hasMounted, setHasMounted] = useState(false)
  const { isUK } = useLocale()

  useEffect(() => {
    setHasMounted(true)
  }, [])

  useEffect(() => {
    async function fetchServices() {
      try {
        const res = await getWhatWeDo()
        const serviceBlocks = res?.data?.services || []
        setServices(serviceBlocks)
      } catch (error) {
        console.error('Failed to fetch Services data:', error)
      }
    }

    fetchServices()
  }, [])

  const selectedService = isUK ? serviceUK : service
  if (!hasMounted || !selectedService) return null
  return (
    <>
      <div className="text-black bg-white px-20 sm:px-10 md:mx-10 lg:mx-25 xl:mx-50 py-10">
        <p className="font-[Convergence] text-2xl pl-16 pb-10 lg:px-36 px-4">
          Services
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center gap-y-16 lg:px-36 px-4">
          {selectedService.map((service, index) => {
            const image = service.image?.url
              ? service.image.url.startsWith('http')
                ? service.image.url
                : `${getStrapiURL()}${service.image.url}`
              : ''
            const alt =
              service.image?.alternativeText || service.description || ''
            const caption = service.description

            return (
              <SquarePics
                key={service.id || index}
                src={image}
                alt={alt}
                caption={service.caption}
                captionUrl={service.captionUrl}
                moreUrl={service.moreUrl}
                moreText={service.moreText}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}
