import React from 'react'
import Contents from './Contents'

export default function MissionStatement({ content }) {
  return (
    <Contents
      header={content.header}
      content={content.content}
      image={content.image?.[0]}
    />
  )
}
