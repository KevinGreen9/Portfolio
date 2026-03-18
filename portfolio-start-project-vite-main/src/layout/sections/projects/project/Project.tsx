import styled from "styled-components";
import {StyledLink} from "./StyledLink.tsx";
import {theme} from "../../../../styles/Theme.tsx";
import {font} from "../../../../styles/Common.tsx";

type ProjectPropsType = {
    title: string
    text: string
    src: string
    span: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <StyledImg src={props.src} alt=""/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Stack>
                <span>Tech stack : </span>
                {props.span}
            </Stack>
            <LinksWrapper>
                <StyledLink iconId={"chain"} width={"20"} height={"20"} text={"Live Preview"}/>
                <StyledLink iconId={"github-little"} width={"20"} height={"20"} text={"View Code"}/>
            </LinksWrapper>
        </StyledProject>
    );
};



const StyledProject = styled.div`
    border-radius: 20px;
    max-width: 375px;
    max-height: 567px;
    height: auto;
    width: 100%;
    background: ${theme.colors.secondaryBg};
    overflow: hidden;
    
`

const StyledImg = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;

`


const Title = styled.h3`
     font-weight: 500;
    font-size: 28px;
    line-height: 0.9;
    color: ${theme.colors.secondFont};
    padding: 25px 30px 0;
    text-align: left;
    
    @media ${theme.media.tabletLarge} {
        // ${font({weight: 500, color: theme.colors.secondFont, lineHeight: 0.9, Fmax: 28, Fmin:25})}
        padding: 20px 20px 0;
    }
    
`

const Text = styled.p`
    font-weight: 300;
    font-size: 18px;
    line-height: 1.4;
    color: ${theme.colors.secondFont};
    padding: 17px 30px 0;
    text-align: left;

    @media ${theme.media.tabletLarge} {
        ${font({weight: 300, color: theme.colors.secondFont, lineHeight: 1.4, Fmax: 18, Fmin:15})}
        padding: 15px 20px 0;
    }
    
`

const Stack = styled.span`
    font-weight: 300;
    font-size: 14px;
    display: block;
    line-height: 1.6;
    color: ${theme.colors.secondFont};
    padding: 12px 30px 0;
    text-align: left;

    span {
        font-weight: 400;
        font-size: 16px;
    }

    @media ${theme.media.tabletLarge} {
        ${font({weight: 400,color: theme.colors.secondFont, lineHeight: 1.6, Fmax: 16, Fmin:14})}
        padding: 10px 20px 0;
    }
    
`

const LinksWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 21px 30px 25px;

    @media ${theme.media.tabletLarge} {
        padding: 15px 20px 25px;
    }
    
`
