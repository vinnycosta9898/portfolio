import { Container, CardContainer } from '../styles/pages/projects'

import Image from 'next/image'

import photo from '../../assets/photo.png'

import { projects } from '../utils/projects'

export default function Projects(){
    return(
        <Container>
            {
                projects.map((item) => (
                    <a href={item.repo_url} key={item.id} target="blanck">
                        <CardContainer>
                            <Image src={item.img_url} alt={item.name} width={1000} height={1000}/>
                            <h2>{item.name}</h2>
                            <h3>{item.techs}</h3>
                        </CardContainer>
                    </a>
                ))
            }
        </Container>
    )
}