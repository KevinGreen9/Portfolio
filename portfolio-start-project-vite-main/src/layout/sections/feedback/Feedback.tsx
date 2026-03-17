import styled from "styled-components";
import {Container} from "../../../componets/Container.tsx";
import {theme} from "../../../styles/Theme.tsx";


export const Feedback = () => {
    return (
        <Container>
            <FeedbackStyled>
                <Text>For any questions please mail me:</Text>
                <Mail href={"#"}>hi@pavanmg.in</Mail>
            </FeedbackStyled>
        </Container>

    );
};


const FeedbackStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
    padding: 80px 0 205px;
`


const Text = styled.p`
    font-weight: 700;
    font-size: 48px;
    line-height: 70px;
    letter-spacing: -0.02em;
    text-align: center;
    color: ${theme.colors.secondFont};

`
const Mail = styled.a`
    font-weight: 700;
    font-size: 48px;
    line-height: 1.2069;
    letter-spacing: -0.02em;
    text-align: center;
    background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    
    &:hover{
        text-decoration: underline;
    }

    &:active {
        transform: translateY(2px);
`