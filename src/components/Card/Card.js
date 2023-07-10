import React from "react";
import {StyledCard, CardTitle, CardDescription, CardPrice, Image} from "./styledCard"
import donut from "../../img/donut1.png"

function Card(props){
    return(
        <>
            <StyledCard>
                <Image src={donut}/>
                <CardTitle>{props.title}</CardTitle>
                <CardDescription>{props.desc}</CardDescription>
                <CardPrice>{props.price}</CardPrice>
            </StyledCard>
        </>
    )
}

export default Card