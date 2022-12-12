import styled from 'styled-components';

export const HeaderContainer = styled.div`
    width: 100vw;
    height: 7vh;
    display: flex;
    justify-content: space-between;

    a{
        color: #fff;
        font-family: Poppins;
        font-size: 1.5rem;
        margin: 1rem 1rem;

        &:hover{
        color: aquamarine;
        }

        @media (max-width: 650px){
            font-size: 1rem;
        }

        @media (max-width: 450px){
            margin: 1rem 0.5rem;
        }
    }
`