import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme.tsx";

export const GlobalStyled = createGlobalStyle`
    *,
    *::before,
    *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }
    body {
        margin: 0;
        font-family: "Poppins", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: ${theme.colors.primaryBg}
    }
    
    section{
        padding: 100px 0;

        @media ${theme.media.tabletLarge}{
            padding: 85px 0;
        }
        
        @media ${theme.media.tablet} {
            padding: 80px 0;
        }

        @media ${theme.media.mobile}{
            padding: 60px 0;
        }
    }
    
    a{
        text-decoration: none;
    }
    
    ul,ol{
        list-style: none;
    }
    
    button{
        background-color: unset;
        border: none;
    }
    
    
    
    
    
    
    
`
