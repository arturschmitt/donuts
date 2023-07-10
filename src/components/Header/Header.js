import React from "react";
import menu_icon from "../../img/menu.png"
import search_icon from "../../img/search.png"
import {HeaderStyled, IconStyled} from "./styledHeader"


function Header () {
    return(
        <>
            <HeaderStyled>
                <IconStyled src={menu_icon}/>
                <IconStyled src={search_icon}/>
            </HeaderStyled>
        </>
    )
}

export default Header;