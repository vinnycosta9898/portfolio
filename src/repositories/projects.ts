interface ProjectCardProps {
  id: string
  name: string
  description: string
  techs: string
  linkRepo: string
}

export const projects: ProjectCardProps[] = [
  {
    id: '1',
    name: 'Ignite Todo APP',
    description:
      'Application built with React Native to create, complete and delete everyday tasks',
    techs: 'Expo | Typescript | Styled-Components',
    linkRepo: 'https://github.com/vinnycosta9898/ignite-todo-app',
  },
  {
    id: '2',
    name: 'Ignite Daily Diet',
    description:
      'Mobile application that records changes and excludes meals of the day and classifies them as in or out of the diet',
    techs:
      'Expo | Typescript | Async-Storage | React-Hook-Form | Styled-Components',
    linkRepo: 'https://github.com/vinnycosta9898/ignite-daily-diet',
  },
  {
    id: '3',
    name: 'Ignite Coffe Delivery',
    description:
      'Frontend application that simulates a coffee shop marketplace where it is possible to select coffees, add to cart and view the total purchase ',
    techs:
      'React | React Hook Form | Typescript | Styled-Componets | Vite | Zod',
    linkRepo: 'https://github.com/vinnycosta9898/ignite-coffe-delivery',
  },
  {
    id: '4',
    name: 'Minha Carteira',
    description:
      'Dashboard Interativo que exibe entradas e saidas de uma carteira',
    techs: 'React | Typescript | Styled-Componets | Vite ',
    linkRepo: 'https://github.com/vinnycosta9898/minha-carteira',
  },
]
