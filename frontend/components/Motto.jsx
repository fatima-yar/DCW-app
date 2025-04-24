export default function Motto({ motto }) {
  return (
    <div className="lg:mx-50 md:mx-30 sm:mx-10 text-black bg-white lg:h-20 md:h-10 sm:h-10 lg:px-2 md:px-1 sm:px-2 text-center font-[Sansation] md:text-md sm:text-sm lg:text-xl flex justify-center items-center">
      {motto}
    </div>
  )
}
