import {FlexWrapper} from "../../../componets/FlexWrapper.tsx";
import {MainBlock} from "./MainBlock.tsx";
import {Container} from "../../../componets/Container.tsx";
import {Photo} from "./Photo.tsx";
import React from "react";
import {S} from "./Main_Styles.ts"


export const Main: React.FC = () => {
    return (
        <S.Main id={'about'}>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap-reverse"}>
                    <MainBlock/>
                    <Photo/>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};






