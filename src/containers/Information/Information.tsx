import React from "react";
import {AppContext} from "../../context/AppContext";
import {useHistory} from 'react-router-dom'

function Information(props: any) {

    // @ts-ignore
    const {state, addToBuyer} = React.useContext(AppContext);
    const form = React.useRef(null);
    const {cart} = state;
    const history = useHistory();

    const handleSubmit = ()=>{
        // @ts-ignore
        const formData = new FormData(form.current)
        const buyer = {
            name: formData.get('name'),
            email: formData.get('email'),
            address: formData.get('address'),
            apto: formData.get('apto'),
            city: formData.get('city'),
            country: formData.get('country'),
            state: formData.get('state'),
            cp: formData.get('cp'),
            phone: formData.get('phone'),
        }
        addToBuyer(buyer)
        history.push('/checkout/payment')
    }

    const handleClickPagar = () =>{
        props.history.push('/checkout/payment');
    }

    const handleClickRegresar = () =>{
        props.history.push('/checkout');
    }

    return (
        <>
            <div className="row">
                <div className="col-sm-6 text-center">
                    <h2>Informacion de contacto</h2>
                    <form ref={form}>
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
                                <button className='btn btn-outline-info' onClick={handleClickRegresar}>Regresar</button>
                            </div>
                        </div>
                        <div className="col-sm-4"/>
                        <div className="col-sm-4">
                            <div className="d-grid gap-2">
                                <button className='btn btn-outline-info' onClick={handleSubmit}>Pagar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <h3>Pedido</h3>
                    {cart.map((item: any)=>(
                        <div className="row" key={item.id}>
                            <div className="col-sm-4">
                                <h4>{item.title}</h4>
                            </div>
                            <div className="col-sm-4"/>
                            <div className="col-sm-4">
                                <span>$ {item.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export {Information}
