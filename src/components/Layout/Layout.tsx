import React from "react";
import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";

function Layout({children}: any) {
    return (
        <>
            <Header/>
            <div className='container'>
                {children}
            </div>
            <Footer/>
        </>
    )
}

export {Layout}
