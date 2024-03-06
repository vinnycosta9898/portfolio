/* eslint-disable camelcase */
/* eslint-disable react/no-unescaped-entities */
import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Great_Vibes, Poppins } from 'next/font/google'
import Header from '@/components/Header'
import TechCard from '@/components/TechCard'
import WorkCard from '@/components/WorkCard'
import { techs } from '@/repositories/techs'
import { projects } from '@/repositories/projects'
import { tools } from '@/repositories/tools'
import * as S from '@/styles/app'
import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai'
import ProjectCard from '@/components/ProjectCard'

export const GREATVIBES = Great_Vibes({ weight: '400', preload: false })
export const POPPINS_400 = Poppins({ subsets: ['latin'], weight: ['400'] })
export const POPPINS_700 = Poppins({ subsets: ['latin'], weight: ['700'] })

export default function Home() {
  const targetAboutRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

  function handleClick(option: number) {
    switch (option) {
      case 1:
        targetAboutRef.current?.scrollIntoView({ behavior: 'smooth' })
        break
      case 2:
        experienceRef.current?.scrollIntoView({ behavior: 'smooth' })
        break
      case 3:
        projectsRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <>
      <Header handleClick={handleClick} />
      <S.MainContainer>
        <S.DescriptionContainer>
          <h1 className={POPPINS_400.className} id="title">
            Hi, my name is
          </h1>
          <h1 className={POPPINS_700.className}>Vinicius Costa</h1>
          <h2 className={POPPINS_400.className}>Full Stack Developer 🚀</h2>

          <span className={POPPINS_400.className}>
            I'm a software developer specializing in React and React Native,
          </span>

          <S.SocialContainer>
            <Link
              href="https://www.linkedin.com/in/vinnycosta9898/"
              target="_blanck"
            >
              <AiFillLinkedin color="#0E76A8" />
            </Link>
            <Link href="https://github.com/vinnycosta9898" target="_blanck">
              <AiOutlineGithub color="#fff" />
            </Link>
          </S.SocialContainer>
        </S.DescriptionContainer>

        <S.AboutMeContainer ref={targetAboutRef}>
          <S.AboutMe>
            <h1 className={POPPINS_700.className}>0.1 About Me</h1>
            <h2 className={POPPINS_400.className}>
              Hello, my name is Vinicius Costa, I am a Systems Analysis and
              Development student at the Pontifical Catholic University of
              Paraná (PUC-PR), I have been studying software development since
              January 2022, I have knowledge in the main technologies on the
              market, such as NodeJS, React, React-Native, Typescript,
              Styled-Components, my main objective is to become a reference in
              the area and generate impact on peoples lives through technology.
            </h2>
          </S.AboutMe>

          <S.PhotoContainer>
            <Image
              src={'https://github.com/vinnycosta9898.png'}
              alt="Imagem de perfil"
              width={320}
              height={320}
            />
          </S.PhotoContainer>
        </S.AboutMeContainer>
        <h1 className={POPPINS_700.className}>0.2 Technologies I Used</h1>
        <S.TechsContainer>
          {techs.map((tech) => {
            return (
              <TechCard
                key={tech.id}
                id={tech.id}
                name={tech.name}
                imgUrl={tech.imgUrl}
              />
            )
          })}
        </S.TechsContainer>

        <h1 className={POPPINS_700.className}>0.3 Tools I Used</h1>

        <S.ToolsContainer>
          {tools.map((tool) => {
            return (
              <TechCard
                key={tool.id}
                id={tool.id}
                name={tool.name}
                imgUrl={tool.imgUrl}
              />
            )
          })}
        </S.ToolsContainer>

        <S.ExperienceContainer ref={experienceRef}>
          <h1 className={POPPINS_700.className} id="first_tag">
            0.4 Where I've Worked
          </h1>
          <S.WorkContainer>
            <WorkCard />
          </S.WorkContainer>
        </S.ExperienceContainer>

        <S.ProjectsContainer ref={projectsRef}>
          <h1 className={POPPINS_700.className} id="first_tag">
            0.5 Projects
          </h1>
          <S.Projects>
            {projects.map((project) => {
              return (
                <Link href={project.linkRepo}>
                  <ProjectCard
                    id={project.id}
                    key={project.id}
                    name={project.name}
                    description={project.description}
                    techs={project.techs}
                  />
                </Link>
              )
            })}
          </S.Projects>

          <S.Footer>
            <h1 className={POPPINS_400.className}>
              Powerby @Vinicius Costa with ❤️{' '}
            </h1>
          </S.Footer>
        </S.ProjectsContainer>
      </S.MainContainer>
    </>
  )
}
