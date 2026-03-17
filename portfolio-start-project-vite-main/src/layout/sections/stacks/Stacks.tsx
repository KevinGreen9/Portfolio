import styled from "styled-components";
import {SectionTitle} from "../../../componets/SectionTitle.tsx";
import {Stack} from "./stack/Stack.tsx";
import {Container} from "../../../componets/Container.tsx";
import {theme} from "../../../styles/Theme.tsx";

export const Stacks = () => {
    return (
       <StacksSkills>
           <Container>
               <SectionTitle>
                   <h2> My Tech Stack</h2>
                   <h3> Technologies I’ve been working with recently</h3>
               </SectionTitle>
               <GridWrapper>
                   <Stack iconId={"html"} width={"120"} height={"120"}/>
                   <Stack iconId={"css"} width={"120"} height={"119"}/>
                   <Stack iconId={"js"} width={"120"} height={"120"}/>
                   <Stack iconId={"react"} width={"113"} height={"101"}/>
                   <Stack iconId={"redux"} width={"105"} height={"100"}/>
                   <Stack iconId={"bootstrap"} width={"88"} height={"87"}/>
                   <Stack iconId={"tailwind"} width={"130"} height={"130"}/>
                   <Stack iconId={"sass"} width={"117"} height={"87"}/>
                   <Stack iconId={"git" } width={"105"} height={"105"}/>
                   <Stack iconId={"greensock"} width={"120"} height={"120"}/>
                   <Stack iconId={"vscode"} width={"112"} height={"112"}/>
                   <Stack iconId={"github"} width={"88"} height={"88"}/>
               </GridWrapper>
           </Container>

       </StacksSkills>
    );
};


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