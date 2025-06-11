import React from 'react'

const GoogleMapEmbed = ({ size = 'big' }) => {
  const sizes = {
    small: { width: 350, height: 200 },
    big: { width: '100%', height: 400 },
  }

  const { width, height } = sizes[size]

  return (
    <div className="google-map-container pt-0 " style={{ width: '100%' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4971.643652134803!2d-0.024255323532990536!3d51.46142767180277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487602686b932d75%3A0xae2b6bb7ea8fffa2!2s54%20Fossil%20Rd%2C%20London%20SE13%207DE%2C%20UK!5e0!3m2!1sen!2snz!4v1746591516241!5m2!1sen!2snz"
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
