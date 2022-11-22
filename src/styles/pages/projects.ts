import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    margin: 4rem 2rem;

    @media (max-width: 1090px){
        flex-wrap: wrap;
    }
`

export const CardContainer = styled.div`
    width: 30rem;
    height: 30rem;
    background-color: #313131;
    border-radius: 1rem;
    border: 3px solid #000;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 2rem;

    img{
        width: 99%;
        height: 80%;
        border-radius: 1rem;
    }

    h2{
        color: #fff;
        font-family: Poppins;
        font-size: 2rem;
    }

    h3{
        color: #d7995b;
        font-family: Poppins;
        font-size: 1rem;

    }

    &:hover{
        border-color: aquamarine;
    }

    @media (max-width: 1090px){
        margin: 2rem 0;
    }
`