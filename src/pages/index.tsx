import Head from 'next/head'

import Image from 'next/image'

import { Container, Avatar, TitleContainer, FooterContainer, CardContainer} from '../styles/pages/home'

import { techs } from '../utils/techs'

export default function Home() {
  return (
    <Container>
      <Avatar src="https://github.com/vinnycosta9898.png" alt="Profile Photo"/>
      <TitleContainer>
        <h1>Vinicius Costa de Almeida</h1>
        <h3>Full Stack Developer</h3>
      </TitleContainer>

      <FooterContainer>
        {techs.map((item) => (
              <CardContainer key={item.id}>
                <Image src={item.img_url} alt={item.name} width={20} height={20} />
                <strong>{item.name}</strong>
              </CardContainer>
            ))}
      </FooterContainer>
    </Container>
  )
}
