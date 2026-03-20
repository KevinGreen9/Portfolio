import {Icon} from "../../../../componets/icon/Icon.tsx";
import {S} from "../Project_Styles.ts"

type LinksPropsType = {
    iconId: string
    width?: string
    height?: string
    text?: string
}

export const StyledLink = (props: LinksPropsType) => {
    return (
        <S.Wrapper>
            <S.Link href="">
                <Icon iconId={props.iconId}
                      width={props.width || "20"}
                      height={props.height || "20"}>
                </Icon>
            </S.Link>
            <S.Link href="">{props.text}</S.Link>
        </S.Wrapper>

    );
};


