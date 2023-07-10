import React from "react";
import {StyledMenu, Icon, MainIcon} from "./styledMenu"
import history from "../../img/history.png"
import discount from "../../img/discount.png"
import plus from "../../img/plus.png"
import heart from "../../img/heart.png"
import cart from "../../img/cart.png"

function Menu() {
    return(
        <>
            <StyledMenu>
                <Icon src={history}/>
                <Icon src={discount}/>
                <MainIcon src={plus}/>
                <Icon src={heart}/>
                <Icon src={cart}/>
            </StyledMenu>
        </>
    )
}

export default Menu