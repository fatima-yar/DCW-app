import Content from '../Contents'

export default function Gifts({ content }) {
  console.log('goidsofodsif', content.header)
  return (
    <Content
      header={content.header}
      content={content.content}
      image={content.image}
      imagePosition="right"
      bgColor="gray"
    />
  )
}
