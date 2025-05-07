import React from 'react'

const ContactUs = () => {
  return (
    <div className="font-[Convergence]">
      <h2 className="text-lg mt-10 font-semibold mb-4 text-black">
        We’d Love to Hear From You!
      </h2>
      <form
        action="https://formspree.io/f/mpwddvzl"
        method="POST"
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        <div className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              required
              className="w-full p-2 border-[#c58cbe] border-2 rounded-md text-gray-600"
              placeholder="Name"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              required
              className="w-full p-2 border-[#c58cbe] border-2 rounded-md text-gray-600"
              placeholder="Email"
            />
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              className="w-full p-2 border-[#c58cbe] border-2 rounded-md text-gray-600"
              placeholder="Phone"
            />
          </div>
        </div>

        <div>
          <textarea
            name="message"
            required
            className="w-full p-2 border-[#c58cbe] border-2 rounded-md text-gray-600"
            placeholder="Message"
            rows="6"
          />
        </div>

        <div className="col-span-2 text-center mt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-[#ac7ba5] text-white rounded-md hover:bg-[#778d92]"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactUs
