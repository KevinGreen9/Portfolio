import {font} from "../styles/Common.tsx";
import styled from "styled-components";
import {theme} from "../styles/Theme.tsx";

 export const SectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  
  
  
  h2{
   ${font({weight: 700, Fmax: 48, Fmin: 42 })}
   line-height: 1.2;
   text-align: center;
   color: ${theme.colors.secondFont};
  }
   
   h3{
    ${font({ Fmax: 32, Fmin: 25})}
    line-height: 1.4;
    text-align: center;
    color: ${theme.colors.firstFont};
   }

     @media ${theme.media.tabletLarge}{
         gap: 35px
     }

     @media ${theme.media.tablet}{
         gap: 25px
     }
     
     @media ${theme.media.mobile} {
         gap: 20px
     }

`