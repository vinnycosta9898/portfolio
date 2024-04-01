'use client'

import { Avatar } from "@/components/Avatar";
import { ExperienceCard } from "@/components/ExperienceCard";
import { Header } from "@/components/Header";
import { MeCard } from "@/components/MeCard";
import { TypeWriterName } from "@/components/TypeWritterName";

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
    </div>
  );
}
