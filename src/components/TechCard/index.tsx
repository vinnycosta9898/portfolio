import Image from 'next/image'
import { TechCardContainer } from './styles'
import { POPPINS_700 } from '@/pages'

interface TechCardProps {
  id: string
  name: string
  imgUrl: string
}

export default function TechCard({ id, name, imgUrl }: TechCardProps) {
  return (
    <TechCardContainer>
      <Image src={imgUrl} alt={`Logos ${name}`} width={80} height={80} />
      <span className={POPPINS_700.className}>{name}</span>
    </TechCardContainer>
  )
}
