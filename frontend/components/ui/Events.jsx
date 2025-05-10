'use client'

// import events from '../../app/data/events.json'
import { useEffect, useState } from 'react'
import { getWhatWeDo } from '@/app/src/data/loaders'
import getStrapiURL from '@/app/src/utils/get-strapi-url'
import SquarePics from './SquarePics'

export default function Events() {
  const [events, setEvents] = useState([])
  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await getWhatWeDo()
        const eventsBlocks = res?.data?.events || []
        setEvents(eventsBlocks)
      } catch (error) {
        console.error('Failed to fetch events data:', error)
      }
    }
    fetchEvents()
  })
  return (
    <>
      <div className="text-black bg-white px-20 sm:px-10 md:mx-10 lg:mx-25 xl:mx-50 py-10">
        <p className="font-[Convergence] text-2xl pl-16 pb-10 lg:px-36 px-4">
          Events
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center gap-y-16 lg:px-36 px-4">
          {events.map((event, index) => {
            const image = event.image?.url
              ? `${getStrapiURL()}${event.image.url}`
              : ''
            const alt = event.image?.alternativeText || event.description || ''

            const caption = event.description

            return (
              <SquarePics
                key={event.id || index}
                src={image}
                alt={alt}
                caption={event.caption}
                captionUrl={event.captionUrl}
                moreUrl={event.moreUrl}
                moreText={event.moreText}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}
