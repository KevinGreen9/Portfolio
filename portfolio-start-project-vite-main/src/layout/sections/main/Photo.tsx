import photo from "../../../assets/images/img.svg";
import styled from "styled-components";
import ram1 from "../../../assets/images/ramki/Rectangle 22.png"
import ram2 from "../../../assets/images/ramki/Rectangle 21.png"
import ram3 from "../../../assets/images/ramki/Rectangle 20.png"
import ram4 from "../../../assets/images/ramki/Rectangle 19.png"
import ram5 from "../../../assets/images/ramki/Rectangle 17.png"
import {theme} from "../../../styles/Theme.tsx";

export const Photo = () => {
    return (
        <PhotoWrapper>
            <PhotoStyled src={photo} alt="pavan"/>
            <Frame1 src={ram1} alt=""/>
            <Frame2 src={ram2} alt=""/>
            <Frame3 src={ram3} alt=""/>
            <Frame4 src={ram4} alt=""/>
            <Frame5 src={ram5} alt=""/>
        </PhotoWrapper>
    );
};




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

const PhotoStyled = styled.img`
    width: 349px;
    height: 349px;
    object-fit: cover;
    
`


const PhotoWrapper = styled.div`
    position: relative;
    max-width: 628px;
    height: auto;

    @media ${theme.media.tabletLarge}{
        padding: 75px 350px 0;
        ${Frame1},
        ${Frame2},
        ${Frame3},
        ${Frame4},
        ${Frame5}{
            display: none;
        }
        
    }
    
    @media ${theme.media.tablet} {
        padding: 50px 250px 0;
    }
    @media ${theme.media.mobile}{
        padding: 25px 0;
    }
`



