import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
`

export const Avatar = styled.img`
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
    margin: 2rem 0; 

    @media (max-width: 730px){
        width: 20rem;
        height: 20rem;
    }

    @media (max-width: 430px){
        width: 15rem;
        height: 15rem;
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
    }

    h3{
        color: #d7995b;
        font-family: Poppins;
        font-size: 2rem;
    }

    @media (max-width: 730px){
        h1{
            font-size: 3rem;
        }

        h3{
            font-size: 1.5rem;
        }
    }

    @media (max-width: 430px){
        h1{
            font-size: 2rem;
        }

        h3{
            font-size: 1rem;
        }
    }

    @media (max-width: 280px){
        h1{
            font-size: 1.5rem;
        }

        h3{
            font-size: 0.8rem;
        }
    }
`

export const FooterContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 7rem;
    height: 7rem;
    background-color: #313131;
    border: 3px solid #000;
    border-radius: 1rem;
    margin: 1rem 1rem;

    cursor: pointer;

    @media (max-width: 730px){
        width: 6rem;
        height: 6rem;
    }

    img{
        width: 65%;
        height: 65%;

        @media (max-width: 730px){
            width: 60%;
            height: 60%;
        }
    }

    &:hover{
        border-color: aquamarine;
        transform: scale(1.2);
    }

    strong{
        color: #fff;
        font-size: 1.25rem;
        font-family: Poppins;

        @media (max-width: 730px){
            font-size: 1rem;
        }

        @media (max-width: 430px){
            font-size: 0.8rem;
        }
    }
`