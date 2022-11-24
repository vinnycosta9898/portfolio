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

    @media (max-width: 550px){
        width: 20rem;
        height: 20rem;
    }  
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;

    h1{
        background: -webkit-linear-gradient(45deg, rgb(0, 188, 212), rgb(0, 255, 149) 80%);
        color: black;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-family: Great Vibes;
        font-size: 4rem;

        @media (max-width: 550px){
            font-size: 3rem;
        }

        @media (max-width: 450px){
            font-size: 2rem;
        }
    }

    h3{
        color: #d7995b;
        font-family: Poppins;
        font-size: 2rem;

        @media (max-width: 550px){
            font-size: 1.5rem;
        }

        @media (max-width: 450px){
            font-size: 1rem;
        }
    }
`

export const FooterContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 8rem;
    height: 8rem;
    background-color: #313131;
    border: 3px solid #000;
    border-radius: 1rem;
    margin: 2rem 1rem;

    img{
        width: 65%;
        height: 65%;
        cursor: pointer;

        @media (max-width: 550px){
            width: 60%;
            height: 60%;
        }
    }

    &:hover{
        border-color: aquamarine;
    }

    strong{
        color: #fff;
        font-size: 1.25rem;
        font-family: Poppins;

        @media (max-width:550px){
            font-size: 1rem;
        }
    }
`