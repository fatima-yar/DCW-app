export default function getStrapiURL() {
  return (
    process.env.NEXT_PUBLIC_API_URL ??
    'https://ingenious-song-020dc68f16.strapiapp.com'
  )
}
