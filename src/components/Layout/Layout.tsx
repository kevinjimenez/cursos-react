import React from "react";
import './Layout.scss'
import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";

function Layout({children}: any) {
    return (
        <div className='App'>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}

export {Layout}
