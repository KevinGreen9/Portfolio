import styled from "styled-components";
import {font} from "../../../styles/Common.tsx";
import {theme} from "../../../styles/Theme.tsx";

 export const MainBlock = () => {
    return (
        <MainWrapper>
            <SmallText>Hi 👋,
                <br/>
                My name is
                <br/>
                <Name>Pavan MG</Name>
            </SmallText>
            <MainTittle> I build things for web</MainTittle>
        </MainWrapper>
    );
 };



 const SmallText = styled.p`
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

 const MainTittle = styled(SmallText)`
`

const MainWrapper = styled.div`
 
  @media ${theme.media.tabletLarge}{
        padding-right:  150px;
        
    }
    
    @media ${theme.media.tablet} {
        padding-right: 50px;
       ${MainTittle}{
           white-space: nowrap;
       }
    }
    @media ${theme.media.mobile}{
        padding: 0;
        ${MainTittle}{
            white-space: wrap;
        }
    }
 
 `
