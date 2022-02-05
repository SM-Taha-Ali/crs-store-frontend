import React, { useContext, useEffect, useState } from 'react';
import '../../Stylesheets/App.css'
import Accordion from './Accordion';
import Card from './Card';
import Footer from '../Footer';
import Carousel from './Carousel';
import productContext from '../../context/products/productContext';
import cartContext from '../../context/products/cartContext';
import { TailSpin } from "react-loader-spinner";
import Alert from 'react-bootstrap/Alert'
import '../../Stylesheets/Loader.css'
import '../../Stylesheets/shop.css'




const Home = () => {
    // Alert show or dismiss
    const [show, setShow] = useState(false);
    const [ loader, setLoader ] = useState(false);

    // useContext hook for global state call
    const context = useContext(productContext);
    const { products, getProduct,  filterProducts, setFilterProducts } = context
    useEffect(() => {
        getProduct()
        setLoader(true)
    }, [])

    useEffect(() => {
        setFilterProducts(filterProducts => products)
    }, [products])

    const context2 = useContext(cartContext);
    let { cartItems, getCartItems, updateCartItems } = context2
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getCartItems()
        } else {
            cartItems = []
        }
    }, [])

    const [active_category, setactive_category] = useState("all");


    // filter products
    const filter = (e) => {
        if (e.target.value == 0) {
            setFilterProducts(filterProducts => products)
            setactive_category("all")
        }
        if (e.target.value == 1) {
            let newfilterProducts = products.filter((product) => { return product.category == "Game" })
            setFilterProducts(newfilterProducts)
            setactive_category("game")
        }
        if (e.target.value == 2) {
            let newfilterProducts = products.filter((product) => { return product.category == "Processor" })
            setFilterProducts(newfilterProducts)
            setactive_category("processor")
        }
        if (e.target.value == 3) {
            let newfilterProducts = products.filter((product) => { return product.category == "Graphics Card" })
            setFilterProducts(newfilterProducts)
            setactive_category("graphic_card")
        }
        if (e.target.value == 4) {
            let newfilterProducts = products.filter((product) => { return product.category == "Keyboard" })
            setFilterProducts(newfilterProducts)
            setactive_category("keyboard")
        }
        if (e.target.value == 5) {
            let newfilterProducts = products.filter((product) => { return product.category == "Mouse" })
            setFilterProducts(newfilterProducts)
            setactive_category("mouse")
        }
        if (e.target.value == 6) {
            let newfilterProducts = products.filter((product) => { return product.category == "Casing" })
            setFilterProducts(newfilterProducts)
            setactive_category("casing")
        }
        if (e.target.value == 7) {
            let newfilterProducts = products.filter((product) => { return product.category == "PC Build" })
            setFilterProducts(newfilterProducts)
            setactive_category("pc_build")
        }
    }
    return (
        <>

            <div className="not-main">
                <Carousel />
            </div>
            <div className="contact-main">
                <div className="container bg-white p-3">
                    {show ? <Alert variant={'success'} className='apni_card_alert' >
                        <b>Success!</b> Product has been added to card.
                    </Alert> : ""}
                    <div className="row">
                    {!loader && <div className="loader-wrapper">
                     <TailSpin color="#00BFFF" height={80} width={80} /> 
                     </div> ||
                        <div className="col-lg-9 col-md-12 col-sm-12">
                            <div className="heading ps-2">
                                LATEST PRODUCTS
                                <hr />
                            </div>
                            {/* Displaying Cards */}
                            <div className="row g-0">
                                {
                                    products.slice(0, 6).map((product, i) => {
                                        return <Card key={product._id} product={product} setShow={setShow} />
                                    })
                                }
                            </div>
                        </div>
                    }
                        {/* Side column */}
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
                    <div className='media_products_responsive'>
                        <h4 className='ms-3'>OUR PRODUCTS</h4>
                        <div className="second-header row">
                            <li className={`list-group-item border our_products col-lg-2 col-md-6 col-sm-12 py-2 px-2 ${active_category == "all" ? 'active-category-home-wali' : ""}`} onClick={(e) => filter(e)} value={0}>ALL</li>
                            <li className={`list-group-item border our_products col-lg-2 col-md-6 col-sm-12 py-2 px-2 ${active_category == "game" ? 'active-category-home-wali' : ""}`} onClick={(e) => filter(e)} value={1}>GAMES</li>
                            <li className={`list-group-item border our_products col-lg-2 col-md-6 col-sm-12 py-2 px-2 ${active_category == "processor" ? 'active-category-home-wali' : ""}`} onClick={(e) => filter(e)} value={2}>PROCESSOR</li>
                            <li className={`list-group-item border our_products col-lg-2 col-md-6 col-sm-12 py-2 px-2 ${active_category == "graphic_card" ? 'active-category-home-wali' : ""}`} onClick={(e) => filter(e)} value={3}>GRAPHICS CARD</li>
                            <li className={`list-group-item border our_products col-lg-2 col-md-6 col-sm-12 py-2 px-2 ${active_category == "casing" ? 'active-category-home-wali' : ""}`} onClick={(e) => filter(e)} value={6}>CASING</li>
                            <li className={`list-group-item border our_products col-lg-2 col-md-6 col-sm-12 py-2 px-2 ${active_category == "pc_build" ? 'active-category-home-wali' : ""}`} onClick={(e) => filter(e)} value={7}>PC BUILD</li>
                        </div>
                        
                    </div>
                    <hr className='colorDefault' />
                    <div className="row g-0">
                        <div className="col-xl-3 media-none text-center">
                            <span className='hot_tag mt-2 py-2'>HOT DEALS</span>
                        </div>
                        <div className="col-xl-9 col-lg-12">
                            <div className="row">
                                {filterProducts.slice(0, 9).map((product) => {
                                    return <Card key={product._id} product={product} />
                                })}
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
