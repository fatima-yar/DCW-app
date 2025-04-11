import React from 'react'
import Contents from './Contents'

export default function AboutUs() {
  return (
    <Contents
      header="About Us"
      content={[
        'DreamCatchers WorldWide is a charitable organization that was founded in 2014, with the mission of helping those in need. Our team is made up of passionate individuals who are dedicated to making a positive impact on the world. We believe that every person deserves access to basic necessities such as education with compassion at the forefront of all we do.',

        'We work tirelessly to provide these resources to vulnerable community groups in Auckland, New Zealand. Our goal is to create a world where everyone has the opportunity to thrive and reach their full potential.',

        'At DreamCatchers WorldWide, we believe that everyone has the power to make a difference. Whether you are a volunteer, donor, or supporter, you can help us achieve our mission of providing services to vulnerable community groups.',

        'Join us today and help make a positive impact on the lives of those in need.',
      ]}
      image="/AboutUs.avif"
    />
  )
}
