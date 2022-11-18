import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Avatar = styled.img`
    width: 25rem;
    height: 25rem;
    border-radius: 50%;
    margin: 2rem 0;
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        background: -webkit-linear-gradient(45deg, rgb(0, 188, 212), rgb(0, 255, 149) 80%);
        color: black;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-family: Great Vibes;
        font-size: 4.5rem;
    }

    h3{
        color: #d7995b;
        font-family: Poppins;
        font-size: 2.5rem;
    }
`

export const FooterContainer = styled.div`
    display: flex;
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 10rem;
    height: 10rem;
    background-color: #313131;
    border: 3px solid #000;
    border-radius: 1rem;
    margin: 2rem 1rem;

    img{
        width: 70%;
        height: 70%;
        cursor: pointer;
    }

    &:hover{
        border-color: aquamarine;
    }

    strong{
        color: #fff;
        font-size: 1.5rem;
        font-family: Poppins;
    }
`