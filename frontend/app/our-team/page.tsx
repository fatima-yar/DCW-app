import { OurTeam } from '@/components/OurTeam'
export const revalidate = 60
export default async function ourTeam() {
  return <OurTeam />
}
