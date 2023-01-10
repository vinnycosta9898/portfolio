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
        img_url: "/cep-locator.png",
        repo_url: "https://github.com/vinnycosta9898/cep-locator",
        techs: "Axios | CSS | React"   
    },

    {
        id: "2",
        name: "React Movies", 
        img_url: "/react-movies.png",
        repo_url: "https://github.com/vinnycosta9898/react-movies",
        techs: "Axios | React | React Hoooks"  
    },

    {
        id: "3",
        name: "Pizza App", 
        img_url: "/pizza-app.png",
        repo_url: "https://github.com/vinnycosta9898/pizza-app",
        techs: "NodeJs | NextJs | Sass | Prisma | Postgres | TypeScript "  
    },

    {
        id: "4",
        name: "Minha Carteira", 
        img_url: "/minha-carteira.png",
        repo_url: "https://github.com/vinnycosta9898/minha-carteira",
        techs: "React | Recharts | Styled-Components | TypeScript"   
    },
]