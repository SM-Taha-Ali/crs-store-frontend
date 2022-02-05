import React, { useContext, useEffect, useState } from 'react';
import Footer from '../Footer';
import Carousel from './Carousel';
import { Link, useNavigate } from 'react-router-dom';
import cartContext from '../../context/products/cartContext';
import CartTr from './CartTr';

const Cart = () => {
    const navigate = useNavigate();

    const context = useContext(cartContext);
    const { cartItems, getCartItems, updateCartItem, deleteItem } = context

    const [cartEmpty, setcartEmpty] = useState(false);

    const checkOut = ()=>{
        navigate("/checkout")
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getCartItems()
        }
        if (cartItems.length == 0){
            setcartEmpty(true)
        }
    }, [])

    return (
        <>
            <div className="not-main">
                <Carousel />
            </div>
            <div className="contact-main rounded">
                <div className="container bg-white p-4 Rounded">
                    <h1 className="text-center text-Red">
                        YOUR CART
                    </h1>
                    <div className="cart-table">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">PRODUCT NAME</th>
                                    <th scope="col">UNIT PRICE</th>
                                    <th scope="col">QUANTITY</th>
                                    <th scope="col">SUBTOTAL</th>
                                    <th scope="col" className='text-center'>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartItems.map((cartItem, i) => {
                                        return <CartTr key={cartItem._id} index={i} cartItem={cartItem} updateCartItem={updateCartItem} deleteItem={deleteItem} />
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
                            <button className="btn bg-Red text-white mx-1" disabled={cartEmpty} onClick={checkOut}>PROCEED TO CHECKOUT</button>
                    </div>

                </div>
            <Footer />
            </div>
        </>
    )
};

export default Cart;
