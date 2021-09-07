import React from "react";

function Information() {
    return (
        <>
            <div className="row">
                <div className="col-sm-6">
                    <h2>Informacion de contacto</h2>
                    <div className="row">
                        <div className="col-sm-6">
                            <form action="">
                                <input type="text" placeholder='Nombre completo' name='name'/>
                                <input type="email" placeholder='Correo electronico' name='email'/>
                                <input type="text" placeholder='Direccion' name='address'/>
                                <input type="text" placeholder='Apto' name='apto'/>
                                <input type="text" placeholder='Ciudad' name='city'/>
                                <input type="text" placeholder='Pais' name='country'/>
                                <input type="text" placeholder='Estado' name='state'/>
                                <input type="text" placeholder='Codigo postal' name='cp'/>
                                <input type="text" placeholder='Telefono' name='phone'/>
                            </form>
                        </div>
                        <div className="col-sm-6">
                            <button className='btn btn-outline-info'>Regresar</button>
                            <button className='btn btn-outline-info'>Pagar</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <h3>Pedido</h3>
                    <h4>Item name</h4>
                    <span>$ 10</span>
                </div>
            </div>
        </>
    )
}

export {Information}
