import React from 'react'

export default function CanvaEmbed({ src }) {
  return (
    <iframe
      src={src}
      width="100%"
      height="500"
      allow="fullscreen"
      loading="lazy"
      style={{ border: 'none' }}
    />
  )
}
