import React from "react";
import './Search.scss'

function Search() {
    return (
        <section className="main">
            <button type='button' className='btn btn-danger'>
                hahah
            </button>
            <h2 className="main__title">¿Qué quieres ver hoy?</h2>
            <input type="text" className="input" placeholder="Buscar..."/>
        </section>
    )
}

export {Search}
