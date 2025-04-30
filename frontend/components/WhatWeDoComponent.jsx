import React from 'react'
import Contents from './Contents'
import Projects from './ui/Projects'
import Events from './ui/Events'
import FadeInSection from './FadeInSection'

export default function WhatWeDoComponent({ content }) {
  return (
    <>
      <FadeInSection delay={0.3}>
        <Contents header={content.header} content={content.content} />
      </FadeInSection>
      <FadeInSection delay={0.5}>
        <div id="projects">
          <Projects />
        </div>{' '}
      </FadeInSection>
      <FadeInSection delay={0.5}>
        <div id="events">
          <Events />
        </div>
      </FadeInSection>
    </>
  )
}
