import Content from '../Contents'

export default function GeneralPolicies() {
  return (
    <Content
      header="General Policies"
      content={[
        {
          type: 'bullet',
          points: [
            'All income is recorded and receipted',
            'We have 2 to sign authorisation on all expenditure and full Board reporting',
            'We are registered with the Charities commission and meet IRD requirements as a charitable Organisation',
            'All donations over $5 are tax deductable.',
          ],
        },
        'DreamCatchers WorldWide is a charitable organization that provides essential services to vulnerable community groups in New Zealand. Your donation will help us continue to support those in need. Every dollar makes a difference in the lives of those we serve.',
        'Please consider making a donation today and help us make a positive impact in our community. You can make a one-time donation or become a monthly donor to help sustain our programs and services.',
      ]}
    />
  )
}
