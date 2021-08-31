import React from "react";
import {Link} from 'react-router-dom'

function Menu() {
    return (
        <div className='row'>
            <div className="col-sm-12">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to='/' className="nav-link active"
                                          aria-current="page"
                                          href="#">
                                        Personajes
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/tareas' className="nav-link"
                                          href="#">
                                        Tareas
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export {Menu}
