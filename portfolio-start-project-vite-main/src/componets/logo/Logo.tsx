import { Icon} from "../icon/Icon"
import styled from "styled-components";
import {animateScroll as scroll} from "react-scroll";

export const Logo = () => {
    return (
        <LogoLink onClick={() => {scroll.scrollToTop()}}>
            <Icon iconId={"logo"} width={"97"} height={"59"}/>
        </LogoLink>
    );
 };


const LogoLink = styled.a`
   
`