import {Icon} from "../../../componets/icon/Icon"
import styled from "styled-components";
import {theme} from "../../../styles/Theme.tsx";
import {Ol} from "../../../componets/menu/ol/ol.tsx";
import {FlexWrapper} from "../../../componets/FlexWrapper.tsx";
import {font} from "../../../styles/Common.tsx";

export const Contact = () => {
    return (
        <FlexWrapper justify={"space-between"}>
            <a href="">
                <Icon iconId={"logo-footer"} width={"97"} height={"59"}/>
            </a>
            <ContactWrapper>
                <Info> +91 12345 09876</Info>
                <Mail>info@example.com</Mail>
                <Ol/>
            </ContactWrapper>
        </FlexWrapper>

    )
};

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