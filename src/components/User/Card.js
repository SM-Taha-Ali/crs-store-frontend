import React, { useEffect, useContext } from 'react'
import '../../Stylesheets/App.css'
import cartContext from '../../context/products/cartContext';
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
    const { product } = props

    const navigate = useNavigate();

    const context = useContext(cartContext)

    const { getCartItems } = context

    const addToCart = async () => {
        console.log(product._id);
        if (localStorage.getItem('token')) {
            const response = await fetch(`http://localhost:5000/api/cart/addtocart/${product._id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token')
                },
                body: JSON.stringify({ quantity: 1, price: product.price, name: product.name })
            });
            const json = await response.json();
            console.log(json);

            getCartItems()
        } else {
            navigate('/login')
        }
    }

    const preview = () => {
        navigate('/productdesc')
    }

    const addToWishList = () => {
        console.log("added to wish list")
    }

    return (
        <>
            <div className="col-lg-4 col-md-6 p-2">
                <div className="Card">
                    <img src={product.img} className="card-img-top" alt="..." />
                    <div className="cardBody">
                        <div>
                            <h5 className="cardHeading text-dark ">{product.name}</h5>
                            <div className='starRating'>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                            </div>
                        </div>
                        <div className='priceTag'>{product.price}Rs</div>
                    </div>
                    <div className="cardFooter">
                        <div className='cartIcon' onClick={() => { addToCart() }} ><i className="fas fa-cart-arrow-down"></i></div>
                        <div className='cartIcon'><i className="fas fa-random"></i></div>
                        <div className='cartIcon' onClick={() => { addToWishList() }} ><i className="fas fa-heart"></i></div>
                        <div className='cartIcon' onClick={() => { preview() }}><i className="fas fa-eye"></i></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
