interface InfoProjects {
  id: string
  name: string
  projectImg: string
  techsUtilized: string[]
  description: string
}

export const InfoProjects: InfoProjects[] = [
  {
    id: '1',
    name: 'Ignite todo App',
    projectImg:
      'https://raw.githubusercontent.com/vinnycosta9898/ignite-todo-app/master/.github/photo1.png',
    techsUtilized: ['Expo', 'Styled-Components', 'Typescript'],
    description:
      'Aplicacão mobile que cria, exclui e rehistra tarefas do dia dia como Conclúidas',
  },
]
