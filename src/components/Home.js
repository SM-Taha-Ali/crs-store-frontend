import React from 'react'
import '../App.css'
import Accordion from './Accordion'
import Card from './Card'
import Footer from './Footer'

const Home = () => {
    return (
        <>
            <div className="main">
                <div className="container bg-white p-3">
                    <div className="row">
                        <div className="col-lg-9 col-md-12 col-sm-12">
                            <div className="heading ps-2">
                                LATEST PRODUCTS
                                <hr />
                            </div>
                            <div className="row g-0">
                                <div className="col-lg-4 col-md-6 p-2"><Card /></div>
                                <div className="col-lg-4 col-md-6 p-2"><Card /></div>
                                <div className="col-lg-4 col-md-6 p-2"><Card /></div>
                                <div className="col-lg-4 col-md-6 p-2"><Card /></div>
                                <div className="col-lg-4 col-md-6 p-2"><Card /></div>
                                <div className="col-lg-4 col-md-6 p-2"><Card /></div>
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12">
                            <div className="heading">
                                TOP <span className="text-Red">5</span> POPULAR
                                <hr />
                                <div className="py-2">

                                    <Accordion />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="second-container container bg-white">
                    <div className='d-flex flex-row  justify-content-between'>
                        <h4 className='ms-3'>OUR PRODUCTS</h4>
                        <div className="second-header">
                            <div className="border p-2 mx-2">ALL</div>
                            <div className="border p-2 mx-2">PC and Mac</div>
                            <div className="border p-2 mx-2">PLAYSTATION</div>
                            <div className="border p-2 mx-2">TABLETS</div>
                            <div className="border p-2 mx-2">WII</div>
                            <div className="border p-2 mx-2">XBOX</div>
                        </div>
                    </div>
                    <hr className='colorDefault' />
                    <div className="row g-0">
                        <div className="col-xl-3 media-none text-center">
                            <span className='hot_tag mt-2 py-2'>HOT DEALS</span>
                        </div>
                        <div className="col-xl-9 col-lg-12">
                            <div className="row g-0">
                                <div className="col-lg-4 col-md-6 p-2"><Card /></div>
                                <div className="col-lg-4 col-md-6 p-2"><Card /></div>
                                <div className="col-lg-4 col-md-6 p-2"><Card /></div>
                                <div className="col-lg-4 col-md-6 p-2"><Card /></div>
                                <div className="col-lg-4 col-md-6 p-2"><Card /></div>
                                <div className="col-lg-4 col-md-6 p-2"><Card /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container bg-white media-none py-4">
                    <div className='d-flex flex-row'>
                        <div className='fs-2 flex-width2 ps-5 fw-bold'>
                            TOP BRANDS
                        </div>
                        <div className='d-flex flex-row justify-content-between flex-width'>
                            <div className=''>
                                <img src="http://demo.ariestheme.com/themes/sm_igame/media//logo_client/demo-logo1.png" alt="" />
                            </div>
                            <div className=''>
                                <img src="http://demo.ariestheme.com/themes/sm_igame/media//logo_client/demo-logo2.png" alt="" />
                            </div>
                            <div className=''>
                                <img src="http://demo.ariestheme.com/themes/sm_igame/media//logo_client/demo-logo3.png" alt="" />
                            </div>
                            <div className=''>
                                <img src="http://demo.ariestheme.com/themes/sm_igame/media//logo_client/demo-logo5.png" alt="" />
                            </div>
                            <div className=''>
                                <img src="http://demo.ariestheme.com/themes/sm_igame/media//logo_client/demo-logo6.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

        </>
    )
}

export default Home
