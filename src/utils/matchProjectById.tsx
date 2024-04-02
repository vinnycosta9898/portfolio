export const matchProjectById = (id: string) => {
  switch (id) {
    case '1':
      return {
        id: '1',
        title: 'React Movies',
        description:
          'Aplicacão frontend que exibe informações de filmes que estão em cartaz no cinema',
        techsUtilized:
          'NextJS | Axios | React Hook Form | Zod | TailwindCSS | Typescript',
        projectImgs: [
          'https://raw.githubusercontent.com/vinnycosta9898/react-movies/master/.github/photo1.png',
          'https://raw.githubusercontent.com/vinnycosta9898/react-movies/master/.github/photo2.png',
          'https://raw.githubusercontent.com/vinnycosta9898/react-movies/master/.github/photo3.png',
          'https://raw.githubusercontent.com/vinnycosta9898/react-movies/master/.github/photo4.png',
        ],
        linkRepo: 'https://github.com/vinnycosta9898/react-movies',
      }
    case '2':
      return {
        id: '2',
        title: 'Ignite Coffe Delivery',
        description:
          'Aplicacã frontend que simula o marketplace de uma cafeteria',
        techsUtilized:
          'React | React Hook Form | Zod | StitchesJS | Typescript',
        projectImgs: [
          'https://raw.githubusercontent.com/vinnycosta9898/ignite-coffe-delivery/master/.github/photo1.png',
          'https://raw.githubusercontent.com/vinnycosta9898/ignite-coffe-delivery/master/.github/photo2.png',
        ],
        linkRepo: 'https://github.com/vinnycosta9898/ignite-coffe-delivery',
      }
    case '3':
      return {
        id: '3',
        title: 'Ignite TODO App',
        description:
          'App construido em React Native capaz de cadastrar e deletar tarefas do dia a dia utilizando Async Storage',
        techsUtilized: 'Expo | Async-Storage | Styled-Components | Typescript ',
        projectImgs: [
          'https://raw.githubusercontent.com/vinnycosta9898/ignite-todo-app/master/.github/photo1.png',
          'https://raw.githubusercontent.com/vinnycosta9898/ignite-todo-app/master/.github/photo2.png',
        ],
        linkRepo: 'https://github.com/vinnycosta9898/ignite-todo-app',
      }
  }
}
