import {Icon} from "../../../../componets/icon/Icon.tsx";
import styled from "styled-components";

type StackPropsType = {
    iconId: string
    width?: string
    height?: string
}

export const Stack = (props:StackPropsType) => {
    return (
        <StyledStack>
            <Icon iconId={props.iconId}
                  width={props.width || "50"}
                  height={props.height || "50"}>
            </Icon>
        </StyledStack>
    );
};

const StyledStack = styled.div`
    width: 130px;
    height: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
`