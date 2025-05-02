import Content from '../Contents'
import Button from './Button'

export default function Givealittle({ content }) {
  console.log('Givealittle content:', content)

  const contentBlock = content.find(
    (block) => block.__component === 'blocks.content'
  )
  const buttonBlock = content.find(
    (block) => block.__component === 'elements.btn'
  )
  console.log('contentBlock', contentBlock)
  console.log('buttonBlock', buttonBlock)
  if (!contentBlock) return null
  return (
    <>
      <Content
        header={contentBlock.header}
        content={contentBlock.content}
        image={contentBlock.image}
        imagePosition="right"
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
