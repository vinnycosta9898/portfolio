import styled from 'styled-components'

export const Container = styled.div`
    max-width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
`

export const Avatar = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    margin-top: 25px;

    @media (max-width: 730px){
        width: 250px;
        height: 250px;
    }

    @media (max-width: 430px){
        width: 200px;
        height: 200px;
    }
`

export const ProfileDescription = styled.div`
    display: flex;
    justify-content: center;
    
    h3{
        font-family: Poppins;
        font-size: 24px;
        margin-top: 25px;
        text-align: center;
        width: 90%;
        
        background: -webkit-linear-gradient(45deg, rgb(0, 188, 212), rgb(0, 255, 149) 80%);
        color: black;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        @media (max-width: 730px){
            font-size: 20px;
        }

        @media (max-width: 430px){
            font-size: 15px;
        }
    }
`