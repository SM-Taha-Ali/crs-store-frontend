import React from 'react';

const CheckoutTr = (props) => {

    const {cartItem, index} = props

    return (
        <div className="row g-0 my-2">
            <div className="col-md-2">{index+1}</div>
            <div className="col-md-4">{cartItem.name}</div>
            <div className="col-md-2">QTY: {cartItem.quantity}</div>
            <div className="col-md-4 text-end">{cartItem.price*cartItem.quantity} Rs</div>
        </div>
    );
};

export default CheckoutTr;
