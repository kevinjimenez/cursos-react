import React from "react";
import {DATOS_PRUEBA} from "../../utils/constantes/datos-prueba";
import {Products} from "../../components/Products/Products";

const productos = DATOS_PRUEBA;

function Home() {
    const productoos = productos.products as any[];
    // console.log(products)
    return (
        <div>
            <Products products={productoos}/>
        </div>
    )
}

export {Home}
