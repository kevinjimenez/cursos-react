import React from "react";

function Checkout() {
    return (
        <>
            <div className="row">
                <div className="col-sm-6">
                    <h3>Listar pedido</h3>
                    <div className="row text-center">
                        <div className="col-sm-6">
                            <h4>Item name</h4>
                            <span>
                                $10
                            </span>
                        </div>
                        <div className="col-sm-6">
                            <span className="badge bg-primary">Eliminar</span>
                            {/*<button className='btn btn-outline-danger'>Eliminar</button>*/}
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 text-center">
                    <h3>Precio total: $ 10</h3>
                    <div className="d-grid gap-2">
                        <button className='btn btn-outline-success'>
                            Continuar pedido
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export {Checkout}
