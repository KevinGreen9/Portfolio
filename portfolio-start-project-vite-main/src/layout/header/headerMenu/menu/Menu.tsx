import {S} from "../HeaderMenu_Styles.ts"
import {Ul} from "./ul/ul";
import {Ol} from "./ol/ol";

import React from "react";

export const Menu: React.FC = () => {
    return (
        <S.StyledMenu>
            <Ul/>
            <Ol/>
        </S.StyledMenu>
    )
};

