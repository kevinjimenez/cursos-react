import React from "react";
import './Carousel.scss'

function Carousel({children}: any) {
    return(
        <section className="carousel">
            <div className="carousel__container">
                {children}
            </div>
        </section>
    )
}

export {Carousel}
