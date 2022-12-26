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

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
    margin-top: 25px;

    h1{
        background: -webkit-linear-gradient(45deg, rgb(0, 188, 212), rgb(0, 255, 149) 80%);
        color: black;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-family: Great Vibes;
        font-size: 64px;
    }

    h3{
        color: #d7995b;
        font-family: Poppins;
        font-size: 32px;
    }

    @media (max-width: 730px){
        h1{
            font-size: 48px;
        }

        h3{
            font-size: 24px;
        }
    }

    @media (max-width: 430px){
        h1{
            font-size: 32px;
        }

        h3{
            font-size: 16px;
        }
    }

    @media (max-width: 280px){
        h1{
            font-size: 24px;
        }

        h3{
            font-size: 12px;
        }
    }
`

export const FooterContainer = styled.div`
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 25px;
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 120px;
    background-color: #313131;
    border: 3px solid #000;
    border-radius: 16px;
    margin: 16px 8px;

    cursor: pointer;

    @media (max-width: 730px){
        width: 96px;
        height: 96px;
    }

    img{
        width: 60%;
        height: 65%;

        @media (max-width: 730px){
            width: 60%;
            height: 60%;
        }
    }

    &:hover{
        border-color: aquamarine;
        transform: scale(1.2);
    }

    strong{
        color: #fff;
        font-size: 20px;
        font-family: Poppins;

        @media (max-width: 730px){
            font-size: 16px;
        }

        @media (max-width: 430px){
            font-size: 14px;
        }
    }
`