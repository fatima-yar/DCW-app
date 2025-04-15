import Content from '../Contents'
import Button from './Button'

export default function sponsorships() {
  return (
    <>
      <Content
        header="sponsorships (CSR)"
        content={[
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa.',
        ]}
        bgColor="gray"
        image="/sponsorship.jpg"
        imagePosition="right"
      />
      <div className="text-black bg-gray-100 md:mx-10 lg:mx-25 xl:mx-50 pt-5">
        <div className="flex justify-center">
          <Button text="GO!" link="contact-us" newTab={true} />
        </div>
      </div>
    </>
  )
}
