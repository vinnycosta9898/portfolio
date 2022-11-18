import { HeaderContainer } from "./styles"

import Link from "next/link"

export function Header(){
    return(
        <HeaderContainer>
            <Link href="/">@vinnycosta9898</Link>
            <Link href="/about">Sobre</Link>
            <Link href="/projects">Projetos</Link>
            <Link href="/contact">Contato</Link>
        </HeaderContainer>
    )
}