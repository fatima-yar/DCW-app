import HeroBox from '@/components/HeroBox'
import InfoBox from '@/components/InfoBox'
import Motto from '@/components/Motto'

function blockRenderer(block, index) {
  switch (block.__component) {
    case 'blocks.hero-box':
      return (
        <HeroBox image={undefined} {...block} key={index} button={block?.cta} />
      )
    case 'blocks.info-box':
      return <InfoBox {...block} key={index} />
    case 'blocks.motto':
      return <Motto {...block} key={index} />
    default:
      return null
  }
}

export function BlockRenderer({ blocks }) {
  return blocks.map((block, index) => blockRenderer(block, index))
}
