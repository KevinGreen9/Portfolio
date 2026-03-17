import {Icon} from "../../icon/Icon"
import styled from "styled-components";
import {theme} from "../../../styles/Theme.tsx";

export const Ol = () => {
    return (
        <OlStyle>
            <li>
                <Link href="">
                    <Icon iconId={"git-header"} width={"30"} height={"30"}/>
                </Link>
            </li>
            <li>
                <Link href="">
                    <Icon iconId={"twitter"} width={"30"} height={"30"}/>
                </Link>
            </li>
            <li>
                <Link href="">
                    <Icon iconId={"linkedin"} width={"30"} height={"30"}/>
                </Link>
            </li>
        </OlStyle>
    );
};


const OlStyle = styled.ol`
    display: flex;
    gap: 21px;

    @media ${theme.media.tabletLarge} {
        gap: 10px
    }

    @media ${theme.media.mobile} {
        display: block;
    }



`
const Link = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 0;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    &:hover {
        transform: translateY(-5px) scale(1.1);
        filter: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.1));
    }

    &:active {
        transform: translateY(-2px) scale(1.05);
        filter: drop-shadow(0 5px 4px rgba(0, 0, 0, 0.1));
    }`