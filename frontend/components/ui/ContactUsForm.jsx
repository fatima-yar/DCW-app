import React from 'react'

const ContactUs = () => {
  return (
    <div className="font-[Convergence]">
      <h2 className="text-lg mt-10 font-semibold  mb-4 text-black">
        Contact Us Now!
      </h2>
      <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-4">
          <div>
            <input
              type="text"
              className="w-full p-2 border-[#c58cbe] border-2 rounded-md text-gray-600"
              placeholder="Name"
            />
          </div>

          <div>
            <input
              type="email"
              className="w-full p-2 border-[#c58cbe] border-2 rounded-md text-gray-600"
              placeholder="Mail"
            />
          </div>

          <div>
            <input
              type="tel"
              className="w-full p-2 border-[#c58cbe] border-2 rounded-md text-gray-600"
              placeholder="Phone"
            />
          </div>
        </div>

        <div>
          <textarea
            className="w-full p-2 border-[#c58cbe] border-2 rounded-md text-gray-600"
            placeholder="Message"
            rows="6"
          />
        </div>

        <div className="col-span-2 text-center mt-4">
          <button className="px-4 py-2 bg-[#ac7ba5] text-white rounded-md hover:bg-[#778d92]">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactUs
