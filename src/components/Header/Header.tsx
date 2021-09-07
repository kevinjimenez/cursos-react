import React, {useContext} from "react";
import {Link} from 'react-router-dom'
import {AppContext} from "../../context/AppContext";

function Header() {

    // @ts-ignore
    const { state } = useContext(AppContext);
    const { cart } = state;
    console.log(cart)

    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24"
                             className="d-inline-block align-text-top"/>
                        Bootstrap
                    </a>
                    <div className="d-flex">
                        <Link to='/checkout'>
                                Checkout
                                {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export {Header}
