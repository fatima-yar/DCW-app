import React from 'react'

export default function Contents({
  header,
  content,
  image,
  imagePosition = 'bottom',
  bgColor = 'white',
}) {
  const isImageRight = image && imagePosition === 'right'
  const isImageLeft = image && imagePosition === 'left'

  const bgClass = bgColor === 'gray' ? 'bg-gray-100' : 'bg-white'

  return (
    <div
      className={`text-black ${bgClass} px-8 sm:px-10 md:mx-10 lg:mx-25 xl:mx-50 pt-10`}
    >
      <div className="font-[Convergence] text-3xl pl-4 lg:pl-36">{header}</div>

      <div
        className={`pt-5 pb-5 font-[Convergence] px-4 lg:px-36 ${
          image && (isImageRight || isImageLeft)
            ? 'flex flex-col lg:flex-row lg:items-start gap-6'
            : ''
        }`}
      >
        {isImageLeft && (
          <div className="lg:w-1/3">
            <img src={image} alt={header} className="w-full object-contain" />
          </div>
        )}

        <div
          className={`space-y-3 sm:space-y-4 text-md ${
            isImageRight || isImageLeft ? 'lg:w-2/3' : ''
          }`}
        >
          {content.map((item, idx) => {
            if (typeof item === 'string') {
              return <p key={idx}>{item}</p>
            }

            if (item.type === 'bullet') {
              return (
                <div key={idx} className="pl-8">
                  <ul className="list-disc list-inside space-y-1">
                    {item.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              )
            }

            return null
          })}
        </div>

        {isImageRight && (
          <div className="lg:w-1/3">
            <img src={image} alt={header} className="w-full object-contain" />
          </div>
        )}
      </div>

      {image && imagePosition === 'bottom' && (
        <div className="pb-5 flex justify-center lg:px-36">
          <img src={image} alt={header} className="object-contain" />
        </div>
      )}
    </div>
  )
}
