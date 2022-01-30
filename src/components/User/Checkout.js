import '../../Stylesheets/Checkout.css'
import React, { useContext, useEffect, useState } from 'react';
import Footer from '../Footer';
import cartContext from '../../context/products/cartContext';
import CheckoutTr from './CheckoutTr';

const Checkout = () => {
    const context = useContext(cartContext);
    const { cartItems, getCartItems } = context
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getCartItems()
        }
    }, [])

    const [cashOnline, setcashOnline] = useState(true);

    const Pay_with_Card = () => {
        setcashOnline(false)
    }
    const cash_on_delievery = () => {
        setcashOnline(true)
    }

    const calculateTotal = () => {
        let initialprice = 0;
        cartItems.forEach(element => {
            initialprice += (element.price * element.quantity)
        });
        return initialprice
    }

    return (
        <>
            <div className="container bg-white p-4 mt-4">
                <div className="row g-0">
                    <div className="col-md-8 px-2">
                        <h1 className='py-3 bg-dark text-white px-3 m-0 p-0'>1. SHIPPING</h1>
                        <div className="bg-gray m-0 p-3">
                            <div className="bg-white p-3 bor-radius">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Country</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">City</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Postal Code</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Contact</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <h1 className='py-3 bg-dark text-white px-3 m-0 p-0'>2. BILLING INFO</h1>
                        <div className="bg-gray m-0 p-3">
                            <div className="bg-white p-3 bor-radius">
                                <form>
                                    <div className="mb-5">
                                        <h3 className='mt-2 mb-4 text-Red text-center'>SELECT PAYMENT METHOD</h3>
                                    </div>
                                    <div className="mb-3 d-flex flex-row justify-content-around w-100">
                                        <div className='d-flex flex-row justify-content-between'>
                                            <div className='me-1'>
                                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="Pay_with_Card" onClick={(e) => { Pay_with_Card(e); }} />
                                            </div>
                                            <div>
                                                <label htmlFor="Pay_with_Card" className="form-label">Pay with Card</label>
                                            </div>
                                        </div>

                                        <div className='d-flex flex-row justify-content-evenly'>
                                            <div className='me-1'>
                                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="Cash_on_Delievery" onClick={(e) => { cash_on_delievery(e); }} />
                                            </div>
                                            <div>
                                                <label htmlFor="Cash_on_Delievery" className="form-label">Cash on Delievery</label>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <form className='mt-4'>
                                    <div className="row g-0">
                                        <div className="col-md-6 px-2 pe-3">
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputPassword1" className="form-label">Owner</label>
                                                <input type="password" className="form-control" id="exampleInputPassword1" disabled={cashOnline} />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputPassword1" className="form-label">Expire Date</label>
                                                <input type="date" className="form-control" id="exampleInputPassword1" disabled={cashOnline} />
                                            </div>

                                        </div>
                                        <div className="col-md-6 px-2 ps-3">
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputPassword1" className="form-label">Card Number</label>
                                                <input type="password" className="form-control" id="exampleInputPassword1" disabled={cashOnline} />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputPassword1" className="form-label">CCV</label>
                                                <input type="password" className="form-control" id="exampleInputPassword1" disabled={cashOnline} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-end pt-3 pb-2">
                                        <button className="btn bg-Red text-white mx-1">CONFIRM PURCHASE</button>
                                    </div>

                                </form>


                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 px-2">
                        <h1 className='py-3 bg-gray text-dark px-3 m-0 p-0'>SUMMARY</h1>
                        <div className="px-2 mt-4">
                            <h3 className='mt-2 mb-4 text-Red'>3 Items in Cart</h3>
                            <hr />
                            <div className="bg-white m-0 p-0">
                                {
                                    cartItems.map((cartItem, i) => {
                                        return <CheckoutTr key={cartItem._id} index={i} cartItem={cartItem} />
                                    })
                                }

                            </div>
                            <hr />
                            <div className='d-flex flex-row justify-content-between'>
                                <p className='fs-3'>Total</p>
                                <p className='fs-3'>{calculateTotal()} Rs</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
};

export default Checkout;
