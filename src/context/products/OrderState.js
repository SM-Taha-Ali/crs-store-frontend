import React, { useState } from 'react';
import OrderContext from './orderContext';

const ProductState = (props) => {

    const host = "http://localhost:5000"

    const ordersInitial = [ ]
    const [orders, setOrders] = useState(ordersInitial)

    // Get Cart Items

    const getOrders = async () => {
        // TODO API CALL
        const response = await fetch(`${host}/api/orders/getorders`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = await response.json()
        setOrders(json)
    }


    // Place Order

    const placeOrder = async (address, products, city, contact, postal_code, date) => {
        // TODO API CALL
        const response = await fetch(`${host}/api/orders/makeorder`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ address, products, city, contact, postal_code, date})
        });
        const order = await response.json();
        setOrders(orders.concat(order))
        return order._id
    }

    //  Update Quantity

    const updateOrder = async (id, status) => {
        const response = await fetch(`${host}/api/orders/updateorder/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status })
        });

        // Logic to edit in client side

        let newOrders = JSON.parse(JSON.stringify(orders))

        for (let index = 0; index < newOrders.length; index++) {
            const element = orders[index];
            if (element._id == id) {
                newOrders[index].status = status;
                break;
            }
        }
        setOrders(newOrders);
    }

    // Delete item

    const deleteOrder = async (id) => {
        const response = await fetch(`${host}/api/orders/deleteorder/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const newOrders = orders.filter((order) => { return order._id !== id })
        setOrders(newOrders)
    }

    return (
        <OrderContext.Provider value={{ orders, getOrders, updateOrder, deleteOrder, placeOrder }}>
            {props.children}
        </OrderContext.Provider>
    )
}

export default ProductState