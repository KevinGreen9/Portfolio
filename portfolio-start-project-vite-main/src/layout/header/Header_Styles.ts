import styled from "styled-components";
import {theme} from "../../styles/Theme.tsx";

const Header = styled.header`
    background-color: ${theme.colors.primaryBg};
    display: flex;
    flex-direction: row;
    padding-top: 41px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    
`

export const S = {
    Header,
}