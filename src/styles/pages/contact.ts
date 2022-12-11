import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 5rem 0;
`

export const TextContainer = styled.div`
    display: flex;
    justify-content: flex-start;

    h2{
        background: -webkit-linear-gradient(45deg, rgb(0, 188, 212), rgb(0, 255, 149) 80%);
        color: black;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        
        font-family: Poppins;
        font-size: 2.5rem;
        padding-left: 2rem;

        @media (min-width: 375px) and (max-width: 550px){
            font-size: 1.6rem;
        }
    }
`

export const CardContainer = styled.div`
    width: 20rem;
    height: 5rem;
    background-color: #313131;
    border-radius: 1rem;
    border: 3px solid #000;
    cursor: pointer;
    margin: 1rem 2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    img{
        margin: 0 0.5rem;
    }

    h3{
        color: #fff;
        font-family: Poppins;
        font-size: 1.5rem;
        padding: 0 0.5rem;
    }

    &:hover{
        border-color: aquamarine;
    }
`