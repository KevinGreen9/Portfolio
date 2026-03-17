import styled from "styled-components";
import {SectionTitle} from "../../../componets/SectionTitle.tsx";
import {Project} from "./project/Project.tsx";
import img1 from "../../../../src/assets/images/img/imgOne.webp";
import img2 from "../../../../src/assets/images/img/imgTwo.webp";
import img3 from "../../../../src/assets/images/img/imgThree.webp";
import img4 from "../../../../src/assets/images/img/imgFour.webp";
import img5 from "../../../../src/assets/images/img/imgFive.webp";
import img6 from "../../../../src/assets/images/img/imgSix.webp";
import {FlexWrapper} from "../../../componets/FlexWrapper.tsx";
import {Container} from "../../../componets/Container.tsx";


export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <SectionTitle>
                    <h2>Projects</h2>
                    <h3>Things I’ve built so far</h3>
                </SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"center"} align={"center"} gap={"45px 30px"} >
                    <Project src={img1} title={"Project Tile goes here"}
                             text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                             span={"HTML , JavaScript, SASS, React"}
                    />
                    <Project src={img2} title={"Project Tile goes here"}
                             text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                             span={"HTML , JavaScript, SASS, React"}
                    />
                    <Project src={img3} title={"Project Tile goes here"}
                             text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                             span={"HTML , JavaScript, SASS, React"}
                    />
                    <Project src={img4} title={"Project Tile goes here"}
                             text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                             span={"HTML , JavaScript, SASS, React"}
                    />
                    <Project src={img5} title={"Project Tile goes here"}
                             text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                             span={"HTML , JavaScript, SASS, React"}
                    />
                    <Project src={img6} title={"Project Tile goes here"}
                             text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                             span={"HTML , JavaScript, SASS, React"}
                    />
                </FlexWrapper>
            </Container>


        </StyledProjects>
    );
};


const StyledProjects = styled.section`
    display: flex;
    flex-direction: column;

     ${FlexWrapper} {
        margin-top: 115px;


`