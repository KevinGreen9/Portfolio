import {FlexWrapper} from "../../../componets/FlexWrapper.tsx"
import {Ul} from "../../../componets/menu/ul/ul.tsx";
import styled from "styled-components";
import {theme} from "../../../styles/Theme.tsx";


export const NavFooter = () => {
    return (
        <FlexWrapper justify="space-between">
            <UlFooter/>
            <Copyright>Designed and built by <Author>Pavan MG</Author> with <Love>Love</Love> & <Coffee>Coffee</Coffee></Copyright>
        </FlexWrapper>
    );
};

const Copyright = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 1.44444;
    text-align: center;
    color: ${theme.colors.secondFont};
    padding-bottom: 60px;
`

const UlFooter = styled(Ul)`
    a {
        font-weight: 400;
        font-size: 18px;
        line-height: 144%;
        color: ${theme.colors.secondFont};
    }

`

const Author = styled.span`
    background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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