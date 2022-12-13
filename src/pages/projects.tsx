import { Container, CardsContainer, CardContainer } from '../styles/pages/projects'

import Image from 'next/image'

import Link from 'next/link'

import { projects } from '../utils/projects'

export default function Projects(){
    return(
        <Container>
            <CardsContainer>
            {
                projects.map((item) => (
                    <Link href={item.repo_url} key={item.id} target="blanck">
                        <CardContainer>
                            <Image src={item.img_url} alt={item.name} width={1000} height={1000}/>
                            <h2>{item.name}</h2>
                            <h3>{item.techs}</h3>
                        </CardContainer>
                    </Link>
                ))
            }
            </CardsContainer>
        </Container>
    )
}