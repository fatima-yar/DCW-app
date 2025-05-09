'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

const LocaleContext = createContext(undefined)

export function LocaleProvider({ children }) {
  const [isUK, setIsUK] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('isUK') === 'true'
    }
    return false
  })
  useEffect(() => {
    localStorage.setItem('isUK', String(isUK))
  }, [isUK])

  const toggleLocale = () => {
    setIsUK((prev) => !prev)
  }

  return (
    <LocaleContext.Provider value={{ isUK, toggleLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}
export function useLocale() {
  const context = useContext(LocaleContext)
  // if (!context) {
  //   throw new Error('setIsUK')
  // }
  return context
}
