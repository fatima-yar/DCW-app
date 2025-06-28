'use client'

import { useEffect, useState } from 'react'
import { getOurTeam } from '../app/src/data/loaders'
import getStrapiURL from '../app/src/utils/get-strapi-url'
import { useLocale } from './LocaleContext'
import Image from 'next/image'

export function OurTeam() {
  const [teamNZ, setTeamNZ] = useState([])
  const [teamUK, setTeamUK] = useState([])
  const [loading, setLoading] = useState(true)
  const { isUK } = useLocale()
  const selectedTeam = isUK ? teamUK : teamNZ

  useEffect(() => {
    async function fetchTeam() {
      try {
        const res = await getOurTeam()
        const blocks = res?.data?.blocks || []
        const blocksUK = res?.data?.blocksUK || []
        setTeamNZ(blocks)
        setTeamUK(blocksUK)
      } catch (error) {
        console.error('Failed to fetch team data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchTeam()
  }, [])

  if (loading) {
    return (
      <section className="flex flex-col items-center justify-center min-h-[50vh] bg-white py-20">
        <img src="/loading.gif" alt="Loading..." className="w-16 h-16 mb-4" />
        <p className="text-gray-600 font-[Convergence] text-lg">
          Please wait while the page loads…
        </p>
      </section>
    )
  }

  return (
    <section className="px-0 md:px-10 lg:px-25 xl:px-50">
      <div className="text-black pl-12  w-full bg-white pt-10 font-[Convergence] text-3xl">
        Our Team
      </div>
      <div className="bg-white py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {selectedTeam.map((member, index) => {
          // ✅ Prefer thumbnail image if available
          const rawUrl =
            member.image?.formats?.thumbnail?.url || member.image?.url

          // ✅ Prefix with Strapi base URL if it's a relative path
          const imageUrl = rawUrl?.startsWith('http')
            ? rawUrl
            : `${getStrapiURL()}${rawUrl || ''}`

          const borderClasses =
            index % 2 === 0
              ? 'rounded-tl-4xl rounded-br-4xl'
              : 'rounded-tr-4xl rounded-bl-4xl'

          return (
            <div key={member.id} className="text-center">
              <div
                className={`bg-[#ad9bce65] p-4 inline-block mx-auto transition-all transform hover:scale-110 hover:bg-[#7a9ab465] duration-500 ease-in-out ${borderClasses}`}
              >
                {imageUrl ? (
                  <Image
                    src={imageUrl}
                    alt={
                      member.image?.alternativeText ||
                      member.description ||
                      'Team member'
                    }
                    width={240}
                    height={240}
                    className={`w-60 h-60 object-cover ${borderClasses}`}
                    loading="lazy"
                  />
                ) : (
                  <div
                    className={`bg-gray-300 flex items-center justify-center text-gray-600 text-sm w-60 h-60 ${borderClasses}`}
                  >
                    No Image
                  </div>
                )}

                <h3 className="mt-4 text-sm text-center text-black w-58 font-[Convergence]">
                  {member.description}
                </h3>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
