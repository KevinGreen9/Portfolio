import styled from "styled-components";
import {SectionTitle} from "../../../componets/SectionTitle.tsx";
import {Project} from "./project/Project.tsx";
import img1 from "../../../../src/assets/images/img/imgOne.webp";
import img2 from "../../../../src/assets/images/img/imgTwo.webp";
import img3 from "../../../../src/assets/images/img/imgThree.webp";
import img4 from "../../../../src/assets/images/img/imgFour.webp";
import img5 from "../../../../src/assets/images/img/imgFive.webp";
import img6 from "../../../../src/assets/images/img/imgSix.webp";
import {Container} from "../../../componets/Container.tsx";
import {theme} from "../../../styles/Theme.tsx";


export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <SectionTitle>
                    <h2>Projects</h2>
                    <h3>Things I’ve built so far</h3>
                </SectionTitle>
                <GridWrapper>
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
                </GridWrapper>
            </Container>
        </StyledProjects>
    );
};


const StyledProjects = styled.section`
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