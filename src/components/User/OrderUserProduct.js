import React from 'react';

const OrderUserProduct = (props) => {
    const {products, product} = props

    let product_details = {}

    products.forEach(element => {
        if (element._id == product){
            product_details.name = element.name
            product_details.price = element.price
        }
    });
    return (
        <>
            <div className='d-flex justify-content-between pb-2'>
                <h4>{product_details.name}</h4>
                <h4>{product_details.price}</h4>
            </div>
        </>
    );
};

export default OrderUserProduct;
