import styled from "styled-components";
import {FlexWrapper} from "../../../componets/FlexWrapper.tsx";
import {MainBlock} from "./MainBlock.tsx";
import {Container} from "../../../componets/Container.tsx";
import {Photo} from "./Photo.tsx";
import {theme} from "../../../styles/Theme.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap-reverse"}>
                    <MainBlock/>
                    <Photo/>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};


const StyledMain = styled.section`
    min-height: 100vh;
    display: flex;

    @media ${theme.media.tabletLarge} {
        ${FlexWrapper} {
            align-items: flex-start;
            justify-content: center;
            gap: 20px;
        }
    }

`



