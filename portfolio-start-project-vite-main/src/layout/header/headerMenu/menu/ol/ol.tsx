import {Icon} from "../../../../../componets/icon/Icon";
import {S} from "../../HeaderMenu_Styles.ts"


const socialLinks = [
    { id: 1, iconId: "git-header", href: "https://github.com/yourusername" },
    { id: 2, iconId: "twitter", href: "https://twitter.com/yourusername" },
    { id: 3, iconId: "linkedin", href: "https://linkedin.com/in/yourusername" }
];

export const Ol = () => {
    return (
        <S.Ol>
            {socialLinks.map((l) => (
                <li key={l.id}>
                    <S.OlLink href={l.href} target="_blank" rel="noopener noreferrer">
                        <Icon iconId={l.iconId} width={"30"} height={"30"}/>
                    </S.OlLink>
                </li>
            ))}
        </S.Ol>
    );
};

