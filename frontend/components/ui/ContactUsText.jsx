'use client'
import React from 'react'
import { useLocale } from '../LocaleContext'
import { useState, useEffect } from 'react'

export default function ContactUsText({ text, textUK }) {
  const { isUK } = useLocale()
  const selectedText = isUK ? textUK : text
  if (!selectedText) return null
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) return null
  return (
    <div className="text-black">
      <div className="font-[Convergence] text-3xl pt-10 pb-5">Contact Us</div>
      <p className="whitespace-pre-line">{selectedText}</p>
    </div>
  )
}
