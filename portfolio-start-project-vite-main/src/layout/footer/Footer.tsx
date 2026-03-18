import {Contact} from "./contact/Contact.tsx";
import {NavFooter} from "./navfooter/NavFooter.tsx";
import {Line} from "./Line.tsx";
import {Container} from "../../componets/Container.tsx";
import styled from "styled-components";

export const Footer = () => {
    return (
        <FooterStyled>
            <Container>
                <Contact/>
                <Line/>
                <NavFooter/>
            </Container>
        </FooterStyled>

    );
};

const FooterStyled= styled.footer`
    display: flex;
    flex-direction: column;
    gap: 45px;
`
