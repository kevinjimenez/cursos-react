import React from "react";
import {Product} from '../Product/Product'
import {ProductoInterface} from "../../utils/interfaces/producto.interface";

// @ts-ignore
function Products({products}) {
    return(
        <>
            {products.map((producto: any)=>(
                <div className='col-sm-4'>
                    <Product key={producto.id} product={producto}/>
                </div>
            ))}
        </>
    )
}

export {Products}
