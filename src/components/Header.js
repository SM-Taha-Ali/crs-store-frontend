import React, { useState } from 'react'
import '../Stylesheets/App.css'
import Navbar from './Navbar'
import { Link, useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user_role')
        localStorage.removeItem('allUsers')
        navigate('/login')
        window.location.reload()
    }

    const local_name = localStorage.getItem('user_name')

    const userName = `${local_name}`

    return (
        <div>
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
                            {!localStorage.getItem('token') ?
                                <Link to="/login" className="btn m-0 p-1">
                                    <div className="text-grey d-flex flex-row align-items-center media-center header-login-btn">
                                        <div className='ps-2 pe-1 py-2 Border-left'>
                                            <i className="fas fa-user"></i>

                                        </div>
                                        <div className='pe-2 ps-1 py-2 Border-right' id='default-login'>
                                            Login
                                        </div>
                                    </div>
                                </Link> :
                                <div className="btn m-0 p-1" >
                                    <div className="text-grey d-flex flex-row align-items-center media-center header-login-btn">
                                        <div className='ps-2 pe-1 py-2 Border-left'>
                                            <i className="fas fa-user"></i>
                                        </div>
                                        <div className="dropdown pe-2 ps-1 py-2 Border-right">
                                            <span className="dropbtn mx-2">{userName}</span>
                                            <div className="dropdown-content">
                                                <Link to="/orders"><i className="far fa-shopping-bag mx-1"></i> Orders</Link>
                                                <a href="#" onClick={handleLogout}><i className="far fa-sign-out mx-1"></i> Logout</a>
                                                {/* <a href="#" ><i className="fal fa-cog"></i> Settings</a> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="sm-screen bg-Grey py-2">
                <div className="container">
                    <div className="row g-0">
                        <div className="col-sm-12 text-grey d-flex flex-row align-items-center justify-content-center">
                            {!localStorage.getItem('token') ?
                                <Link to="/login" className="btn m-0 p-1">
                                    <div className="text-grey d-flex flex-row align-items-center media-center header-login-btn">
                                        <div className='ps-2 pe-1 py-2 '>
                                            <i className="fas fa-user"></i>

                                        </div>
                                        <div className='pe-2 ps-1 py-2 ' id='default-login'>
                                            Login
                                        </div>
                                    </div>
                                </Link> :
                                <div className="btn m-0 p-1" >
                                    <div className="text-grey d-flex flex-row align-items-center media-center header-login-btn">
                                        <div className='ps-2 pe-1 py-2 '>
                                            <i className="fas fa-user"></i>
                                        </div>
                                        <div className="dropdown pe-2 ps-1 py-2 ">
                                            <span className="dropbtn mx-2">{userName}</span>
                                            <div className="dropdown-content">
                                                {/* <a href="#" ><i className="fal fa-cog"></i> Settings</a> */}
                                                <a href="#" onClick={handleLogout}><i className="far fa-sign-out mx-1"></i> Logout</a>
                                                <Link to="/orders"><i className="far fa-shopping-bag mx-1"></i> Orders</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>

                    </div>
                </div>
            </div>

            <div className="bg-light">
                <div className="container">
                    <Navbar />
                </div>
            </div>
        </div>
    )
}

export default Header
