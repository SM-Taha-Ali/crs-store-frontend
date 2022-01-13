import React from 'react'
import '../App.css'
import Navbar from './Navbar'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className="md-screen bg-Grey">
                <div className="container">
                    <div className="row g-0">
                        <div className="col-md-1 col-sm-0 d-flex flex-row align-items-center text-grey">
                            <div className='fs-6 px-3 py-2 Border' >Urdu</div>
                            <div className='fs-6 px-3 py-2 Border-right'>PKR</div>
                        </div>
                        <div className="col-md-1 col-sm-0">
                        </div>
                        <div className="col-md-7 col-sm-0">
                        </div>
                        <div className="col-md-3 col-sm-3 text-end">
                            <Link to="/login" className="btn m-0 p-1">
                                <div className="text-grey d-flex flex-row align-items-center media-center">
                                    <div className='ps-2 pe-1 py-2 Border-left'>
                                        <i className="fas fa-user"></i>
                                    </div>
                                    <div className='pe-2 ps-1 py-2 Border-right'>
                                        Login
                                    </div>
                                </div>
                            </Link>
                        </div>


                    </div>
                </div>

            </div>
            <div className="sm-screen bg-Grey py-2">
                <div className="container">
                    <div className="row g-0">
                        <div className="col-sm-12 text-grey d-flex flex-row align-items-center justify-content-center">
                            <div className='px-1'>
                                <i className="fas fa-user"></i>
                            </div>
                            <div className='px-1'>
                                Clixicon
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="bg-light">
                <div className="container">
                    <Navbar />
                </div>
            </div>
        </>
    )
}

export default Header
