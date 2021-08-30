import React from "react";
import './Search.scss'
import classNames from "classnames";

function Search({isHome}: any) {

    const inputStyle = classNames('input', {
        isHome
    })

    return (
        <section className="main">
            <button type='button' className='btn btn-danger'>
                hahah
            </button>
            <h2 className="main__title">¿Qué quieres ver hoy?</h2>
            <input type="text" className={inputStyle} placeholder="Buscar..."/>
        </section>
    )
}

export {Search}
