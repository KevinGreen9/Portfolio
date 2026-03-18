
import {Ul} from "../../../componets/menu/ul/ul.tsx";
import styled from "styled-components";
import {theme} from "../../../styles/Theme.tsx";
import {font} from "../../../styles/Common.tsx";


export const NavFooter = () => {
    return (
        <NavFooterWrapper>
            <UlFooter/>
            <Copyright>Designed and built by <Author>Pavan MG</Author> with <Love>Love</Love> & <Coffee>Coffee</Coffee></Copyright>
        </NavFooterWrapper>
    );
};


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