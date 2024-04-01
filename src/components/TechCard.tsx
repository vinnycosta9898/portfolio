import Image from 'next/image'

interface TechCardProps {
  logo: string
  title: string
}

export function TechCard({ logo, title }: TechCardProps) {
  return (
    <div className="w-[12rem] h-[12rem] rounded-lg bg-transparent backdrop-blur-xl flex flex-col items-center justify-center gap-4">
      <Image src={logo} alt={`Logo da ${title}`} width={120} height={120} />
      <h1 className="text-xl text-white">{title}</h1>
    </div>
  )
}
