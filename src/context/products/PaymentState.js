import React, { useState } from 'react';
import PaymentContext from './paymentContext';

const ProductState = (props) => {

    const host = "http://localhost:5000"

    const paymentInitial = [ ]
    const [payments, setPayment] = useState(paymentInitial)

    // Get Payment Info

    const getPayment = async () => {
        // TODO API CALL
        const response = await fetch(`${host}/api/payment/getpayment`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = await response.json()
        setPayment(json)
    }


    // Place Order

    const makePayment = async (id, owner, card_number, card_expiry, ccv) => {
        // TODO API CALL
        const response = await fetch(`${host}/api/payment/makepayment/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ owner, card_number, card_expiry, ccv })
        });
        const payment = await response.json();
        setPayment(payments.concat(payment))
    }


    return (
        <PaymentContext.Provider value={{ payments, makePayment, getPayment }}>
            {props.children}
        </PaymentContext.Provider>
    )
}

export default ProductState