import '../../Stylesheets/Checkout.css'
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Footer from '../Footer';
import cartContext from '../../context/products/cartContext';
import orderContext from '../../context/products/orderContext';
import paymentContext from '../../context/products/paymentContext';
import CheckoutTr from './CheckoutTr';

const Checkout = () => {

    const navigate = useNavigate();

    const context = useContext(cartContext);
    const { cartItems, getCartItems, emptyCart } = context
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getCartItems()
        }
    }, [])

    const contextOrder = useContext(orderContext);
    const { placeOrder } = contextOrder

    const contextPayment = useContext(paymentContext);
    const { makePayment } = contextPayment

    const contact = JSON.parse(localStorage.getItem('userDetails'))

    const [shipping, setShipping] = useState({ address: "", city: "", contact: contact.phoneno, postal_code: "", currentDateTime: Date().toLocaleString() });
    const [billing, setBilling] = useState({ order_ID: "", owner: "", card_number: "", card_expiry: "", ccv: "" });


    const onChange = (e) => {
        setShipping({ ...shipping, [e.target.name]: e.target.value })
    }

    const onChangeB = (e) => {
        setBilling({ ...billing, [e.target.name]: e.target.value })
    }

    const makeOrder = async (e) => {
        e.preventDefault()
        let productIDS = []
        cartItems.forEach(element => {
            productIDS.push(element.product)
        });
        const order_ID = await placeOrder(shipping.address, productIDS, shipping.city, shipping.contact, shipping.postal_code, shipping.currentDateTime)
        setBilling({ ...billing, order_ID: order_ID })
        makePayment(billing.order_ID, billing.owner, billing.card_number, billing.card_expiry, billing.ccv)
        emptyCart(contact._id)
        navigate("/")
    }

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
                    <div className="col-md-4 px-2">
                        <h1 className='py-3 bg-gray text-dark px-3 m-0 p-0'>SUMMARY</h1>
                        <div className="px-2 mt-4">
                            <div className="d-flex justify-content-between">
                                <h3 className='mt-2 mb-4 text-Red'>{cartItems.length} Items in Cart</h3>
                                <Link className="btn btn-orange" to="/cart"><i className="fas fa-shopping-cart text-white"></i><br />View Cart</Link>
                            </div>
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
                    <div className="col-md-8 px-2">
                        <h1 className='py-3 bg-dark text-white px-3 m-0 p-0'>CHECKOUT</h1>
                        <div className="bg-gray m-0 p-3">
                            <div className="bg-white p-3 bor-radius">
                                <form onSubmit={makeOrder}>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Country</label>
                                        <input type="text" className="form-control" id="country" name='country' aria-describedby="emailHelp" onChange={onChange} required={true} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">City</label>
                                        <input type="text" className="form-control" id="city" name='city' onChange={onChange} required={true} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                                        <input type="text" className="form-control" id="address" name='address' onChange={onChange} required={true} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Postal Code</label>
                                        <input type="text" className="form-control" id="postal_code" name='postal_code' onChange={onChange} required={true} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Contact</label>
                                        <div className="input-group flex-nowrap">
                                            <span className="input-group-text" id="addon-wrapping">+92</span>
                                            <input type="text" className="form-control" id="contact" name='contact' required={true} onChange={onChange} defaultValue={contact.phoneno} />
                                        </div>
                                    </div>
                                    <div className="mb-5">
                                        <h3 className='mt-2 mb-4 text-Red text-center'>SELECT PAYMENT METHOD</h3>
                                    </div>
                                    <div className="mb-3 d-flex flex-row justify-content-around w-100">
                                        <div className='d-flex flex-row justify-content-between'>
                                            <div className='me-1'>
                                                <input className="form-check-input" type="radio" name="paymentMethod" id="Pay_with_Card" onClick={(e) => { Pay_with_Card(e); }} required />
                                            </div>
                                            <div>
                                                <label htmlFor="Pay_with_Card" className="form-label">Pay with Card</label>
                                            </div>
                                        </div>

                                        <div className='d-flex flex-row justify-content-evenly'>
                                            <div className='me-1'>
                                                <input className="form-check-input" type="radio" name="paymentMethod" id="Cash_on_Delievery" onClick={(e) => { cash_on_delievery(e); }} />
                                            </div>
                                            <div>
                                                <label htmlFor="Cash_on_Delievery" className="form-label">Cash on Delievery</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row g-0">
                                        <div className="col-md-6 px-2 pe-3">
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputPassword1" className="form-label">Owner</label>
                                                <input type="text" className="form-control" id="" name='owner' disabled={cashOnline} onChange={onChangeB} required={!cashOnline} />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputPassword1" className="form-label">Expire Date</label>
                                                <input type="date" className="form-control" id="" name='card_expiry' disabled={cashOnline} onChange={onChangeB} required={!cashOnline} />
                                            </div>

                                        </div>
                                        <div className="col-md-6 px-2 ps-3">
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputPassword1" className="form-label">Card Number</label>
                                                <input type="password" className="form-control" name='card_number' id="" disabled={cashOnline} onChange={onChangeB} required={!cashOnline} />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputPassword1" className="form-label">CCV</label>
                                                <input type="password" className="form-control" name='ccv' id="" disabled={cashOnline} onChange={onChangeB} required={!cashOnline} />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="text-end pt-3 pb-2">
                                        <button type="submit" className="btn bg-Red text-white mx-1">CONFIRM PURCHASE</button>
                                    </div>
                                </form>
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
