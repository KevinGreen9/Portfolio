import {Logo} from "../../componets/logo/Logo";
import {Menu} from "./headerMenu/menu/Menu";
import {Container} from "../../componets/Container";
import {FlexWrapper} from "../../componets/FlexWrapper";
import {S} from "./Header_Styles"
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";
import React from "react";

export const Header: React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);


    return (
        <S.Header >
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    {width < breakpoint ?  <MobileMenu/> : <Menu/>}
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};

