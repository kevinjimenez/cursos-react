import React from "react";
import {Product} from '../Product/Product'
import {ProductoInterface} from "../../utils/interfaces/producto.interface";

// @ts-ignore
function Products({products}) {
    console.log(products)
    return(
        <div>
            {products.map((producto: any)=>(
                <Product key={producto.id} product={producto}/>
            ))}
        </div>
    )
}

export {Products}
