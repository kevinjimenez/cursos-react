import React from "react";
import './Categorias.scss'

function Categorias({children, title}: any) {
    return(
        <div>
            <h3 className='categories__title'>
                {title}
            </h3>
            {children}
        </div>
    )
}

export {Categorias}
