import React from 'react';
import Footer from '../Footer';
import Carousel from './Carousel';
import { Link } from 'react-router-dom';

const Cart = () => {
    return (
        <>
            <div className="not-main">
                <Carousel />
            </div>
            <div className="contact-main rounded">
                <div className="container p-4">
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
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Nvidia 1060</td>
                                    <td>10,000</td>
                                    <td className='pe-3'>
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="QTY" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                            <span className="input-group-text bg-Red text-white" id="basic-addon2"><i class="fas fa-redo"></i></span>
                                        </div>

                                    </td>
                                    <td>60,000</td>
                                    <td className='text-center'>
                                        <button className="btn btn-orange"><i class="far fa-trash-alt text-white"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Nvidia 1060</td>
                                    <td>10,000</td>
                                    <td className='pe-3'>
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="QTY" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                            <span className="input-group-text bg-Red text-white" id="basic-addon2"><i class="fas fa-redo"></i></span>
                                        </div>
                                    </td>
                                    <td>60,000</td>
                                    <td className='text-center'>
                                        <button className="btn btn-orange"><i class="far fa-trash-alt text-white"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Nvidia 1060</td>
                                    <td>10,000</td>
                                    <td className='pe-3'>
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="QTY" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                            <span className="input-group-text bg-Red text-white" id="basic-addon2"><i class="fas fa-redo"></i></span>
                                        </div>
                                    </td>
                                    <td>60,000</td>
                                    <td className='text-center'>
                                        <button className="btn btn-orange"><i class="far fa-trash-alt text-white"></i></button>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <td></td>
                                <td colSpan={3} className='fs-3 fw-bold'>TOTAL AMOUNT</td>
                                <td colSpan={2} className='fs-3 fw-bold'>180,000 RS</td>
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
