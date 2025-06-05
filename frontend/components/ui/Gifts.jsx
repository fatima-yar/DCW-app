import Content from '../Contents'

export default function Gifts({ content }) {
  return (
    <Content
      header={content.header}
      content={content.content}
      image={content.image}
      bgColor="gray"
    />
  )
}
