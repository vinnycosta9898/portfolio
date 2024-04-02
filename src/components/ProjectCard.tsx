import Link from 'next/link'

interface ProjectCardProps {
  id: string
  title: string
  description: string
  techsUtilized: string
}

export function ProjectCard({
  id,
  title,
  description,
  techsUtilized,
}: ProjectCardProps) {
  return (
    <div className="w-full h-max p-4 bg-transparent backdrop-blur-xl my-4 cursor-pointer hover:scale-105 transition ease-in-out delay-75">
      <Link href={`/project/${id}`}>
        <header className="flex justify-between items-center">
          <h1 className="font-bold text-xl text-yellow">{title}</h1>
          <h1 className="text-blue_twitter">{techsUtilized}</h1>
        </header>
        <span className="text-pink">{description}</span>
      </Link>
    </div>
  )
}
