import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 2rem 0;

    @media (max-width: 1090px){
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 800px){
        grid-template-columns: 1fr;
        margin: 0 25%;
    }

    @media(min-width: 375px) and (max-width: 550px){
        margin: 0 25%;
    }
`

export const CardContainer = styled.div`
    width: 24rem;
    height: 24rem;
    background-color: #313131;
    border-radius: 1rem;
    border: 3px solid #000;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 2rem;

    img{
        width: 100%;
        height: 80%;
        border-radius: 0.9rem;
    }

    h2{
        color: #fff;
        font-family: Poppins;
        font-size: 2rem;
    }

    h3{
        color: #d7995b;
        font-family: Poppins;
        font-size: 0.9rem;
        text-align: center;

    }

    &:hover{
        border-color: aquamarine;
        transform: scale(1.1);
    }

    @media (max-width: 1090px){
        margin: 2rem 0;
    }
`