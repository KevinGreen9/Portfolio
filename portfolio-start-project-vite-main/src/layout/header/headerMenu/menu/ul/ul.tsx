import {S} from "../../HeaderMenu_Styles.ts"

type UlPropsType = {
    className?: string;
}

const ulItems = [
    { id: 1, title: 'Home', href: '#home' },
    { id: 2, title: 'About', href: '#about' },
    { id: 3, title: 'Tech Stack', href: '#stack' },
    { id: 4, title: 'Projects', href: '#projects' },
    { id: 5, title: 'Contact', href: '#contact' }
];

export const Ul = ({className}: UlPropsType) => {
    return (
        <S.Ul className={className}>
            {ulItems.map((item) => (
                <li key={item.id}>
                    <S.UlLink href={item.href}>{item.title}</S.UlLink>
                </li>
            ))}
        </S.Ul>
    );
};

