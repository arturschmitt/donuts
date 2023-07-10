import React from "react";
import {NavStyled, LiStyled} from "./styledNav"
import nav_icon from "../../img/nav.png"

function Nav(){
    return(
        <>
            <NavStyled>
                <LiStyled>Donuts</LiStyled>
                <LiStyled>Ice Cream</LiStyled>
                <LiStyled>Bomboloni</LiStyled>
                <LiStyled><img src={nav_icon}/></LiStyled>
            </NavStyled>
        </>
    )
}

export default Nav