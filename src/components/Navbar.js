import React, { useEffect } from 'react'
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    let location = useLocation();
    useEffect(() => {
    }, [location]);
    return (
        <>
            <nav className="navbar navbar-expand-xl navbar-light bg-light px-1">
                <a className="navbar-brand media-padding" href="#"><span className="text-Red fs-3 fw-bold">CRS</span><span className="text-dark fs-3 fw-bold px-1">STORE</span></a>
                {/* <button className="navbar-toggler my-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button> */}
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item px-1">
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item px-1">
                            <Link className={`nav-link ${location.pathname === "/shop" ? "active" : ""}`} aria-current="page" to="/shop">Shop</Link>
                        </li>
                        <li className="nav-item px-1">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About Us</Link>
                        </li>
                        <li className="nav-item px-1">
                            <Link className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`} to="/contact">Contact Us</Link>
                        </li>
                        <li className="nav-item px-1">
                            <Link className={`nav-link ${location.pathname === "/admin" ? "active" : ""}`} to="/admin">Admin Panel</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search here..." aria-label="Search here..." aria-describedby="button-addon2" />
                            <button className="btn bg-Red text-white" type="button" id="button-addon2"><i className="fas fa-search"></i></button>
                        </div>
                    </form>
                    <Link to="/cart">
                        <div className="bg-Red py-4 px-3 cart">
                            <span className='text-white px-1'>
                                <i className="fas fa-shopping-cart"></i>
                            </span>
                            <span className='text-white ps-1'>
                                0
                            </span>
                            <span className='text-white px-1'>
                                item(s)
                            </span>
                        </div>
                    </Link>

                </div>
            </nav>
        </>
    )
}

export default Navbar
