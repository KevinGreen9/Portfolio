import styled from "styled-components";
import {theme} from "../../../styles/Theme.tsx";
import {FlexWrapper} from "../../../componets/FlexWrapper.tsx";
import {font} from "../../../styles/Common.tsx";

//main
const Main = styled.section`
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

//text
const Text = styled.p`
    ${font({family: " 'Poppins', sans-serif", weight: 700, Fmax: 58, Fmin: 48})}
    line-height: 121%;
    letter-spacing: -0.02em;
    color: #d9d9d9;
    text-align: left;
`

const Name = styled.span`
    background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    white-space: nowrap;
`

const Tittle = styled(Text)`
`

const Wrapper = styled.div`

    @media ${theme.media.tabletLarge} {
        padding-right: 150px;

    }

    @media ${theme.media.tablet} {
        padding-right: 50px;
        ${Tittle} {
            white-space: nowrap;
        }
    }
    @media ${theme.media.mobile} {
        padding: 0;
        ${Tittle} {
            white-space: wrap;
        }
    }
`

//photo
const Frame1 = styled.img`
    position: absolute;
    top: -90px;
    left: -25%;
    z-index: 1;
`

const Frame2 = styled.img`
    position: absolute;
    top: -120px;
    left: -35%;
    z-index: 2;

`

const Frame3 = styled.img`
    position: absolute;
    top: -135px;
    left: -36%;
    z-index: 2;
`

const Frame4 = styled.img`
    position: absolute;
    top: -130px;
    left: -35%;
    z-index: 2;
`

const Frame5 = styled.img`
    position: absolute;
    top: -95px;
    left: -25%;
    z-index: 2;
`

const Photo = styled.img`
    width: 349px;
    height: 349px;
    object-fit: cover;

`


const PhotoWrapper = styled.div`
    position: relative;
    max-width: 628px;
    height: auto;

    @media ${theme.media.tabletLarge} {
        padding: 75px 350px 0;
        ${Frame1},
        ${Frame2},
        ${Frame3},
        ${Frame4},
        ${Frame5} {
            display: none;
        }

    }

    @media ${theme.media.tablet} {
        padding: 50px 250px 0;
    }
    @media ${theme.media.mobile} {
        padding: 25px 0;
        margin-top: 30px;
    }
`


export const S = {
    Main,
    Text,
    Name,
    Tittle,
    Wrapper,
    Frame1,
    Frame2,
    Frame3,
    Frame4,
    Frame5,
    Photo,
    PhotoWrapper,

}