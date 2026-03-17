import {Icon} from "../../../componets/icon/Icon"
import styled from "styled-components";
import {theme} from "../../../styles/Theme.tsx";
import {Ol} from "../../../componets/menu/ol/ol.tsx";
import {FlexWrapper} from "../../../componets/FlexWrapper.tsx";

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
    font-weight: 400;
    font-size: 18px;
    line-height: 1.44444;
    color: ${theme.colors.secondFont};
    cursor: pointer;
`
const Mail = styled.a`
    font-weight: 400;
    font-size: 18px;
    line-height: 1.44444;
    color: ${theme.colors.secondFont};
    padding-right: 15px;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }

    &:active {
        transform: translateY(2px);
    }
`

const ContactWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 33px;
`