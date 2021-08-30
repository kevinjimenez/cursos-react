import React from "react";
import './Register.scss'
import {
    Link
} from "react-router-dom";
import {connect} from "react-redux";
import {registerRequest} from "../../actions/actions";
import Header from "../Header/Header";

function Register(props: any) {
    const [form, setForm] = React.useState({
        email: '',
        name: '',
        password: ''
    })

    const handlerInput = (event: any) => {
        setForm(
            {
                ...form,
                [event.target.name]: event.target.value
            }
        )
    }

    const handlerSubmit = (event: any) => {
        event.preventDefault();
        console.log(form)
        props.registerRequest(form)
        props.history.push('/')
    }

    return (
        <>
            <Header isRegister/>
            <section className="register">
                <section className="register__container">
                    <h2>Regístrate</h2>
                    <form className="register__container--form" onSubmit={handlerSubmit}>
                        <input
                            name="name"
                            className="input"
                            type="text"
                            placeholder="Nombre"
                            onChange={handlerInput}
                        />
                        <input
                            name="email"
                            className="input"
                            type="text"
                            placeholder="Correo"
                            onChange={handlerInput}
                        />
                        <input
                            name="password"
                            className="input"
                            type="password"
                            placeholder="Contraseña"
                            onChange={handlerInput}
                        />
                        <button className="button">Registrarme</button>
                    </form>
                    <Link to="/login">
                        Iniciar sesión
                    </Link>
                </section>
            </section>
        </>
    )
}

const mapDispatchToProps = {
    registerRequest
}

export default connect(null, mapDispatchToProps)(Register)
