'use client'

import { useRef } from 'react'

import { Avatar } from '@/components/Avatar'
import { ExperienceCard } from '@/components/ExperienceCard'
import { Header } from '@/components/Header'
import { MeCard } from '@/components/MeCard'
import { ProjectCard } from '@/components/ProjectCard'
import { TechCard } from '@/components/TechCard'
import { TypeWriterName } from '@/components/TypeWritterName'

import { projects } from '@/repositories/projects'
import { techs } from '@/repositories/techs'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { api } from '@/lib/axios'

import { toast } from 'sonner'
import { motion } from 'framer-motion'

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'O Nome deve conter no minímo 2 carachetheres' })
    .max(24, { message: 'O Nome deve conter no máximo 24 carachetheres' }),
  subject: z
    .string()
    .min(2, { message: 'O assunto deve conter no minímo 2 carachetheres' })
    .max(24, { message: 'O assunto deve conter no máximo 24 carachetheres' }),
  content: z.string(),
})

export type FormSchemaData = z.infer<typeof formSchema>

export default function Home() {
  const scrollRef = useRef(null)
  const meRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLFormElement>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaData>({
    resolver: zodResolver(formSchema),
  })

  function handleClick(option: number) {
    switch (option) {
      case 1:
        meRef.current?.scrollIntoView({ behavior: 'smooth' })
        break
      case 2:
        experienceRef.current?.scrollIntoView({ behavior: 'smooth' })
        break
      case 3:
        projectsRef.current?.scrollIntoView({ behavior: 'smooth' })
        break
      case 4:
        contactRef.current?.scrollIntoView({ behavior: 'smooth' })
        break
    }
  }

  async function handleSendEmail(data: FormSchemaData) {
    try {
      await api.post('/send', {
        name: data.name,
        subject: data.subject,
        content: data.content,
      })
      toast.success('Email enviado com sucesso')
    } catch (err) {
      toast.error('Não foi possível enviar o e-mail')
    }
  }

  return (
    <div className="min-w-wscreen min-h-screen bg-blue flex flex-col items-center">
      <Header handleClick={handleClick} />
      <Avatar />
      <TypeWriterName />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ root: scrollRef }}
        ref={meRef}
      >
        <h1 className="font-bold text-2xl text-yellow my-4 overflow-y-hidden">
          Sobre Mim
        </h1>
        <MeCard />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ root: scrollRef }}
        ref={experienceRef}
      >
        <h1 className="font-bold text-2xl text-pink my-4 overflow-y-hidden">
          Experiência
        </h1>
        <ExperienceCard />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ root: scrollRef }}
        className="flex flex-col items-center"
      >
        <div className="w-[50rem] h-max flex justify-center">
          <h1 className="font-bold text-2xl text-purple my-4 overflow-y-hidden">
            Tecnologias que utlizo
          </h1>
        </div>
        <div className="w-[50rem] flex items-center justify-center gap-4 md:w-[50rem] sm:w-[40rem] xsm:w-[10rem]">
          <div className="w-full grid grid-cols-4 gap-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 xsm:grid-cols-1">
            {techs.map((tech) => {
              return (
                <TechCard logo={tech.logo} title={tech.title} key={tech.id} />
              )
            })}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ root: scrollRef }}
        ref={projectsRef}
        className="w-[50rem] md:w-[50rem] sm:w-[30rem] xsm:w-[20rem]"
      >
        <h1 className="font-bold text-2xl text-purple my-4 overflow-y-hidden">
          Meus projetos
        </h1>
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              techsUtilized={project.techsUtilized}
            />
          )
        })}
      </motion.div>

      <motion.form
        className="w-[50rem] flex flex-col gap-4 md:w-[50rem] sm:w-[30rem] xsm:w-[20rem]"
        onSubmit={handleSubmit(handleSendEmail)}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ root: scrollRef }}
        ref={contactRef}
      >
        <h1 className="font-bold text-2xl text-blue_twitter my-4 overflow-y-hidden">
          Entre em contato comigo
        </h1>
        <input
          type="text"
          placeholder="Digite o seu nome"
          className="w-full h-[3rem] bg-transparent backdrop-blur-xl rounded-lg text-white outline-none p-2"
          {...register('name')}
        />
        {errors.name && (
          <span className="text-red text-center">{errors.name.message}</span>
        )}
        <input
          type="text"
          placeholder="Digite o assunto"
          className="w-full h-[3rem] bg-transparent backdrop-blur-xl rounded-lg text-white outline-none p-2"
          {...register('subject')}
        />
        {errors.subject && (
          <span className="text-red text-center">{errors.subject.message}</span>
        )}

        <textarea
          placeholder="Digite o Email"
          className="w-full h-[16rem] bg-transparent backdrop-blur-xl rounded-lg text-white outline-none p-2"
          {...register('content')}
        ></textarea>
        {errors.content && (
          <span className="text-red text-center">{errors.content.message}</span>
        )}

        <button
          className="w-full h-[3rem] bg-blue_twitter text-yellow font-bold rounded-lg outline-none disabled:bg-blue_twitter_opacity"
          type="submit"
          disabled={isSubmitting}
        >
          Enviar Email
        </button>
      </motion.form>
    </div>
  )
}
