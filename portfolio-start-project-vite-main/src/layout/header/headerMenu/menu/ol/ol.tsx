import {Icon} from "../../../../../componets/icon/Icon";
import {S} from "../../HeaderMenu_Styles.ts"

export const Ol = () => {
    return (
        <S.Ol>
            <li>
                <S.OlLink href="">
                    <Icon iconId={"git-header"} width={"30"} height={"30"}/>
                </S.OlLink>
            </li>
            <li>
                <S.OlLink href="">
                    <Icon iconId={"twitter"} width={"30"} height={"30"}/>
                </S.OlLink>
            </li>
            <li>
                <S.OlLink href="">
                    <Icon iconId={"linkedin"} width={"30"} height={"30"}/>
                </S.OlLink>
            </li>
        </S.Ol>
    );
};

