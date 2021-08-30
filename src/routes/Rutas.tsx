import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import App from "../App";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import {NotFound} from "../components/NotFound/NotFound";
import {Layout} from "../components/Layout/Layout";
import Player from "../components/Player/Player";

function Rutas() {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path='/' component={App}/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/register' component={Register}/>
                    <Route exact path='/player/:id' component={Player}/>
                    <Route component={NotFound}/>
                </Switch>
            </Layout>
        </Router>
    )
}

export {Rutas}
