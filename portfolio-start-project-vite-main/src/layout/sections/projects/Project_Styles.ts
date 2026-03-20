import {theme} from "../../../styles/Theme.tsx";
import styled from "styled-components";
import {font} from "../../../styles/Common.tsx";

//projects
const Projects = styled.section`
    display: flex;
    flex-direction: column;

`

const GridWrapper = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    gap: 65px 50px;
    margin-top: 110px;
    grid-template-columns: repeat(3, 375px);

    @media ${theme.media.tabletLarge} {
        grid-template-columns: repeat(2, 1fr);
        justify-items: center;
        gap: 50px 35px;
        margin-top: 90px;
    }

    @media ${theme.media.tablet} {
        grid-template-columns: repeat(1, 1fr);
        justify-items: center;
        gap: 40px 30px;
        margin-top: 80px;
    }

    @media ${theme.media.mobile} {
        grid-template-columns: repeat(1, 1fr);
        justify-items: center;
        gap: 20px ;
        margin-top: 60px;
    }
`

//project
const Project = styled.div`
    border-radius: 20px;
    max-width: 375px;
    max-height: 567px;
    height: auto;
    width: 100%;
    background: ${theme.colors.secondaryBg};
    overflow: hidden;
    
`

const Img = styled.img`
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
//link
const Wrapper = styled.div`
    display: flex;
    gap: 10px;

    &:hover {
        transform: translateY(-2px);
    }

    &:active {
        transform: translateY(2px);
    }

    @media ${theme.media.mobile}{
        gap: 5px;
    }
`


const Link = styled.a`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.625;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: ${theme.colors.linkFont};
    display: flex;
    align-items: center;

    @media ${theme.media.tablet} {
        ${font({weight: 400, color: theme.colors.secondFont, lineHeight: 1.6, Fmax: 16, Fmin: 15})}
    }

`


export const  S = {
    Projects,
    GridWrapper,
    Project,
    Img,
    Title,
    Text,
    Stack,
    LinksWrapper,
    Wrapper,
    Link
}