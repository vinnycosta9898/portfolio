import { ProjectCardContainer } from './styles'
import { POPPINS_400, POPPINS_700 } from '@/pages'

interface ProjectCardProps {
  id: string
  name: string
  description: string
  techs: string
}

export default function ProjectCard({
  id,
  name,
  description,
  techs,
}: ProjectCardProps) {
  return (
    <ProjectCardContainer>
      <h1 className={POPPINS_700.className}>{name}</h1>
      <p className={POPPINS_400.className}>{description}</p>
      <span className={POPPINS_700.className}>Techs used:</span>
      <span className={POPPINS_400.className}>{techs}</span>
    </ProjectCardContainer>
  )
}
