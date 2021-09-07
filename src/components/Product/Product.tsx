import React from "react";

function Product({product}: any) {
    return (
        <>
            <div className="row">
                <div className="col-sm-12">
                    <img src={product.image} alt={product.title} style={{maxWidth: '15rem', maxHeight: '10rem'}}/>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <h2>
                        {product.title}
                        <span>
                        $ {' '} {product.price}
                    </span>
                    </h2>
                    <div className="row">
                        <div className="col-sm-12">
                            <p>
                                {product.description}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="d-grid gap-2">
                        <button className='btn btn-outline-info'>
                            Compara
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export {Product}
