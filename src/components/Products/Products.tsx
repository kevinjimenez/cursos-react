import React from "react";
import {Product} from '../Product/Product'
// import {ProductoInterface} from "../../utils/interfaces/producto.interface";
import {AppContext} from "../../context/AppContext";

// @ts-ignore
function Products() {

    // @ts-ignore
    const {state, addToCart} = React.useContext(AppContext);
    const {products} = state;

    const handleAddToCart = (product: any) => ()=>{
        addToCart(product)
    }

    return (
        <>
            {products.map((producto: any) => (
                <div className='col-sm-4' key={producto.id}>
                    <Product key={producto.id} product={producto} handleAddToCart={handleAddToCart}/>
                </div>
            ))
            }
        </>
    )
}

export {Products}
