import React from 'react'
import "./Weathertiles.css"

export default function WeatherTiles(props) {
    return (
        <div className="card tile" >
            <img className="tile-image" src={props.data.img} alt={props.data.title}/>
            <p className="tile-title">{props.data.title}</p>
            <p className="tile-value">{props.data.value}</p>
        </div>
    )
}
