'use client'
import React from 'react'
import Contents from './Contents'
import Services from './ui/Services'
import Events from './ui/Events'
import Affiliations from './ui/Affiliations'
import FadeInSection from './FadeInSection'
import { useLocale } from './LocaleContext'
import { useState, useEffect } from 'react'

export default function WhatWeDoComponent({ content, contentUK }) {
  const { isUK } = useLocale()
  const selectedContent = isUK ? contentUK : content
  console.log('content', content)
  console.log('contentUUUUKKK', contentUK)
  if (!selectedContent) return null
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) return null
  return (
    <>
      <FadeInSection delay={0.3}>
        <Contents
          header={selectedContent.header}
          content={selectedContent.content}
          image={selectedContent.image}
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
