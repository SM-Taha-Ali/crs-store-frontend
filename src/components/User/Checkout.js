import '../../Stylesheets/Checkout.css'
import React from 'react';
import Footer from '../Footer';

const Checkout = () => {
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
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 px-2">
                        <h1 className='py-3 bg-gray text-dark px-3 m-0 p-0'>SUMMARY</h1>
                        <div className="bg-white m-0 p-0">
                            Lorem ipsum dolor sit.
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
};

export default Checkout;
