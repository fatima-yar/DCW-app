import React from 'react'

export default function Contents({ header, content, image }) {
  return (
    <div className="text-black bg-white px-20 sm:px-10 md:mx-10 lg:mx-25 xl:mx-50 pt-10 ">
      <div className="font-[Convergence] text-3xl pl-4 lg:pl-36">{header}</div>
      <div className="space-y-3 sm:space-y-4 text-md py-5 font-[Convergence] px-4 lg:px-36">
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
      {image && <img src={image} alt={header} className="pt-5 lg:px-36" />}
    </div>
  )
}
