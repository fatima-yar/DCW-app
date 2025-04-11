import React from 'react'

export default function Contents({ header, content, image }) {
  return (
    <div className="text-black bg-white px-20 sm:px-10 md:mx-10 lg:mx-25 xl:mx-50 py-10">
      <div className="font-[Convergence] text-3xl">{header}</div>
      <div className="space-y-3 sm:space-y-4 text-md py-5 font-[Convergence]">
        {content.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>
      {image && <img src={image} alt={header} className="pt-5" />}
    </div>
  )
}
