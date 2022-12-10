interface ProjectsProps{
    id: string;
    name: string;
    img_url: string;
    repo_url: string;
    techs: string;
}

export const projects : ProjectsProps[] = [

    {
        id: "1",
        name: "Cep Locator", 
        img_url: "https://raw.githubusercontent.com/vinnycosta9898/cep-locator/master/photo2.png",
        repo_url: "https://github.com/vinnycosta9898/cep-locator",
        techs: "Axios | CSS | JSX | React "   
    },

    {
        id: "2",
        name: "React Movies", 
        img_url: "https://raw.githubusercontent.com/vinnycosta9898/react-movies/master/photo1.png",
        repo_url: "https://github.com/vinnycosta9898/react-movies",
        techs: "Axios | React | React Hoooks"  
    },

    {
        id: "3",
        name: "Pizza App", 
        img_url: "https://user-images.githubusercontent.com/78479021/197026867-a4e8e39d-2dcc-488a-89ed-6047dd06ffd4.png",
        repo_url: "https://github.com/vinnycosta9898/pizza-app",
        techs: "NodeJs | NextJs | Sass | Prisma | Postgres | TypeScript "  
    },

    {
        id: "4",
        name: "Minha Carteira", 
        img_url: "https://raw.githubusercontent.com/vinnycosta9898/minha-carteira/master/photo2.png",
        repo_url: "https://github.com/vinnycosta9898/minha-carteira",
        techs: "React | Recharts | Styled-Components | TypeScript"   
    },
]