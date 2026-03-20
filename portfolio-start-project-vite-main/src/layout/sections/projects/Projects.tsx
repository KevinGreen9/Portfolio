import {SectionTitle} from "../../../componets/SectionTitle.tsx";
import {Project} from "./project/Project.tsx";
import img1 from "../../../../src/assets/images/img/imgOne.webp";
import img2 from "../../../../src/assets/images/img/imgTwo.webp";
import img3 from "../../../../src/assets/images/img/imgThree.webp";
import img4 from "../../../../src/assets/images/img/imgFour.webp";
import img5 from "../../../../src/assets/images/img/imgFive.webp";
import img6 from "../../../../src/assets/images/img/imgSix.webp";
import {Container} from "../../../componets/Container.tsx";
import {S} from "./Project_Styles.ts"

const projectData = [
    {
        src: img1,
        title: "Project Tile goes here",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        span: "HTML , JavaScript, SASS, React"
    },
    {
        src: img2,
        title: "Project Tile goes here",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        span: "HTML , JavaScript, SASS, React"
    },
    {
        src: img3,
        title: "Project Tile goes here",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        span: "HTML , JavaScript, SASS, React"
    },
    {
        src: img4,
        title: "Project Tile goes here",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        span: "HTML , JavaScript, SASS, React"
    },
    {
        src: img5,
        title: "Project Tile goes here",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        span: "HTML , JavaScript, SASS, React"
    },
    {
        src: img6,
        title: "Project Tile goes here",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        span: "HTML , JavaScript, SASS, React"
    }
]

export const Projects = () => {
    return (
        <S.Projects>
            <Container>
                <SectionTitle>
                    <h2>Projects</h2>
                    <h3>Things I’ve built so far</h3>
                </SectionTitle>
                <S.GridWrapper>
                    {projectData.map((p, index) => {
                        return <Project src={p.src} key={index}
                                        title={p.title}
                                        text={p.text}
                                        span={p.span}/>
                    })}
                </S.GridWrapper>
            </Container>
        </S.Projects>
    );
};


