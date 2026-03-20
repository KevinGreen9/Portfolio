import {S} from "../../HeaderMenu_Styles.ts"

type UlPropsType = {
    className?: string;
}


export const Ul = ({className}: UlPropsType) => {
    return (
        <S.Ul className={className}>
            <li>
                <S.UlLink href="">Home</S.UlLink>
            </li>
            <li>
                <S.UlLink href="">About</S.UlLink>
            </li>
            <li>
                <S.UlLink href="">Tech Stack</S.UlLink>
            </li>
            <li>
                <S.UlLink href="">Projects</S.UlLink>
            </li>
            <li>
                <S.UlLink href="">Contact</S.UlLink>
            </li>
        </S.Ul>
    );
};

