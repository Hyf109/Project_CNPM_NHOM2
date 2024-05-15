import React from "react"
import './Card.scss'
import Card from "./Card"

function CardList() {
    return (
        <div className="list-card">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default CardList