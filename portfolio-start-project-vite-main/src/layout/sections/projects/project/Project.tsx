import {StyledLink} from "./StyledLink.tsx";
import {S} from "../Project_Styles.ts"


type ProjectPropsType = {
    title: string
    text: string
    src: string
    span: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <S.Project>
            <S.Img src={props.src} alt=""/>
            <S.Title>{props.title}</S.Title>
            <S.Text>{props.text}</S.Text>
            <S.Stack>
                <span>Tech stack : </span>
                {props.span}
            </S.Stack>
            <S.LinksWrapper>
                <StyledLink iconId={"chain"} width={"20"} height={"20"} text={"Live Preview"}/>
                <StyledLink iconId={"github-little"} width={"20"} height={"20"} text={"View Code"}/>
            </S.LinksWrapper>
        </S.Project>
    );
};



