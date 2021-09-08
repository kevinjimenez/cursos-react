import React, {useContext} from "react";
import {AppContext} from "../../context/AppContext";

function Checkout(props: any) {

    // @ts-ignore
    const {state, removeToCart} = useContext(AppContext)
    const {cart} = state

    const handleRemove = (product: any) => () => {
        removeToCart(product)
    }

    const handleSumTotal = () => {
        console.log('entre')
        const reducer = (acumulador: number, currentValue: any) => {
            console.log(acumulador, currentValue)
            return acumulador + currentValue.price
        }
        const sum = cart.reduce(reducer, 0);
        console.log(sum)
        return sum;
    }

    const handleClick = () => {
        props.history.push('/checkout/information');
    }

    return (
        <>
            <div className="row">

                {cart.length > 0 ?
                    <div className="col-sm-6">

                        <h3>Listar pedido</h3>
                        {cart.map((item: any) => (
                            <div className="row text-center" key={item.id}>
                                <div className="col-sm-3">
                                    <h4>{item.title}</h4>
                                </div>
                                <div className="col-sm-3">
                                    <span>
                                $ {item.price}
                            </span>
                                </div>
                                <div className="col-sm-3"/>
                                <div className="col-sm-3">
                                    <span className="badge bg-primary" onClick={handleRemove(item)}>Eliminar</span>
                                </div>
                            </div>
                        ))}
                    </div> :
                    <div className="col-sm-6">
                        <h3>Sin pedidos</h3>
                    </div>
                }
                {cart.length > 0 &&
                <div className="col-sm-6 text-center">
                    <h3>Precio total: $ {handleSumTotal()}</h3>
                    <div className="d-grid gap-2">
                        <button className='btn btn-outline-success' onClick={handleClick}>
                            Continuar pedido
                        </button>
                    </div>
                </div>
                }
            </div>
        </>
    )
}

export {Checkout}
