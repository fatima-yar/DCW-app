import Content from '../Contents'

export default function DonateUi({ content }) {
  const donate = content?.donate

  // console.log('DonateUi DONATE content:', donate)
  return (
    <Content
      header={content.header}
      content={content.content}
      image={content.image}
    />
  )
}
