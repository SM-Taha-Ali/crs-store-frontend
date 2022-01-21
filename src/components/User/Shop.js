import '../../Stylesheets/shop.css'
import React, { useContext } from 'react'
import Carousel from './Carousel';
import Card from './Card';
import Footer from '../Footer';
import productContext from '../../context/products/productContext';

const Shop = () => {
    const state = useContext(productContext);
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
                    <hr className='text-Red mb-4 fs-1'/>
                    <div className="row g-0">
                        <div className="col-md-3 col-sm-12">
                            <div className="shop-side-bar-card shadow">
                                <span className='shop-side-bar-card-header'>PRODUCT CATEGORIES</span>
                                <ul className='shop-card-cateogory-list list-group'>
                                    <li className='list-group-item'>PC Builds</li>
                                    <li className='list-group-item'>Games</li>
                                    <li className='list-group-item'>Processors</li>
                                    <li className='list-group-item'>Graphics Cards</li>
                                    <li className='list-group-item'>Gaming Keyboard</li>
                                    <li className='list-group-item'>Gaming Mice</li>
                                    <li className='list-group-item'>Casing</li>
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
                        <div className="col-md-9 col-sm-12">
                            <div className="row g-0">                                
                                <div className="col-lg-4 col-md-6 p-2"><Card products={state} /></div>
                                <div className="col-lg-4 col-md-6 p-2"><Card products={state} /></div>
                                <div className="col-lg-4 col-md-6 p-2"><Card products={state} /></div>
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
