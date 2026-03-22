import {Ul} from "../menu/ul/ul";
import {Ol} from "../menu/ol/ol";
import {S} from "../HeaderMenu_Styles.ts";
import React, {useState} from "react";


export const MobileMenu: React.FC = () => {
    const [menuIsOpen, setmenuIsOpen] =  useState(false)
    const onBurgerBtnClick = () => { setmenuIsOpen( !menuIsOpen ) }

    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={menuIsOpen} onClick={ onBurgerBtnClick }>
                <span></span>
            </S.BurgerButton>
            <S.MobileWrapper isOpen={menuIsOpen} onClick={ ()=> { setmenuIsOpen( false )} }>
                <Ul/>
                <Ol/>
            </S.MobileWrapper>
        </S.MobileMenu>
    )
};

