import events from '../../app/data/events.json'
import SquarePics from './SquarePics'

export default function Events() {
  return (
    <>
      <div className="text-black bg-white px-20 sm:px-10 md:mx-10 lg:mx-25 xl:mx-50 py-10">
        <p className="font-[Convergence] text-2xl pl-16 pb-10">Events</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center gap-y-16">
          {events.map((event, index) => (
            <SquarePics
              key={index}
              src={event.image}
              alt={event.caption}
              caption={event.caption}
            />
          ))}
        </div>
      </div>
    </>
  )
}
