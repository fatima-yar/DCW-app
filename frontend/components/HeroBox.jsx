'use client'
import React from 'react'
import MaoriStrip from './ui/MaoriStrip'
import HeroBoxContent from './ui/HeroBoxContent'
import { useLocale } from './LocaleContext'

export default function HeroBox({
  title,
  followingText,
  image,
  imageUK,
  button,
  transparentBox,
}) {
  const { isUK } = useLocale()

  return (
    <>
      {!isUK && (
        <div className="lg:mx-50 md:mx-30 sm:mx:10">
          <MaoriStrip />
        </div>
      )}

      <HeroBoxContent
        title={title}
        followingText={followingText}
        image={image}
        imageUK={imageUK}
        button={button}
        transparentBox={transparentBox}
      />
      {!isUK && (
        <div className="lg:mx-50 md:mx-30 sm:mx:10">
          <MaoriStrip />
        </div>
      )}
    </>
  )
}
