import React, { useContext, useEffect, useState } from 'react';
import '../../Stylesheets/App.css'
import Accordion from './Accordion';
import Card from './Card';
import Footer from '../Footer';
import Carousel from './Carousel';
import productContext from '../../context/products/productContext';
import cartContext from '../../context/products/cartContext';



const Home = () => {
    const context = useContext(productContext);
    const { products, getProduct } = context
    useEffect(() => {
        getProduct()
    }, [])
    const context2 = useContext(cartContext);
    let { cartItems, getCartItems, updateCartItems } = context2
    useEffect(() => {
        if (localStorage.getItem('token')){
            getCartItems()
        } else{
            cartItems = []
        }
    }, [])

    const [filterProducts, setFilterProducts] = useState(products);

    useEffect(() => {
        setFilterProducts(filterProducts => products)
    }, [products])


    const filter = (e) => {
        if (e.target.value == 0) {
            setFilterProducts(filterProducts => products)
            console.log('working')
        }
        if (e.target.value == 1) {
            let newfilterProducts = products.filter((product) => { return product.category == "Game" })
            setFilterProducts(newfilterProducts)
        }
        if (e.target.value == 2) {
            let newfilterProducts = products.filter((product) => { return product.category == "Processor" })
            setFilterProducts(newfilterProducts)
        }
        if (e.target.value == 3) {
            let newfilterProducts = products.filter((product) => { return product.category == "Graphics Card" })
            setFilterProducts(newfilterProducts)
        }
        if (e.target.value == 4) {
            let newfilterProducts = products.filter((product) => { return product.category == "Keyboard" })
            setFilterProducts(newfilterProducts)
        }
        if (e.target.value == 5) {
            let newfilterProducts = products.filter((product) => { return product.category == "Mouse" })
            setFilterProducts(newfilterProducts)
        }
        if (e.target.value == 6) {
            let newfilterProducts = products.filter((product) => { return product.category == "Casing" })
            setFilterProducts(newfilterProducts)
        }
        if (e.target.value == 7) {
            let newfilterProducts = products.filter((product) => { return product.category == "PC Build" })
            setFilterProducts(newfilterProducts)
        }
    }
    return (
        <>
            <div className="not-main">
                <Carousel />
            </div>
            <div className="contact-main">
                <div className="container bg-white p-3">
                    <div className="row">
                        <div className="col-lg-9 col-md-12 col-sm-12">
                            <div className="heading ps-2">
                                LATEST PRODUCTS
                                <hr />
                            </div>
                            <div className="row g-0">
                                {products.slice(0,6).map((product, i) => {
                                    return <Card key={product._id} product={product} />
                                })}
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
                    <div className='media_products_responsive'>
                        <h4 className='ms-3'>OUR PRODUCTS</h4>
                        <div className="second-header row">
                            <li className="border our_products col-lg-2 col-md-6 col-sm-12 py-2 px-2" onClick={(e) => filter(e)} value={0}>ALL</li>
                            <li className="border our_products col-lg-2 col-md-6 col-sm-12 py-2 px-2" onClick={(e) => filter(e)} value={1}>GAMES</li>
                            <li className="border our_products col-lg-2 col-md-6 col-sm-12 py-2 px-2" onClick={(e) => filter(e)} value={2}>PROCESSOR</li>
                            <li className="border our_products col-lg-2 col-md-6 col-sm-12 py-2 px-2" onClick={(e) => filter(e)} value={3}>GRAPHICS CARD</li>
                            <li className="border our_products col-lg-2 col-md-6 col-sm-12 py-2 px-2" onClick={(e) => filter(e)} value={6}>CASING</li>
                            <li className="border our_products col-lg-2 col-md-6 col-sm-12 py-2 px-2" onClick={(e) => filter(e)} value={7}>PC BUILD</li>
                        </div>
                    </div>
                    <hr className='colorDefault' />
                    <div className="row g-0">
                        <div className="col-xl-3 media-none text-center">
                            <span className='hot_tag mt-2 py-2'>HOT DEALS</span>
                        </div>
                        <div className="col-xl-9 col-lg-12">
                            <div className="row">
                                {filterProducts.slice(0,9).map((product) => {
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
