import React, { useContext, useEffect, useState } from 'react';
import userContext from '../../context/products/userContext';
import OrderProductTr from './OrderProductTr';
import '../../Stylesheets/Order.css'

const OrderTr = (props) => {
    const { index, order, updateOrder, user_id, allUsers, products, cartItems, deleteOrder } = props

    let user_name = ""

    allUsers.forEach(user => {
        if (user._id == user_id) {
            user_name = user.firstname
        }
    });

    useEffect(() => {
        if (order.status == 1) {
            setActive({ packed: 'active', shipping: '', delivered: '' })
        }
        if (order.status == 2) {
            setActive({ packed: '', shipping: 'active', delivered: '' })
        }
        if (order.status == 3) {
            setActive({ packed: '', shipping: '', delivered: 'active' })
        }
    }, []);


    const [orderStatus, setOrderStatus] = useState({ status: order.status });
    console.log(orderStatus)

    const onChange = (e) => {
        setOrderStatus({ ...orderStatus, [e.target.name]: e.target.value })
        console.log(orderStatus)
    }

    const [active, setActive] = useState({ packed: '', shipping: '', delivered: '' });

    const activeFire = (e) => {
        if (e.target.value == 1) {
            setActive({ packed: 'active', shipping: '', delivered: '' })
            updateOrder(order._id, e.target.value)
        }
        if (e.target.value == 2) {
            setActive({ packed: '', shipping: 'active', delivered: '' })
            updateOrder(order._id, e.target.value)
        }
        if (e.target.value == 3) {
            setActive({ packed: '', shipping: '', delivered: 'active' })
            updateOrder(order._id, e.target.value)
        }
        if (e.target.value == 4) {
            deleteOrder(order._id)
        }
        if (e.target.value == 5) {
            deleteOrder(order._id)
        }
    }

    return <div className="col-lg-4 col-md-12 px-3">
        <div className="order-card shadow pb-3">
            <div className="order-header d-flex justify-content-between">
                <p className='fw-bold fs-4 text-Red'>{user_name}</p>
                <p className='fw-bold fs-4 text-Red'>Order #{index + 1}</p>
            </div>
            <div className="order-card-body position-relative">
                <div className="text-center text-Red fs-4 fw-bold mb-3">
                    Products
                </div>
                {
                    order.products.map((product, i) => {
                        return <OrderProductTr key={i} products={products} product={product} cartItems={cartItems} />
                    })
                }
                <hr />
                <div className="order-status my-4">
                    <p className="form-label text-Red fs-4 fw-bold text-center d-block mb-3">Set Order Status</p>
                    <div className="orderStatusWrapper position-relative">
                        <div className='orderStatusBar'>
                            <li className={`packed ${active.packed}`} onClick={(e) => activeFire(e)} value={1}>Packed</li>
                            <li className={`shipping ${active.shipping}`} onClick={(e) => activeFire(e)} value={2}>Shipped</li>
                            <li className={`delivered ${active.delivered}`} onClick={(e) => activeFire(e)} value={3}>Delievered</li>
                        </div>
                    </div>
                </div>
                <div className='d-flex flex-row justify-content-between w-100 pt-4'>
                    <div>
                        <button className='btn Order_Status_Btn Wrong mx-2' onClick={(e) => activeFire(e)} value={4}><i className="fal fa-times text-Red"></i></button>
                    </div>
                    <div className=''>
                        <button className='btn Order_Status_Btn Check mx-2' onClick={(e) => activeFire(e)} value={5}><i className="far fa-check text-success"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
};

export default OrderTr;
