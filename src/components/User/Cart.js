import React, { useContext, useEffect, useState, useRef } from 'react';
import Footer from '../Footer';
import Carousel from './Carousel';
import { Link } from 'react-router-dom';
import cartContext from '../../context/products/cartContext';
import CartTr from './CartTr';

const Cart = () => {

    const context = useContext(cartContext);
    const { cartItems, getCartItems, updateCartItem, deleteItem } = context

    useEffect(() => {
        if (localStorage.getItem('token')){
            getCartItems()
        } 
    }, [])

    return (
        <>
            <div className="not-main">
                <Carousel />
            </div>
            <div className="contact-main rounded">
                <div className="container bg-white p-4">
                    <h1 className="text-center text-Red">
                        YOUR CART
                    </h1>
                    <div className="cart-table">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">PRODUCT NAME</th>
                                    <th scope="col">UNIT PRICE</th>
                                    <th scope="col">QUANTITY</th>
                                    <th scope="col">SUBTOTAL</th>
                                    <th scope="col" className='text-center'>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartItems.map((cartItem, i) => {
                                        return <CartTr key={cartItem._id} index={i} cartItem={cartItem} updateCartItem={updateCartItem} deleteItem={deleteItem} />
                                    })
                                }
                            </tbody>
                            <tfoot>
                                
                            </tfoot>
                        </table>
                    </div>

                    <div className="text-end py-5">
                        <Link to="/checkout">
                            <button className="btn bg-Red text-white">PROCEED TO CHECKOUT</button>
                        </Link>
                    </div>

                </div>
                <Footer />
            </div>
        </>
    )
};

export default Cart;
