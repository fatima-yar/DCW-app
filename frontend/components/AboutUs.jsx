import React from 'react'
import Contents from './Contents'

export default function AboutUs({ content }) {
  console.log('image', content.image)
  return (
    <Contents
      header={content.header}
      content={content.content}
      image={content.image?.[0]}
    />
  )
}
