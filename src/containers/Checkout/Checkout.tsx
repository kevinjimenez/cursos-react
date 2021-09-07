import React from "react";

function Checkout(props: any) {

    const handleClick = () => {
        props.history.push('/checkout/information');
    }

    return (
        <>
            <div className="row">
                <div className="col-sm-6">
                    <h3>Listar pedido</h3>
                    <div className="row text-center">
                        <div className="col-sm-3">
                            <h4>Item name</h4>
                        </div>
                        <div className="col-sm-3">
                                    <span>
                                $10
                            </span>
                        </div>
                        <div className="col-sm-3"/>
                        <div className="col-sm-3">
                            <span className="badge bg-primary">Eliminar</span>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 text-center">
                    <h3>Precio total: $ 10</h3>
                    <div className="d-grid gap-2">
                        <button className='btn btn-outline-success' onClick={handleClick}>
                            Continuar pedido
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export {Checkout}
