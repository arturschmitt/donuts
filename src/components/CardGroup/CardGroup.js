import React from "react";
import Card from "../Card/Card"
import {StyledCardGroup} from "./styledCardGroup"

function CardGroup () {
    return (
        <>
            <StyledCardGroup>
                <Card title="Donut1" desc="Chocolate cobertura de morango" price="7800"/>
                <Card title="Donut2" desc="Baunilha com cobertura de chocolate" price="5800"/>
                <Card title="Donut3" desc="Baunilha com cobertura de morango" price="6000"/>
                <Card title="Donut3" desc="Baunilha com cobertura de morango" price="6000"/>
            </StyledCardGroup>
        </>
    )
}

export default CardGroup