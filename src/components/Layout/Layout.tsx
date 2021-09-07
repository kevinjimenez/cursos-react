import React from "react";
import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";

function Layout({children}: any) {
    return(
        <>
            <Header/>
            <h1>Layout</h1>
            {children}
            <Footer/>
        </>
    )
}

export {Layout}
