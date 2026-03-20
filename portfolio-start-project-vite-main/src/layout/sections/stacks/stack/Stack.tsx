import {Icon} from "../../../../componets/icon/Icon.tsx";
import {S} from "../Stack_Styles.ts";

type StackPropsType = {
    iconId: string
    width?: string
    height?: string
}

export const Stack = (props:StackPropsType) => {
    return (
        <S.Stack>
            <Icon iconId={props.iconId}
                  width={props.width || "50"}
                  height={props.height || "50"}>
            </Icon>
        </S.Stack>
    );
};

