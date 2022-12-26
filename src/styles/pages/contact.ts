import styled from 'styled-components';

export const Container = styled.div`
    max-width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 5rem 0;
    overflow: hidden;
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
        font-size: 2rem;
        padding-left: 2rem;

        @media (max-width: 575px){
            font-size: 1.5rem;
        }
    }
`

export const CardContainer = styled.div`
    width: 300px;
    height: 70px;
    background-color: #313131;
    border-radius: 1rem;
    border: 3px solid #000;
    cursor: pointer;
    margin: 1rem 2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 575px){
        width: 15rem;
        height: 4rem;
    }

    img{
        width: 50px;
        height: 50px;
        margin: 0 10px;
        
        @media (max-width: 575px){
            width: 40px;
            height: 40px;
        }
    }

    h3{
        color: #fff;
        font-family: Poppins;
        font-size: 24px;
        padding: 0 10px;
    }

    &:hover{
        border-color: aquamarine;
    }
`