import styled from "styled-components";
import {Ul} from "./ul/ul.tsx";
import {Ol} from "./ol/ol.tsx";
import {theme} from "../../styles/Theme.tsx";

export const Menu = () => {
    return (
        <StyledMenu>
            <Ul/>
            <Ol/>
        </StyledMenu>
    )
};

const StyledMenu = styled.nav`
    display: flex;
    flex-direction: row;
    gap: 51px;

    @media ${theme.media.tabletLarge} {
        gap: 30px
        
    }

    @media ${theme.media.tablet} {
        display: none;
    }
    
`