import Content from '../Contents'
import Button from './Button'

export default function Givealittle() {
  return (
    <>
      <Content
        header="Givealittle"
        content={[
          'To make an instant and secure online donation using your Visa, MasterCard or AMEX, click on the button to be redirected to the Givealittle fundraising page:',
        ]}
        image="/givealittle.jpeg"
        imagePosition="right"
        bgColor="gray"
      />
      <div className="text-black bg-gray-100 md:mx-10 lg:mx-25 xl:mx-50 pt-5">
        <div className="flex justify-center">
          <Button
            text="Givealittle"
            link="https://givealittle.co.nz/donate/org/dreamcatchersworldwide"
            newTab={true}
          />
        </div>
      </div>
    </>
  )
}
