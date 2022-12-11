import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0px;
        box-sizing: border-box;
        text-decoration: none;
    }

    body, html{
        width: 100vw;
        height: 100%;
        background-color: #000;
    }
    
`