import {theme} from "../../../styles/Theme.tsx";
import styled from "styled-components";

//stacks
const StacksSkills = styled.section`

`

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 50px 70px;
    margin-top: 140px;
    justify-items: center;
    align-items: center;

    @media ${theme.media.tabletLarge} {
        grid-template-columns: repeat(4, 1fr);
        gap: 40px 50px;
        margin-top: 100px;
    }

    @media ${theme.media.tablet} {
        grid-template-columns: repeat(3, 1fr);
        gap: 30px 40px;
        margin-top: 80px;
    }

    @media ${theme.media.mobile} {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px 30px;
        margin-top: 60px;
    }

`
//stack
const Stack = styled.div`
    width: 130px;
    height: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
`



export const S = {
    StacksSkills,
    GridWrapper,
    Stack
}