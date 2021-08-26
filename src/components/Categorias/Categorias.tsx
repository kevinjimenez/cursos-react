import React from "react";
import './Categorias.scss'

function Categorias({children}: any) {
    return(
        <div className='categories'>
            <h3 className='categories_title'>
                Mi lista
            </h3>
            {children}
        </div>
    )
}

export {Categorias}
