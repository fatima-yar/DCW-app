'use client'
import React from 'react'
import Contents from './Contents'
import { useLocale } from './LocaleContext'
import { useState, useEffect } from 'react'

export default function MissionStatement({ content, contentUK }) {
  const { isUK } = useLocale()
  const selectedContent = isUK ? contentUK : content
  if (!selectedContent) return null
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) return null
  return (
    <>
      <Contents
        header={selectedContent.header}
        content={selectedContent.content}
        image={selectedContent.image}
      />
    </>
  )
}
