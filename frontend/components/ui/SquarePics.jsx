export default function SquarePics({ src, alt, caption }) {
  return (
    <div className="  text-center">
      <img src={src} alt={alt} className="w-60 h-60 object-cover rounded-2xl" />
      <p className="mt-8 text-md text-gray-700 font-[Convergence] ">
        {caption}
      </p>
    </div>
  )
}
