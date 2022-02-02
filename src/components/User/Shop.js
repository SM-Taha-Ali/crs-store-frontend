import '../../Stylesheets/shop.css'
import React, { useContext, useEffect, useState } from 'react';
import Carousel from './Carousel';
import Card from './Card';
import Footer from '../Footer';
import productContext from '../../context/products/productContext';

const Shop = () => {
    const context = useContext(productContext);
    const { products, getProduct } = context
    useEffect(() => {
        getProduct()
    }, [])

    const [filterProducts, setFilterProducts] = useState(products);

    useEffect(() => {
        setFilterProducts(filterProducts => products)
    }, [products])


    const filter = (e) => {
        if (e.target.value == 0) {
            setFilterProducts(filterProducts => products)
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
            <div className="contact-main rounded">
                <div className="container bg-white p-4">
                    <div className="row g-0">
                        <div className="col-3">
                            <h1>SHOP</h1>
                        </div>
                        <div className="col-9"></div>
                    </div>
                    <hr className='text-Red mb-4 fs-1' />
                    <div className="row g-0">
                        <div className="col-lg-3 col-sm-12">
                            <div className="shop-side-bar-card shadow">
                                <span className='shop-side-bar-card-header'>PRODUCT CATEGORIES</span>
                                <ul className='shop-card-cateogory-list list-group'>
                                    <li className='list-group-item' onClick={(e) => filter(e)} value={0}>All</li>
                                    <li className='list-group-item' onClick={(e) => filter(e)} value={1}>Games</li>
                                    <li className='list-group-item' onClick={(e) => filter(e)} value={2}>Processors</li>
                                    <li className='list-group-item' onClick={(e) => filter(e)} value={3}>Graphics Cards</li>
                                    <li className='list-group-item' onClick={(e) => filter(e)} value={4}>Gaming Keyboard</li>
                                    <li className='list-group-item' onClick={(e) => filter(e)} value={5}>Gaming Mice</li>
                                    <li className='list-group-item' onClick={(e) => filter(e)} value={6}>Casing</li>
                                    <li className='list-group-item'onClick={(e) => filter(e)} value={7}>PC Builds</li>
                                </ul>
                            </div>
                            <div className="shop-side-bar-card shadow my-3">
                                <span className='shop-side-bar-card-header'>SORT BY</span>
                                <ul className='shop-card-cateogory-list list-group'>
                                    <li className='list-group-item'>Price</li>
                                    <li className='list-group-item'>Rating</li>
                                    <li className='list-group-item'>Released Date</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-9 col-sm-12">
                            <div className="row g-0">
                                {filterProducts.map((product) => {
                                    return <Card key={product._id} product={product} />
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    )
}

export default Shop
