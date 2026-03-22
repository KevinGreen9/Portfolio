import {Icon} from "../../../../componets/icon/Icon.tsx";
import {S} from "../Project_Styles.ts"

type LinksPropsType = {
    iconId: string
    width?: string
    height?: string
    text?: string
   href?: string

}

export const StyledLink = (props: LinksPropsType) => {
    return (
        <S.Wrapper>
            <S.Link href={props.href}  target="_blank" rel="noopener noreferrer">
                <Icon iconId={props.iconId}
                      width={props.width || "20"}
                      height={props.height || "20"}>
                </Icon>
            </S.Link>
            <S.Link href={props.href}  target="_blank" rel="noopener noreferrer">
                {props.text}
            </S.Link>
        </S.Wrapper>

    );
};


