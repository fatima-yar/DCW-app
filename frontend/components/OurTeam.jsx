'use client'

import { useEffect, useState } from 'react'
import { getOurTeam } from '../app/src/data/loaders'
import getStrapiURL from '../app/src/utils/get-strapi-url'

export function OurTeam() {
  const [team, setTeam] = useState([])

  useEffect(() => {
    async function fetchTeam() {
      try {
        const res = await getOurTeam()
        const blocks = res?.data?.blocks || []
        setTeam(blocks)
      } catch (error) {
        console.error('Failed to fetch team data:', error)
      }
    }

    fetchTeam()
  }, [])

  return (
    <section className="px-10 sm:px-10 md:px-10 lg:px-25 xl:px-50">
      <div className="text-black bg-white pt-10 font-[Convergence] pl-12 text-3xl">
        Our Team
      </div>
      <div className="bg-white py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {team.map((member, index) => (
          <div key={member.id} className="text-center">
            <div
              className={`${
                index % 2 === 0
                  ? 'rounded-tl-4xl rounded-br-4xl object-cover'
                  : 'rounded-tr-4xl rounded-bl-4xl object-cover'
              } bg-[#ad9bce65] p-4 inline-block mx-auto transition-all transform hover:scale-110 hover:bg-[#7a9ab465] duration-500 ease-in-out`}
            >
              <img
                src={`${getStrapiURL()}${member.image.url}`}
                alt={member.image.alternativeText || member.description}
                height={800}
                width={800}
                className={`${
                  index % 2 === 0
                    ? 'rounded-tl-4xl rounded-br-4xl w-60 h-60 object-cover'
                    : 'rounded-tr-4xl rounded-bl-4xl w-60 h-60 object-cover'
                }`}
              />
              <h3 className="mt-4 text-sm text-center text-black w-58 font-[Convergence]">
                {member.description}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
