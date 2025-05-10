'use client'
import ContactUsText from './ui/ContactUsText'
import ContactUsForm from './ui/ContactUsForm'
import GoogleMapEmbed from './ui/GoogleMapEmbed'

export default function ContactUs({ text, textUK }) {
  return (
    <div className=" flex flex-col gap-6 text-black overflow-hidden px-4 sm:px-10 md:px-20 lg:px-40">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white px-10">
          <ContactUsText text={text} textUK={textUK} />
          <ContactUsForm />
        </div>
        <div className="flex justify-center bg-white pt-5 pb-10 px-10">
          <GoogleMapEmbed />
        </div>
      </div>
    </div>
  )
}
