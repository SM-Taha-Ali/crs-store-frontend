import React from 'react';

const OrderProductTr = (props) => {

    const {products, product, cartItems} = props

    let product_details = {}

    products.forEach(element => {
        if (element._id == product){
            product_details.name = element.name
            product_details.price = element.price
        }
    });

    cartItems.forEach(element => {
        if (element.product == product){
            product_details.quantity = element.quantity
        }
    });


    return <div className="row g-0 pb-3">
        <div className='col-md-6 col-sm-12 fw-bold'>
            {product_details.name}
        </div>
        <div className='col-md-3 col-sm-12 text-end'>
            QTY: {product_details.quantity}
        </div>
        <div className='col-md-3 col-sm-12 text-end'>
            {product_details.price} RS
        </div>
    </div>;
};

export default OrderProductTr;
