import React, { useContext, useEffect, useState } from 'react';
import Footer from '../Footer';
import Carousel from './Carousel';
import '../../Stylesheets/Order.css'
import productContext from '../../context/products/productContext';
import orderContext from '../../context/products/orderContext';
import cartContext from '../../context/products/cartContext';
import OrderUserTr from './OrderUserTr';

const Orderuser = () => {
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

    const allUsers = JSON.parse(localStorage.getItem("allUsers") || "[]");

    const userDetails = JSON.parse(localStorage.getItem("userDetails"))

    return (
        <>
            <div className="not-main">
                <Carousel />
            </div>
            <div className="contact-main Rounded">
                <div className="container bg-white p-4 Rounded">
                    <h1 className="text-center text-Red mb-5 mt-3">
                        MY ORDERS
                    </h1>
                    <div className="row g-0">
                        {
                            orders.map((order, i) => {
                                console.log(order.user, userDetails._id)
                                if ( order.user ==  userDetails._id){
                                    return <OrderUserTr order={order} products={products}/>
                                }
                            })
                        }
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
};

export default Orderuser;
