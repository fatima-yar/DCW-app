import Content from '../Contents'

export default function DonateUi({ content }) {
  const donate = content?.Donate

  console.log('DonateUi DONATE content:', donate)
  return (
    <Content
      header={content.header}
      content={content.content}
      image={content.image}
    />
  )
}
