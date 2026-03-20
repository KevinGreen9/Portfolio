import {S} from "./Stack_Styles.ts"
import {SectionTitle} from "../../../componets/SectionTitle.tsx";
import {Stack} from "./stack/Stack.tsx";
import {Container} from "../../../componets/Container.tsx";

const stackData = [
    {
        iconId: "html",
        width: 120,
        height: 120
    },
    {
        iconId: "css",
        width: 120,
        height: 119
    },
    {
        iconId: "js",
        width: 120,
        height: 120
    },
    {
        iconId: "react",
        width: 113,
        height: 101
    },
    {
        iconId: "redux",
        width: 105,
        height: 100
    },
    {
        iconId: "bootstrap",
        width: 88,
        height: 87
    },
    {
        iconId: "tailwind",
        width: 130,
        height: 130
    },
    {
        iconId: "sass",
        width: 117,
        height: 87
    },
    {
        iconId: "git",
        width: 105,
        height: 105
    },
    {
        iconId: "greensock",
        width: 120,
        height: 120
    },
    {
        iconId: "vscode",
        width: 112,
        height: 112
    },

    {
        iconId: "github",
        width: 88,
        height: 88
    }
]

export const Stacks = () => {
    return (
        <S.StacksSkills>
            <Container>
                <SectionTitle>
                    <h2> My Tech Stack</h2>
                    <h3> Technologies I’ve been working with recently</h3>
                </SectionTitle>
                <S.GridWrapper>
                    {stackData.map((s, index) => {
                        return <Stack iconId={s.iconId} key={index}
                                        width= {String(s.width)}
                                        height={String(s.height)}/>
                    })}
                </S.GridWrapper>
            </Container>
        </S.StacksSkills>
    );
};


