import React from 'react'
import Contents from './Contents'

export default function PrivacyPolicy({ content }) {
  return <Contents header={content.header} content={content.content} />
}
