import { Container, CardContainer, TextContainer } from '../styles/pages/contact'

import Image from 'next/image'

import { social } from '../utils/social'

export default function Contact(){
    return(
        <Container>
            <TextContainer>
                <h2>Sinta-se a Vontade para entrar em contato...</h2>
            </TextContainer>
            {
                social.map((item) => (
                    <a href={item.url} key={item.id} target="blank">
                        <CardContainer>
                            <Image src={item.img_url} alt={item.name} width={60} height={60}/>
                            <h3>{item.name}</h3>
                        </CardContainer>
                    </a>
                ))
            }       
        </Container>
    )
}