'use client'

import { matchProjectById } from '@/utils/matchProjectById'
import Image from 'next/image'
import Link from 'next/link'
import { IoArrowBack } from "react-icons/io5";
import colors from 'tailwindcss/colors'

export default function Project({ params }: { params: { id: string } }) {
  const project = matchProjectById(params.id)

  return (
    <div className="min-w-screen min-h-screen bg-blue flex flex-col items-center">
      <Link 
        className="absolute top-5 left-5"
        href='/'
      >
        <IoArrowBack
          size={30}
          color={colors.white}
        />
      </Link>
      <h1 className="text-4xl text-yellow mt-16 md:text-3xl sm:text-2xl xsm:text-2xl overflow-y-hidden">
        {project?.title}
      </h1>
      <span className="text-pink text-center md:text-lg sm:text-sm xsm:text-sm">
        {project?.techsUtilized}
      </span>
      <Link
        href={project!.linkRepo}
        className="text-blue_twitter mt-4"
        target="_blanck"
      >
        Visitar repositório
      </Link>
      <div className="w-[50rem] h-max bg-transparent backdrop-blur-xl text-white text-xl p-4 text-center rounded-lg my-4 lg:w-[50rem] md:w-[40rem] sm:w-[30rem] xsm:w-[20rem]">
        <h1>{project?.description}</h1>
      </div>
      {project?.projectImgs.map((projectImg) => {
        return (
          <Image
            src={projectImg}
            alt="Imagem do projeto"
            width={900}
            height={900}
            className="my-4 lg:w-[56rem] md:w-[56rem] sm:[40rem] xsm:w-[30rem]"
            key={project.id}
          />
        )
      })}
    </div>
  )
}
