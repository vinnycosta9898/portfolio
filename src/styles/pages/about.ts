import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media (min-width: 1000px){
        overflow: hidden;
    }
`

export const Avatar = styled.img`
    width: 25rem;
    height: 25rem;
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

export const ProfileDescription = styled.div`
    display: flex;
    justify-content: center;
    
    h3{
        font-family: Poppins;
        font-size: 2rem;
        text-align: center;
        width: 90%;
        
        background: -webkit-linear-gradient(45deg, rgb(0, 188, 212), rgb(0, 255, 149) 80%);
        color: black;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        @media (max-width: 730px){
            font-size: 1.5rem;
        }

        @media (max-width: 430px){
            font-size: 1rem;
        }
    }
`