import React from 'react';
import ProductContext from './productContext';

const ProductState = (props) => {
    const state = {
        name: "Nvidia 1060 3gb",
        price: 10000,
        category: "graphics card",
        discount: null
    }
    return(
        <ProductContext.Provider value={state}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductState