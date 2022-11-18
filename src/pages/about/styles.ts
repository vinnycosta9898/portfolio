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
    }
`