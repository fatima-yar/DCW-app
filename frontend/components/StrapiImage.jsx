import Image from 'next/image'
import getStrapiURL from '../app/src/utils/get-strapi-url'

export function StrapiImage({ src, alt, className, ...rest }) {
  const imageUrl = getStrapiMedia(src)
  if (!imageUrl) return null

  if (process.env.NODE_ENV !== 'production' && (!alt || alt.trim() === '')) {
    console.warn(
      '⚠️ StrapiImage: Missing or empty alt text for image source:',
      src
    )
  }

  return (
    <Image
      src={imageUrl}
      alt={alt || 'Image'}
      className={className}
      {...rest}
    />
  )
}

// export function getStrapiMedia(url) {
//   if (url == null) return null
//   if (url.startsWith('data:')) return url
//   if (url.startsWith('http') || url.startsWith('//')) return url
//   return getStrapiURL() + url
// }
export function getStrapiMedia(url) {
  if (!url) return null

  const finalUrl = url.startsWith('http') ? url : `${getStrapiURL()}${url}`
  console.log('📸 Image URL passed to <Image>:', finalUrl)

  return finalUrl
}
