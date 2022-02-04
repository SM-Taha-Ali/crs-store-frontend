import React, { useEffect, useContext, useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import productContext from '../context/products/productContext';
import cartContext from '../context/products/cartContext';

const Navbar = () => {
    let location = useLocation();
    useEffect(() => {
    }, [location]);

    var admin = localStorage.getItem('user_role');

    admin = JSON.parse(admin)

    const context = useContext(cartContext);
    const { cartItems, getCartItems, updateCartItems } = context

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getCartItems()
        }
    }, [])

    const contextPro = useContext(productContext);
    const { products, getProduct,  filterProducts, setFilterProducts } = contextPro
    useEffect(() => {
        getProduct()
    }, [])

    const [searchInputs, setSearchInputs] = useState();

    const onChange = (e) => {
        setSearchInputs({ ...searchInputs, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        searchProducts()
    }

    const searchProducts = async () => {
        if (location.pathname == "/" || location.pathname == "/shop") {
            if ((searchInputs.srchInp).length != 0) {
                let newfilterProducts = products.filter((product) => { return (product.name).toString().toLowerCase().indexOf((searchInputs.srchInp).toLowerCase()) > -1 })
                setFilterProducts(newfilterProducts)
            } else {
                setFilterProducts(products)
            }
        } else if (location.pathname == "/admin") {
            let newfilterProducts = products.filter((product) => { return (product.name).toString().toLowerCase().indexOf((searchInputs.srchInp).toLowerCase()) > -1 })
            setFilterProducts(newfilterProducts)
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-xl navbar-light bg-light px-1">
                <a className="navbar-brand media-padding" href="#"><span className="text-Red fs-3 fw-bold">CRS</span><span className="text-dark fs-3 fw-bold px-1">STORE</span></a>
                {/* <button className="navbar-toggler my-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
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
                            {admin ?
                                <Link className={`nav-link ${location.pathname === "/admin" ? "active" : ""}`} to="/admin">Admin Panel</Link> :
                                ""
                            }
                        </li>
                    </ul>
                    <form className="d-flex" onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search here..." id='searchbar' name='srchInp' onChange={onChange} />
                            <button className="btn bg-Red text-white" id="button-addon2" onClick={() => searchProducts()}><i className="fas fa-search"></i></button>
                        </div>
                    </form>
                    <Link to="/cart">
                        <div className="bg-Red py-4 px-3 cart">
                            <span className='text-white px-1'>
                                <i className="fas fa-shopping-cart"></i>
                            </span>
                            <span className='text-white ps-1'>
                                {cartItems.length}
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
