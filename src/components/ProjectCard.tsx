interface ProjectCardProps{
  title: string
  description: string
  techsUtilized: string
}

export function ProjectCard({ title, description, techsUtilized } : ProjectCardProps){
  return(
    <div className="w-[50rem] h-max p-4 bg-transparent backdrop-blur-xl my-4 cursor-pointer">
      <header className="flex justify-between items-center">
        <h1 className='font-bold text-xl text-yellow'>{title}</h1>
        <h1 className="text-blue_twitter">{techsUtilized}</h1>
      </header>
      <span className="text-pink">{description}</span>
    </div>
  )
}