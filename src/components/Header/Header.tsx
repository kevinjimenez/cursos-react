import React from "react";
import './Header.scss'
import logo from '../../assets/static/logo-platzi-video-BW2.png'
import userIcon from '../../assets/static/user-icon.png'
import {
    Link
} from "react-router-dom";
import {connect} from "react-redux";
import {Gravatar} from "../../utils/gravatar";
import {logoutRequest} from "../../actions/actions";

function Header(props: any) {

    const {user} = props;
    const hasUser = Object.keys(user).length > 0;

    const handlerLogout = () => {
        // reiniciar estado
        props.logoutRequest({})
    }

    return (
        <header className="header">
            <Link to='/'>
                <img
                    className="header__img"
                    src={logo}
                    alt="Platzi Video"
                />
            </Link>
            <div className="header__menu">
                <div className="header__menu--profile">
                    {
                        hasUser ?
                            <img src={Gravatar(props.user.email)} alt=""/>
                            :
                            <img src={userIcon} alt=""/>
                    }
                    <p>Perfil</p>
                </div>
                <ul>

                    {
                        hasUser ?
                            <li>
                                <a href="/">{user.name}</a>
                            </li>
                            : null
                    }

                    {
                        hasUser ?
                            <li>
                                <a href='#logout' onClick={handlerLogout}>Cerrar Sesion</a>
                            </li>
                            :
                            <li>
                                <Link to="/login">Iniciar Sesion</Link>
                            </li>
                    }

                </ul>
            </div>
        </header>
    )
}

const mapStateToProps = (state: any) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    logoutRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
