import { Container, Avatar, ProfileDescription } from './styles'

export default function About(){
    return(
        <Container>
            <Avatar src="https://github.com/vinnycosta9898.png" alt="Profile Photo"/>

            <ProfileDescription>
                <h3>
                    Apaixonado por tecnologia iniciei meus estudos em desenvolvimento web no início de 2022, 
                    tenho familiaridade em tecnologias como NodeJs, React e Typescript, tenho como principal 
                    ambição evoluir minhas habilidades e poder criar soluções que gerem impacto na vida das pessoas    
                </h3>
            </ProfileDescription>
        </Container>
    )
}