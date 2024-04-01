'use client'

import { Avatar } from "@/components/Avatar";
import { ExperienceCard } from "@/components/ExperienceCard";
import { Header } from "@/components/Header";
import { MeCard } from "@/components/MeCard";
import { ProjectCard } from "@/components/ProjectCard";
import { TechCard } from "@/components/TechCard";
import { TypeWriterName } from "@/components/TypeWritterName";
import { projects } from "@/repositories/projects";
import { techs } from "@/repositories/techs";

export default function Home() {
  return (
    <div className="min-w-wscreen min-h-screen bg-blue flex flex-col items-center">
      <Header/>
      <Avatar/>
      <TypeWriterName/>
      <div>
        <h1 className="font-bold text-2xl text-yellow my-4" >Sobre Mim</h1>
        <MeCard/>
      </div>

      <div>
        <h1 className="font-bold text-2xl text-pink my-4">Experiência</h1>
        <ExperienceCard/>
      </div>

      <div>
        <h1 className="font-bold text-2xl text-purple my-4">Tecnologias que utlizo</h1>
        <div className="w-[50rem] grid grid-cols-4 gap-4">
          {techs.map((tech) => {
            return(
              <TechCard
                logo={tech.logo}
                title={tech.title}
                key={tech.id}
              />
            )
          })}
        </div>
      </div>

      <div>
        <h1 className="font-bold text-2xl text-purple my-4">Meus projetos</h1>
        {projects.map((project) => {
          return(
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              techsUtilized={project.techsUtilized}
            />
          )
        })}
      </div>

      <div className="w-[50rem] flex flex-col gap-4">
        <h1 className="font-bold text-2xl text-blue_twitter my-4">Entre em contato comigo</h1>
        <input 
          type="text"
          placeholder="Digite o seu nome"
          className="w-full h-[3rem] bg-transparent backdrop-blur-xl rounded-lg text-white outline-none p-2"
        />
        <input 
          type="text"
          placeholder="Digite o assunto"
          className="w-full h-[3rem] bg-transparent backdrop-blur-xl rounded-lg text-white outline-none p-2"
        />
        <textarea 
          placeholder="Digite o Email"
          className="w-full h-[16rem] bg-transparent backdrop-blur-xl rounded-lg text-white outline-none p-2"
        >

        </textarea>
        <button
          className="w-full h-[3rem] bg-blue_twitter text-yellow font-bold rounded-lg outline-none"
        >
          Enviar Email
        </button>
      </div>
    </div>
  );
}
