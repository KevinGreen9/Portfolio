import styled from "styled-components";
import {StyledLink} from "./StyledLink.tsx";
import {theme} from "../../../../styles/Theme.tsx";

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
    height: 567px;
    width: 100%;
    box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.2);
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
    line-height: 0.92857;
    color: ${theme.colors.secondFont};
    padding: 25px 30px 0;
    text-align: left;
`

const Text = styled.p`
    font-weight: 300;
    font-size: 18px;
    line-height: 1.44444;
    color: ${theme.colors.secondFont};
    padding: 17px 30px 0;
    text-align: left;
`

const Stack = styled.span`
    display: block;
    line-height: 1.625;
    color: #ccc;
    font-weight: 300;
    font-size: 14px;
    padding: 12px 30px 0;
    text-align: left;

    span {
        font-weight: 400;
        font-size: 16px;
    }
`

const LinksWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 48px;
    padding: 21px 30px 0;
    
    
    
`
