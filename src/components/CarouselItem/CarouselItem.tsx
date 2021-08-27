import React from "react";
import './CarouselItem.scss'
import playIcon from '../../assets/static/play-icon.png'
import plusIcon from '../../assets/static/plus-icon.png'

function CarouselItem({name, url, img}: any) {
    return (
        <div className="carousel-item">
            <img className="carousel-item__img"
                 src={img}
                 alt=""/>
            <div className="carousel-item__details">
                <div>
                    <img className="carousel-item__details--img" src={playIcon} alt="Play Icon"/>
                    <img className="carousel-item__details--img" src={plusIcon} alt="Plus Icon"/>
                </div>
                <p className="carousel-item__details--title">{name}</p>
                <p className="carousel-item__details--subtitle">Mas informacion:
                    <a href={url}>Aqui</a>
                </p>
            </div>
        </div>
    )
}

export {CarouselItem}
