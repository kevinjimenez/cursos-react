import React from "react";
import {DATOS_PRUEBA} from "../utils/constantes/datos-prueba";
const datosPrueba = DATOS_PRUEBA
function useInitialState() {
    const [state, setState] = React.useState(datosPrueba);

    const addToCart = (producto: any) =>{
        setState({
            ...state,
            // @ts-ignore
            cart: [...state.cart, producto],
        })
    }

    const removeToCart = (producto: any) =>{
        setState({
            ...state,
            // @ts-ignore
            cart: state.cart.filter(item => item.id !== producto.id),
        })
    }

    const addToBuyer = (buyer: any) => {
        setState({
            ...state,
            // @ts-ignore
            buyer: [...state.buyer, buyer]
        })
    }

    return {
        addToCart,
        removeToCart,
        addToBuyer,
        state
    }
}

export {useInitialState}
