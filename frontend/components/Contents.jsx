import React from 'react'
import getStrapiURL from '../app/src/utils/get-strapi-url'

export default function Contents({
  header,
  content,
  image,
  imagePosition = 'bottom',
  bgColor = 'white',
}) {
  const imageUrl = image?.url
    ? image.url.startsWith('http')
      ? image.url
      : `${getStrapiURL()}${image.url}`
    : null
  const isImageRight = image && imagePosition === 'right'
  const isImageLeft = image && imagePosition === 'left'
  const bgClass = bgColor === 'gray' ? 'bg-gray-100' : 'bg-white'

  return (
    <div
      className={`text-black ${bgClass} px-0 sm:px-2 md:mx-10 lg:mx-25 xl:mx-50 pt-10`}
    >
      <div className="font-[Convergence] text-3xl pl-4 lg:pl-36">{header}</div>

      <div
        className={`pt-5 pb-5 font-[Convergence] px-4 lg:px-36 ${
          image && (isImageRight || isImageLeft)
            ? 'flex flex-col lg:flex-row lg:items-start gap-6'
            : ''
        }`}
      >
        {isImageLeft && imageUrl && (
          <div className="lg:w-1/3">
            <img
              src={imageUrl}
              alt={header}
              className="w-full object-contain"
            />
          </div>
        )}

        <div className="space-y-3 sm:space-y-4 text-justify text-md">
          {typeof content === 'string' ? (
            content
              .split('\n\n')
              .map((paragraph, idx) => <p key={idx}>{paragraph}</p>)
          ) : (
            <p>No content available.</p>
          )}
        </div>

        {isImageRight && imageUrl && (
          <div className="lg:w-2/3">
            <img
              src={imageUrl}
              alt={header}
              className="w-full object-contain"
            />
          </div>
        )}
      </div>

      {image && imagePosition === 'bottom' && imageUrl && (
        <div className="pb-5 flex justify-center sm:px-4 lg:px-36">
          <img src={imageUrl} alt={header} className="object-contain" />
        </div>
      )}
    </div>
  )
}
