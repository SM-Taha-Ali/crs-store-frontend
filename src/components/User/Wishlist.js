import React, { useContext, useEffect, useState } from 'react';
import Footer from '../Footer';
import Carousel from './Carousel';
import { Link, useNavigate } from 'react-router-dom';
import cartContext from '../../context/products/cartContext';
import wishContext from '../../context/products/wishContext';
import WishTr from './WishTr';

const Wishlist = () => {

    const contextWish = useContext(wishContext)
    const { wishList, getWishList, addToWish, deleteWish } = contextWish

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getWishList()
        }
    }, [])


    return (<>
        <div className="not-main">
            <Carousel />
        </div>
        <div className="contact-main rounded">
            <div className="container bg-white p-4 Rounded">
                <h1 className="text-center text-Red">
                    MY WISH LIST
                </h1>
                <div className="cart-table">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">PRODUCT NAME</th>
                                <th scope="col">UNIT PRICE</th>
                                <th scope="col" className='text-center'>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                wishList.map((wish, i) => {
                                    return <WishTr key={wish._id} index={i} wish={wish} deleteWish={deleteWish} />
                                })
                            }
                        </tbody>
                        <tfoot>

                        </tfoot>
                    </table>
                </div>

                <div className="text-end py-5">
                    <Link to="/shop">
                        <button className="btn bg-Red text-white mx-1">CONTINUE SHOPPING</button>
                    </Link>
                </div>

            </div>
        </div>
        <Footer />
    </>);
};

export default Wishlist;
