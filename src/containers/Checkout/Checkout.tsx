import React from "react";

function Checkout() {
    return (
        <>
            <div className="row">
                <div className="col-sm-6">
                    <h3>Listar pedido</h3>
                    <div>
                        <div>
                            <h4>Item name</h4>
                            <span>
                                $10
                            </span>
                        </div>
                        <button className='btn btn-outline-danger'>Eliminar</button>
                    </div>
                </div>
                <div className="col-sm-6">
                    <h3>Precio total: $ 10</h3>
                    <button className='btn btn-outline-success'>
                        Continuar pedido
                    </button>
                </div>
            </div>
        </>
    )
}

export {Checkout}
