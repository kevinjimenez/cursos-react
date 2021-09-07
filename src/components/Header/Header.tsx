import React from "react";
import {Link} from 'react-router-dom'

function Header() {
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
                            <a >
                                Checkout
                            </a>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export {Header}
