import {Icon} from "../../../componets/icon/Icon"
import {Ol} from "../../header/headerMenu/menu/ol/ol.tsx";
import {FlexWrapper} from "../../../componets/FlexWrapper.tsx";
import {S} from "../Footer_Styles.ts"


export const Contact = () => {
    return (
        <FlexWrapper justify={"space-between"}>
            <a href="">
                <Icon iconId={"logo-footer"} width={"97"} height={"59"}/>
            </a>
            <S.ContactWrapper>
                <S.Info> +91 12345 09876</S.Info>
                <S.Mail href={'https://workspace.google.com/intl/ru/gmail/'} target="_blank" rel="noopener noreferrer">info@example.com</S.Mail>
                <Ol/>
            </S.ContactWrapper>
        </FlexWrapper>

    )
};

