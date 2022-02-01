import React, { useContext, useEffect, useState } from 'react';
import orderContext from '../../context/products/orderContext';
import productContext from '../../context/products/productContext';
import cartContext from '../../context/products/cartContext';
import '../../Stylesheets/Order.css'
import OrderTr from './OrderTr';

const Orders = () => {
    const contextOrder = useContext(orderContext);
    const { orders, getOrders, updateOrder } = contextOrder
    useEffect(() => {
        getOrders()
    }, [])

    const context = useContext(productContext);
    const { products, getProduct } = context
    useEffect(() => {
        getProduct()
    }, [])

    const context2 = useContext(cartContext);
    const { cartItems, getCartItems } = context2

    useEffect(() => {
        if (localStorage.getItem('token')){
            getCartItems()
        } 
    }, [])

    const allUsers = JSON.parse(localStorage.getItem("allUsers") || "[]");

    return (
        <>
            <div className="container">
                <div className="">
                    <h1 className='pt-2 pb-4 text-center text-Red'>ORDERS</h1>
                    <div className="row g-0">
                        {
                            orders.map((order, i) => {
                                return <OrderTr key={order._id} index={i} order={order} user_id={order.user} allUsers={allUsers} products={products} updateOrder={updateOrder} cartItems={cartItems} />
                            })
                        }
                    </div>
                </div>

            </div>
        </>
    )
}

export default Orders
