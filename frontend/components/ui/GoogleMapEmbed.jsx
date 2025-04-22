import React from 'react'

const GoogleMapEmbed = ({ size = 'big' }) => {
  const sizes = {
    small: { width: 350, height: 200 },
    big: { width: 1000, height: 400 },
  }

  const { width, height } = sizes[size]

  return (
    <div className="google-map-container pt-0 ">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6380.289037794969!2d174.71483327580063!3d-36.910808882974756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d469094cec093%3A0x86d308f9515f9645!2s272%20New%20Windsor%20Road%2C%20New%20Windsor%2C%20Auckland%200600!5e0!3m2!1sen!2snz!4v1744344318916!5m2!1sen!2snz"
        width={width}
        height={height}
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  )
}

export default GoogleMapEmbed
