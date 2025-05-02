import Content from '../Contents'

export default function DirectDonation({ content }) {
  // console.log('directDonatio:', content)

  return (
    <Content
      header={content.header}
      content={content.content}
      image={content.image}
    />
  )
}
