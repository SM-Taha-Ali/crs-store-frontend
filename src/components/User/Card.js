import React, { useEffect, useContext } from 'react'
import '../../Stylesheets/App.css'
import cartContext from '../../context/products/cartContext';

const Card = (props) => {
    const { product } = props

    const context = useContext(cartContext)

    const { getCartItems } = context

    const addToCart = async () => {
        console.log(product._id);
        const response = await fetch(`http://localhost:5000/api/cart/addtocart/${product._id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ quantity: 1, price:product.price, name:product.name })
        });
        const json = await response.json();
        console.log(json);

       getCartItems()
       
    }
    return (
        <>
            <div className="col-lg-4 col-md-6 p-2">
                <div className="Card">
                    <img src="http://demo.ariestheme.com/themes/sm_igame/media/catalog/product/cache/1/small_image/450x299/9df78eab33525d08d6e5fb8d27136e95/2/2/22_3.jpg" className="card-img-top" alt="..." />
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
                        <div className='priceTag'>{product.price}</div>
                    </div>
                    <div className="cardFooter">
                        <div className='cartIcon' onClick={()=>{addToCart()}} ><i className="fas fa-cart-arrow-down"></i></div>
                        <div className='cartIcon'><i className="fas fa-random"></i></div>
                        <div className='cartIcon'><i className="fas fa-heart"></i></div>
                        <div className='cartIcon'><i className="fas fa-eye"></i></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
