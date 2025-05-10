'use client'
import React from 'react'
import Contents from './Contents'
import { useLocale } from './LocaleContext'

export default function AboutUs({ content, contentUK }) {
  const { isUK } = useLocale()
  const selectedContent = isUK ? contentUK : content

  return (
    <>
      <Contents
        header={content.header}
        content={content.content}
        image={content.image}
      />
    </>
  )
}
