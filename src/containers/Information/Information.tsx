import React from "react";

function Information() {
    return (
        <>
            <div className="row">
                <div className="col-sm-6 text-center">
                    <h2>Informacion de contacto</h2>
                    <form action="">
                        <input type="text" className="form-control" placeholder='Nombre completo' name='name'/>
                        <input type="email" className="form-control" placeholder='Correo electronico' name='email'/>
                        <input type="text" className="form-control" placeholder='Direccion' name='address'/>
                        <input type="text" className="form-control" placeholder='Apto' name='apto'/>
                        <input type="text" className="form-control" placeholder='Ciudad' name='city'/>
                        <input type="text" className="form-control" placeholder='Pais' name='country'/>
                        <input type="text" className="form-control" placeholder='Estado' name='state'/>
                        <input type="text" className="form-control" placeholder='Codigo postal' name='cp'/>
                        <input type="text" className="form-control" placeholder='Telefono' name='phone'/>
                    </form>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="d-grid gap-2">
                                <button className='btn btn-outline-info'>Regresar</button>
                            </div>
                        </div>
                        <div className="col-sm-4"/>
                        <div className="col-sm-4">
                            <div className="d-grid gap-2">
                                <button className='btn btn-outline-info'>Pagar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <h3>Pedido</h3>
                    <div className="row">
                        <div className="col-sm-4">
                            <h4>Item name</h4>
                        </div>
                        <div className="col-sm-4"/>
                        <div className="col-sm-4">
                            <span>$ 10</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export {Information}
