import Content from '../Contents'
import Button from './Button'

export default function sponsorships({ content }) {
  const contentBlock = content.find((p) => p.__component === 'blocks.content')
  const buttonBlock = content.find((p) => p.__component === 'elements.btn')

  if (!contentBlock) return null

  return (
    <>
      <Content
        header={contentBlock.header}
        content={contentBlock.content}
        image={contentBlock.image}
        bgColor="gray"
      />
      <div className="text-black bg-gray-100 md:mx-10 lg:mx-25 xl:mx-50 pt-5">
        <div className="flex justify-center">
          <Button
            text={buttonBlock.text}
            link={buttonBlock.href}
            newTab={true}
          />
        </div>
      </div>
    </>
  )
}
