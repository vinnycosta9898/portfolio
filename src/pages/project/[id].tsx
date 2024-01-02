import {
  ProjectContainer,
  TitleContainer,
  TechsUtilizedContainer,
  DescriptionContainer,
  ImageContainer,
  ImageProject,
} from '@/styles/project'
import { useRouter } from 'next/router'
import { InfoProjects } from '@/repositories/info-projects'

export default function Project() {
  const router = useRouter()
  const id = router?.query.id

  const projectInfo = InfoProjects.filter((project) => project.id === id)

  console.log(projectInfo)
  return (
    <ProjectContainer>
      <TitleContainer>
        {projectInfo.map((project) => project.name)}
      </TitleContainer>

      <TechsUtilizedContainer>
        {projectInfo.map((techUtilized) => techUtilized.techsUtilized + ' ')}
      </TechsUtilizedContainer>

      <DescriptionContainer>
        <h1>{projectInfo.map((description) => description.description)}</h1>
      </DescriptionContainer>

      <ImageContainer>
        {projectInfo.map((item) => (
          <ImageProject
            key={item.id}
            src={item.projectImg}
            alt="Imagem do projeto"
          />
        ))}
      </ImageContainer>
    </ProjectContainer>
  )
}
