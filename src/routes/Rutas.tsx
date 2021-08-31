import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Menu} from "../components/Menu";
import "bootstrap/dist/css/bootstrap.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Personajes from "../components/Personajes/Personajes";
import {Tareas} from "../components/Tareas/Tareas";
import Publicaciones from "../components/Publicaciones/Publicaciones";

function Rutas() {
    return(
        <BrowserRouter>
            <Menu/>
            <Switch>
                <Route exact path='/' component={Personajes}/>
                <Route exact path='/tareas' component={Tareas}/>
                <Route exact path='/publicaciones/:id' component={Publicaciones}/>
            </Switch>
        </BrowserRouter>
    )
}

export {Rutas}
