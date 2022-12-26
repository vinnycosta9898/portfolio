import styled from "styled-components";

export const Container = styled.div`
    max-width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    overflow: hidden;
`

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    flex-wrap: wrap;
    overflow: hidden;

    @media (max-width: 1260px){
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 730px){
        grid-template-columns: 1fr;
    }
`

export const CardContainer = styled.a`
    width: 300px;
    height: 300px;
    background-color: #313131;
    border-radius: 20px;
    border: 3px solid #000;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 25px 25px;

    @media (max-width: 550px){
        width: 250px;
        height: 250px;
    }

    img{
        width: 100%;
        height: 80%;
        border-radius: 15px;
    }

    h2{
        color: #fff;
        font-family: Poppins;
        font-size: 30px;
        
        @media (max-width: 800px){
            font-size: 20px;
        }

        @media (max-width: 550px){
            font-size: 15px;
        }
    }

    h3{
        color: #d7995b;
        font-family: Poppins;
        font-size: 16px;
        padding: 0 10px;
        text-align: center;

        @media (max-width: 800px){
            font-size: 14px;
        }

        @media (max-width: 550px){
            font-size: 12px;
        }

    }

    &:hover{
        border-color: aquamarine;
        transform: scale(1.1);
    }
`