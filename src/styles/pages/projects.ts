import styled from "styled-components";

export const Container = styled.div`
    max-width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin: 1rem 0;
    overflow: hidden;
`

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    flex-wrap: wrap;
    gap: 0 1rem;

    @media (max-width: 1260px){
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 730px){
        grid-template-columns: 1fr;
    }
`

export const CardContainer = styled.a`
    width: 21rem;
    height: 21rem;
    background-color: #313131;
    border-radius: 1rem;
    border: 3px solid #000;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 1rem;

    @media (max-width: 800px){
        width: 20rem;
        height: 20rem;
    }

    @media (max-width: 550px){
        width: 18rem;
        height: 18rem;
    }

    img{
        width: 100%;
        height: 80%;
        border-radius: 0.9rem;
    }

    h2{
        color: #fff;
        font-family: Poppins;
        font-size: 2rem;
        
        @media (max-width: 800px){
            font-size: 1.7rem;
        }

        @media (max-width: 550px){
            font-size: 1.3rem;
        }
    }

    h3{
        color: #d7995b;
        font-family: Poppins;
        font-size: 0.9rem;
        text-align: center;

        @media (max-width: 800px){
            font-size: 0.7rem;
        }

        @media (max-width: 550px){
            font-size: 0.6rem;
        }

    }

    &:hover{
        border-color: aquamarine;
        transform: scale(1.1);
    }
`