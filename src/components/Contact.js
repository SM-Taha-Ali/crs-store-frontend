import React from 'react'
import Carousel from './Carousel';
import Footer from './Footer';

const Contact = () => {
    return (
        <>
            <div className="not-main">
                <Carousel />
            </div>
            <div className="contact-main">
                <div className="container bg-white p-4 Rounded">
                    <h1 className="text-Red text-center mb-4">
                        CONTACT US
                    </h1>
                    <form>
                        <div className="row g-0">
                            <div className="col-md-6 col-sm-12 pe-3 py-2">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Your Name</label>
                                    <input type="text" className="form-control" id="" name='' required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Your Email</label>
                                    <input type="email" className="form-control" id="" name='' required />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Your Contact No</label>
                                    <div className="input-group flex-nowrap">
                                        <span className="input-group-text" id="addon-wrapping">+92</span>
                                        <input type="text" className="form-control" name='phoneno' id='phoneno' />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12  py-2">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Message</label>
                                    <textarea class="form-control height_100" id="" rows="8" placeholder='Write your message here...'></textarea>
                                </div>

                            </div>
                        </div>

                        <div className="row g-0 mt-5">
                            <div className="col-6 fs-3 px-3">
                                <span className='d-block fs-1 text-center'> <span className="text-Red">CRS</span> STORE </span>
                                <span className='d-block fs-3 text-center my-2'>QUALITY PRODUCTS GUARANTEED</span>
                            </div>
                            <div className="col-6 fs-4 px-3">
                                <p>
                                    We provide 24/7 Customer care services!
                                </p>
                                <p>
                                    We will be very pleased to talk with you.
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="container">
                    <Footer />
                </div>
            </div>

        </>
    )
}

export default Contact
