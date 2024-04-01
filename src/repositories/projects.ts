interface ProjectsProps{
  id: string
  title: string
  description: string
  techsUtilized: string
}

export const projects = [
  {
    id: "1",
    title: "React Movies",
    description: "Aplicacã frontend que exibe informações de filmes que estão em cartaz no cinema",
    techsUtilized: 'NextJS | Axios | React Hook Form | Zod | TailwindCSS | Typescript'
  },
  {
    id: "2",
    title: "Ignite Coffe Delivery",
    description: "Aplicacã frontend que simula o marketplace de uma cafeteria",
    techsUtilized: 'React | React Hook Form | Zod | StitchesJS | Typescript'
  },
  {
    id: "3",
    title: "Ignite TODO APP",
    description: "App construido em React Native capaz de cadastrar e deletar tarefas do dia a dia utilizando Async Storage",
    techsUtilized: 'Expo | Async-Storage | Styled-Components | Typescript '
  }
]