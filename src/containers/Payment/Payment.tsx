import React from "react";
import {AppContext} from "../../context/AppContext";

function Payment() {

    // @ts-ignore
    const {state} = React.useContext(AppContext)
    const {cart} = state;


    return (
        <>
            <div className="row">
                <div className="col-sm-12">
                    <h3>Resumen pago</h3>
                    {cart.map((item: any)=>(
                        <div key={item.id}>
                            {item.title} {item.price}
                        </div>
                    ))}
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <h3>Boton pago paypal</h3>
                </div>
            </div>
        </>
    )
}

export {Payment}
