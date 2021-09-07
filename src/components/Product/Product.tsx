import React from "react";

function Product({product}: any) {
    console.log(product)
    return(
        <div>
            <img src={product.image} alt={product.title}/>
            <div>
                <h2>
                    {product.title}
                    <span>
                        $ {' '} {product.price}
                    </span>
                </h2>
                <p>
                    {product.description}
                </p>
            </div>
            <button className='btn btn-outline-info'>
                Compara
            </button>
        </div>
    )
}

export {Product}
