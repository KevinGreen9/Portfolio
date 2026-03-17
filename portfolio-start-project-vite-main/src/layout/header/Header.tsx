import styled from "styled-components";
import {Logo} from "../../componets/logo/Logo.tsx";
import {Menu} from "../../componets/menu/Menu.tsx";
import {Container} from "../../componets/Container.tsx";
import {FlexWrapper} from "../../componets/FlexWrapper.tsx";
import {theme} from "../../styles/Theme.tsx";
import {MobileMenu} from "./mobileMenu/MobileMenu.tsx";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    <Menu/>
                    <MobileMenu/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: ${theme.colors.primaryBg};
    display: flex;
    flex-direction: row;
    padding-top: 41px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    
`