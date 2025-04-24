import path from 'path'

async function Loader() {
  const path = 'api/test'
  const BASE_URL = 'http://localhost:1337'
  const url = new URL(path, BASE_URL)

  const response = await fetch(url.href)
  const data = await response.json()
  console.log(data)
  return { ...data.data }
}

export default async function Test() {
  const data = await Loader()
  console.log('here data', data)
  return <div className="text-black">{data.title}</div>
}
