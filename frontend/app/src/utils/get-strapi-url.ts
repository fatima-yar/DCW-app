export default function getStrapiURL() {
  return (
    process.env.NEXT_PUBLIC_API_URL ??
    'https://respected-example-0f150a69b7.strapiapp.com'
  )
}
