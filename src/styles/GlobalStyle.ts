import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0px;
        box-sizing: border-box;
        font-family: Poppins, sans-serif;
        text-decoration: none;
    }

    html, body{
        width: 100vw;
        height: 100%;
        background-color: #000;
    }
    
`