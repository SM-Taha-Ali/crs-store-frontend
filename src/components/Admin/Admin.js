import React, { useEffect } from 'react'
import { Link, useLocation } from "react-router-dom";
import Dashboard from './Dashboard';
import Footer from '../Footer';
import Orders from './Orders';
import Products from './Products';
import Users from './Users';

const Admin = () => {
    let location = useLocation();
    useEffect(() => {
    }, [location]);
    const openNav = () => {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }
    function clickHandler(e) {
        var dashboard = document.getElementById("dashboard")
        var products = document.getElementById("products")
        var orders = document.getElementById("orders")
        var users = document.getElementById("users")

        if (e.target.innerHTML == "Dashboard") {
            dashboard.style.display = "block"
            products.style.display = "none"
            orders.style.display = "none"
            users.style.display = "none"
        }
        if (e.target.innerHTML == "Products") {
            products.style.display = "block"
            dashboard.style.display = "none"
            orders.style.display = "none"
            users.style.display = "none"
        }
        if (e.target.innerHTML == "Orders") {
            orders.style.display = "block"
            dashboard.style.display = "none"
            products.style.display = "none"
            users.style.display = "none"
        }
        if (e.target.innerHTML == "Users") {
            users.style.display = "block"
            dashboard.style.display = "none"
            products.style.display = "none"
            orders.style.display = "none"
        }
        e.preventDefault()
        closeNav()
    }
    return (
        <>
            <div className="container-fluid text-start position-relative">
                <div id="mySidenav" className="sidenav position-absolute">
                    <span href="" className="closebtn" onClick={closeNav}>×</span>
                    <a href="" className="" onClick={e => clickHandler(e)}>Dashboard</a>
                    <a href="" className="" onClick={e => clickHandler(e)}>Products</a>
                    <a href="" className="" onClick={e => clickHandler(e)}>Orders</a>
                    <a href="" className="" onClick={e => clickHandler(e)}>Users</a>
                </div>
                {/* Use any element to open the sidenav */}
                <span onClick={openNav} role="button" className='text-start my-2 d-inline-block ms-3 text-white'><i className="fas fa-bars text-white me-2"></i>  Menu</span>
                {/* Add all page content inside this div if you want the side nav to push page content to the right (not used if you only want the sidenav to sit on top of the page */}
                <div id="main" className='bg-white Rounded shadow mb-4'>
                    <div className='' id="dashboard">
                        <Dashboard />
                    </div>
                    <div className='side-bar-control' id="products">
                        <Products />
                    </div>
                    <div className='side-bar-control' id="orders">
                        <Orders />
                    </div>
                    <div className='side-bar-control' id="users">
                        <Users />
                    </div>
                </div>
                <div id="secondary-main">
                    Sorry Admin Panel Is Not Available On Mobile Screens!
                </div>
                <div className="container">
                    <Footer />
                </div>
            </div>


        </>
    )
}

export default Admin
