'use client'
import React from 'react'
import Contents from './Contents'
import Services from './ui/Services'
import Events from './ui/Events'
import Affiliations from './ui/Affiliations'
import FadeInSection from './FadeInSection'
import { useLocale } from './LocaleContext'
import { useState, useEffect } from 'react'

export default function WhatWeDoComponent({
  content,
  contentUK,
  service,
  serviceUK,
  event,
  eventUK,
  affiliation,
  affiliationUK,
}) {
  const { isUK } = useLocale()
  const selectedContent = isUK ? contentUK : content
  const selectedService = isUK ? serviceUK : service

  if (!selectedContent || !selectedService) return null

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
          <Services service={service} serviceUK={serviceUK} />
        </div>
      </FadeInSection>

      <FadeInSection delay={0.5}>
        <div id="services">
          <Events event={event} eventUK={eventUK} />
        </div>
      </FadeInSection>
      <FadeInSection delay={0.5}>
        <div id="affiliations">
          <Affiliations
            affiliation={affiliation}
            affiliationUK={affiliationUK}
          />
        </div>
      </FadeInSection>
    </>
  )
}
