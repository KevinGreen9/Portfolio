import styled from "styled-components";
import {FlexWrapper} from "../../../componets/FlexWrapper.tsx";
import {SectionTitle} from "../../../componets/SectionTitle.tsx";
import {Stack} from "./stack/Stack.tsx";
import {Container} from "../../../componets/Container.tsx";


export const Stacks = () => {
    return (
       <StacksSkills>
           <Container>
               <SectionTitle>
                   <h2> My Tech Stack</h2>
                   <h3> Technologies I’ve been working with recently</h3>
               </SectionTitle>
               <FlexWrapper wrap={"wrap"} gap={"80px 100px"} align={"center"} justify={"center"}>
                   <Stack iconId={"html"} width={"120"} height={"120"}/>
                   <Stack iconId={"css"} width={"120"} height={"119"}/>
                   <Stack iconId={"js"} width={"120"} height={"120"}/>
                   <Stack iconId={"react"} width={"113"} height={"101"}/>
                   <Stack iconId={"redux"} width={"105"} height={"100"}/>
                   <Stack iconId={"bootstrap"} width={"88"} height={"87"}/>
                   <Stack iconId={"tailwind"} width={"131"} height={"131"}/>
                   <Stack iconId={"sass"} width={"117"} height={"87"}/>
                   <Stack iconId={"git" } width={"105"} height={"105"}/>
                   <Stack iconId={"greensock"} width={"120"} height={"120"}/>
                   <Stack iconId={"vscode"} width={"112"} height={"112"}/>
                   <Stack iconId={"github"} width={"88"} height={"88"}/>
               </FlexWrapper>
           </Container>

       </StacksSkills>
    );
};


const StacksSkills = styled.section`



    ${FlexWrapper} {
        margin-top: 140px;  // расстояние между SectionTitle и FlexWrapper
    }
`