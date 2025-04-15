import React from 'react'
import Contents from './Contents'
import Projects from './ui/Projects'
import Events from './ui/Events'
import FadeInSection from './FadeInSection'

export default function WhatWeDoComponent() {
  return (
    <>
      <FadeInSection delay={0.3}>
        <Contents
          header="What We Do"
          content={[
            'DreamCatchers WorldWide is a charitable organization that provides services to vulnerable community groups. Our services include providing high quality community services across the education and arts sector to those in need.',

            'We work closely with local communities to identify their specific needs and provide them with the necessary resources.',

            'Our team of dedicated volunteers is committed to making a positive impact on the lives of those we serve.',
          ]}
        />
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
