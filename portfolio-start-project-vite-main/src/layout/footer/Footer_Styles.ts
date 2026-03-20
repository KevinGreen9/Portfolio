import styled from "styled-components";
import {font} from "../../styles/Common.tsx";
import {theme} from "../..//styles/Theme.tsx";
import {Ul} from "../header/headerMenu/menu/ul/ul.tsx";

//footer
const Footer= styled.footer`
    display: flex;
    flex-direction: column;
    gap: 45px;
`
//contact
const Info = styled.span`
    ${font({weight: 400, lineHeight: 1.4, Fmax: 18, Fmin: 15})}
    color: ${theme.colors.secondFont};
    cursor: pointer;
`
const Mail = styled.a`
    ${font({weight: 400, lineHeight: 1.4, Fmax: 18, Fmin: 15})}
    color: ${theme.colors.secondFont};
    padding-right: 15px;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }

    &:active {
        transform: translateY(2px);
    }

    @media ${theme.media.tablet} {
     padding: 0;
    }

`

const ContactWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 33px;
    
    @media ${theme.media.tablet} {
        gap: 20px;
    }
    @media ${theme.media.mobile} {
        gap: 15px;
       flex-wrap: wrap;
        align-content: center;
     ${"Ol"}{
         display: none;
     }
    }
`

//line
const LineWrapper = styled.div`
 display: flex;
 justify-content: center;
     padding: 45px 0;
     
     
     @media ${theme.media.tabletLarge} {
         display: none;
     }
 `

const Line = styled.img`
    stroke-width: 2px;
    stroke: #42446e;
`

//navfooter
const NavFooterWrapper = styled.div`
display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    @media ${theme.media.tabletLarge} {
        flex-direction: column;
        gap: 15px;
    }
`

const Copyright = styled.p`
    ${font({ lineHeight: 1.4, Fmax: 18, Fmin: 15})}
    text-align: center;
    color: ${theme.colors.secondFont};
    padding-bottom: 60px;

    @media ${theme.media.tabletLarge}{
        padding-bottom: 30px;
    }
    
`

const UlFooter = styled(Ul)`
   & a {
        ${font({ lineHeight: 1.4, Fmax: 18, Fmin: 15})}
        color: ${theme.colors.secondFont};
   }
    @media ${theme.media.tabletLarge}{
        justify-content: space-around;
   }
    @media ${theme.media.mobile}{
        display: grid;
        grid-template-columns: repeat(3, 1fr)

`

const Author = styled.span`
    background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    white-space: nowrap;
`
const Love = styled.span`
    background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const Coffee = styled.span`
    background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`


export const S = {
    Footer,
    Info,
    Mail,
    ContactWrapper,
    LineWrapper,
    Line,
    NavFooterWrapper,
    Copyright,
    UlFooter,
    Author,
    Love,
    Coffee

}