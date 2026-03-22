import {theme} from "../../../styles/Theme";
import styled, {css} from "styled-components";

//Desktop menu
const StyledMenu = styled.nav`
    display: flex;
    flex-direction: row;
    gap: 51px;

    @media ${theme.media.tabletLarge} {
        gap: 30px
    }
`
//ul
const Ul = styled.ul`
    display: flex;
    gap: 54px;

    @media ${theme.media.tabletLarge} {
        gap: 25px;

        li:nth-child(3) a{
            white-space: nowrap;
        }
    }

    @media ${theme.media.mobile} {
        display: block;
        
    }
`

const UlLink = styled.a`
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

    //&:active {
    //    transform: translateY(-2px) scale(1.05);
    //    filter: drop-shadow(0 5px 4px rgba(0, 0, 0, 0.1));
    //}
}
`
//ol
const Ol = styled.ol`
    display: flex;
    gap: 21px;

    @media ${theme.media.tabletLarge} {
        gap: 10px
    }

    @media ${theme.media.mobile} {
        //display: block;
    }
`

const OlLink = styled.a`
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
    }
`

//mobileMenu
const MobileMenu = styled.nav`
    
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    top: 50px;
    right: 50px;
    width: 60px;
    height: 60px;
    z-index: 999999;


    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.firstFont};
        position: absolute;
        left: 40px;
        bottom: 50px;


        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
        `}
        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.firstFont};
            position: absolute;
            transform: translateY(-10px);
            transition: all 0.3s ease;

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(0);
            `}

        }

        &::after {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.firstFont};
            position: absolute;
            transform: translateY(10px);
            transition: all 0.3s ease;

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0);
                width: 36px;
            `}
        }
    }
`


const MobileWrapper = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(8px);
    z-index: 99999;
    display: none;
    overflow: hidden;
    transition: all 1s ease;
    

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 50px;
    `}
    ${"Ul"} {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

`


export const S = {
    StyledMenu,
    Ul,
    UlLink,
    Ol,
    OlLink,
    MobileMenu,
    BurgerButton,
    MobileWrapper,

}