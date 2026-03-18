import styled from "styled-components";
import {Container} from "../../../componets/Container.tsx";
import {theme} from "../../../styles/Theme.tsx";
import {font} from "../../../styles/Common.tsx";


export const Feedback = () => {
    return (
        <FeedbackSection>
        <Container>
            <FeedbackStyled>
                <Text>For any questions please <span>mail me:</span></Text>
                <Mail href={"#"}>hi@pavanmg.in</Mail>
            </FeedbackStyled>
        </Container>
        </FeedbackSection>
    );
};

const FeedbackSection = styled.section`
    width: 100%;
    padding: 0;
`

const FeedbackStyled = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 9px;
    padding: 80px 0 205px;
    
    @media ${theme.media.tabletLarge}{
        padding: 60px 0 170px;
    }

    @media ${theme.media.tablet}{
        max-width: 650px;
        padding: 40px 0 120px;
        margin: 0 auto;
    }

    @media ${theme.media.mobile}{
        max-width: 575px;
        padding: 30px 0 100px;
    }
`


const Text = styled.p`
    ${font({weight:700, Fmax:48, Fmin:38})};
    letter-spacing: -0.02em;
    text-align: center;
    color: ${theme.colors.secondFont};
    
    span{
        white-space: nowrap;
    }

    @media ${theme.media.tabletLarge}{
      
    }

`

const Mail = styled.a`

    ${font({weight:700,  Fmax:48, Fmin:38})};
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