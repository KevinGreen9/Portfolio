import {Contact} from "./contact/Contact.tsx";
import {NavFooter} from "./navfooter/NavFooter.tsx";
import {Line} from "./Line.tsx";
import {Container} from "../../componets/Container.tsx";
import {S} from "./Footer_Styles.ts"


export const Footer = () => {
    return (
        <S.Footer>
            <Container>
                <Contact/>
                <Line/>
                <NavFooter/>
            </Container>
        </S.Footer>

    );
};

