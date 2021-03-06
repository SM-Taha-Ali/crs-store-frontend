import React, { useEffect, useContext } from 'react'
import '../../Stylesheets/App.css'
import cartContext from '../../context/products/cartContext';
import wishContext from '../../context/products/wishContext';
import { Link, useNavigate } from 'react-router-dom';

const Card = (props) => {
    const { product, setShow, setLoader } = props

    const navigate = useNavigate();

    const context = useContext(cartContext)

    const { cartItems, getCartItems } = context

    var disableBtn = false

    cartItems.forEach(item => {
        if(item.product == product._id ){
            disableBtn = true
        }
    });

    const contextWish = useContext(wishContext)

    const { getWishList, addToWish } = contextWish

    const addToCart = async () => {
        if (localStorage.getItem('token')) {
            // setLoader(true)
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
            await getCartItems()
            setShow(true)
            setTimeout(() => {
                setShow(false)
            }, 2000);

        } else {
            navigate('/login')
        }
    }

    const addToWishList = () => {
        addToWish(product._id, product.name, product.price)
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
                        <button className='cartIcon' disabled={disableBtn} onClick={() => { addToCart() }} ><i className="fas fa-cart-arrow-down"></i></button>
                        <div className='cartIcon'><i className="fas fa-random"></i></div>
                        <div className='cartIcon' onClick={() => { addToWishList() }} ><i className="fas fa-heart"></i></div>
                        {/* <div className='cartIcon' onClick={() => { preview(product._id) }}><i className="fas fa-eye"></i></div> */}
                        <Link
                            to='/productdesc'
                            state={{ id: product._id, name: product.name, price: product.price, img: product.img, desc: product.description }}
                            className='cartIcon'
                        >
                            <i className="fas fa-eye"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
