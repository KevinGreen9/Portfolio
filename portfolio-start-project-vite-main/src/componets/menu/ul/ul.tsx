import styled from "styled-components";
import {theme} from "../../../styles/Theme.tsx";

type UlPropsType = {
    className?: string;
}


export const Ul = ({className}: UlPropsType) => {
    return (
        <UlStyle className={className}>
            <li>
                <Link href="">Home</Link>
            </li>
            <li>
                <Link href="">About</Link>
            </li>
            <li>
                <Link href="">Tech Stack</Link>
            </li>
            <li>
                <Link href="">Projects</Link>
            </li>
            <li>
                <Link href="">Contact</Link>
            </li>
        </UlStyle>
    );
};

const UlStyle = styled.ul`
    display: flex;
    gap: 54px;

    @media ${theme.media.tabletLarge} {
        gap: 25px
    }

    @media ${theme.media.mobile} {
        display: block;
    }


`
const Link = styled.a`
    font-weight: 500;
    font-size: 20px;
    line-height: 1.3;
    text-align: center;
    color: ${theme.colors.firstFont};

    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    &:hover {
        transform: translateY(-5px) scale(1.1);
        filter: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.1));
    }

    &:active {
        transform: translateY(-2px) scale(1.05);
        filter: drop-shadow(0 5px 4px rgba(0, 0, 0, 0.1));
    }


}
`