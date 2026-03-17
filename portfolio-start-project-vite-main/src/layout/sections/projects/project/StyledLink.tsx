import {Icon} from "../../../../componets/icon/Icon.tsx";
import styled from "styled-components";


type LinksPropsType = {
    iconId: string
    width?: string
    height?: string
    text?: string
}

export const StyledLink = (props: LinksPropsType) => {
    return (
        <Wrapper>
            <Link href="">
                <Icon iconId={props.iconId}
                      width={props.width || "20"}
                      height={props.height || "20"}>
                </Icon>
            </Link>
            <Link href="">{props.text}</Link>
        </Wrapper>

    );
};

const Wrapper = styled.div`
display: flex;
    gap: 10px;

    &:hover {
        transform: translateY(-2px);
    }

    &:active {
        transform: translateY(2px);
    }
`


const Link = styled.a`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.625;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: #fff;
    display: flex;
    align-items: center;

   
`
