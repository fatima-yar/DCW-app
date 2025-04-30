'use client'
// import projects from '../../app/data/projects.json'
import { useEffect, useState } from 'react'
import { getWhatWeDo } from '@/app/src/data/loaders'
import getStrapiURL from '@/app/src/utils/get-strapi-url'
import SquarePics from './SquarePics'

export default function Projects() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await getWhatWeDo()
        const projectBlocks = res?.data?.projects || []
        setProjects(projectBlocks)
      } catch (error) {
        console.error('Failed to fetch Projects data:', error)
      }
    }

    fetchProjects()
  }, [])
  return (
    <>
      <div className="text-black bg-white px-20 sm:px-10 md:mx-10 lg:mx-25 xl:mx-50 py-10">
        <p className="font-[Convergence] text-2xl pl-16 pb-10 lg:px-36 px-4">
          Projects
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center gap-y-16 lg:px-36 px-4">
          {projects.map((project, index) => {
            const image = project.image?.url
              ? `${getStrapiURL()}${project.image.url}`
              : ''
            const alt =
              project.image?.alternativeText || project.description || ''
            const caption = project.description

            return (
              <SquarePics
                key={project.id || index}
                src={image}
                alt={alt}
                caption={caption}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}
