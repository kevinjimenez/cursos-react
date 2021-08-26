import React from "react";
import './Register.scss'
import {
    Link
} from "react-router-dom";

function Register() {
    return(
        <section className="register">
            <section className="register__container">
                <h2>Regístrate</h2>
                <form className="register__container--form">
                    <input
                        name="name"
                        className="input"
                        type="text"
                        placeholder="Nombre"
                    />
                    <input
                        name="email"
                        className="input"
                        type="text"
                        placeholder="Correo"
                    />
                    <input
                        name="password"
                        className="input"
                        type="password"
                        placeholder="Contraseña"
                    />
                    <button className="button">Registrarme</button>
                </form>
                <Link to="/login">
                    Iniciar sesión
                </Link>
            </section>
        </section>
    )
}

export {Register}
