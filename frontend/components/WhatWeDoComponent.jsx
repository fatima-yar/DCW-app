'use client'
import React from 'react'
import Contents from './Contents'
import Services from './ui/Services'
import Events from './ui/Events'
import Affiliations from './ui/Affiliations'
import FadeInSection from './FadeInSection'
import { useLocale } from './LocaleContext'
import { useState, useEffect } from 'react'

// export default function WhatWeDoComponent({ content }) {
//   console.log(content)
//   return (
//     <>
//       <FadeInSection delay={0.3}>
//         <Contents header={content.header} content={content.content} />
//       </FadeInSection>
//       <FadeInSection delay={0.5}>
//         <div id="services">
//           <Services />
//         </div>{' '}
//       </FadeInSection>
//       <FadeInSection delay={0.5}>
//         <div id="events">
//           <Events />
//         </div>
//       </FadeInSection>
//       <FadeInSection delay={0.5}>
//         <div id="affiliations">
//           <Affiliations />
//         </div>
//       </FadeInSection>
//     </>
//   )
// }
export default function WhatWeDoComponent({ content }) {
  const { isUK } = useLocale()
  // const selectedContent = isUK ? contentUK : content
  // if (!selectedContent) return null
  // const [hasMounted, setHasMounted] = useState(false)

  // useEffect(() => {
  //   setHasMounted(true)
  // }, [])

  // if (!hasMounted) return null
  return (
    <>
      <FadeInSection delay={0.3}>
        <Contents
          header={content.header}
          content={content.content}
          image={content.image}
        />
      </FadeInSection>
      <FadeInSection delay={0.5}>
        <div id="services">
          <Services />
        </div>
      </FadeInSection>

      <FadeInSection delay={0.5}>
        <div id="services">
          <Events />
        </div>
      </FadeInSection>
      <FadeInSection delay={0.5}>
        <div id="affiliations">
          <Affiliations />
        </div>
      </FadeInSection>
    </>
  )
}
