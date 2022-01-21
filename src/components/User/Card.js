import React from 'react'
import '../../Stylesheets/App.css'

const Card = (props) => {
    const {products} = props
    return (
        <>
            <div className="Card">
                <img src="http://demo.ariestheme.com/themes/sm_igame/media/catalog/product/cache/1/small_image/450x299/9df78eab33525d08d6e5fb8d27136e95/2/2/22_3.jpg" className="card-img-top" alt="..." />
                <div className="cardBody">
                    <div>
                        <h5 className="cardHeading text-dark ">{products.name}</h5>
                        <div className='starRating'>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </div>
                    </div>
                    <div className='priceTag'>{products.price}</div>
                </div>
                <div className="cardFooter">
                    <div className='cartIcon'><i className="fas fa-cart-arrow-down"></i></div>
                    <div className='cartIcon'><i className="fas fa-random"></i></div>
                    <div className='cartIcon'><i className="fas fa-heart"></i></div>
                    <div className='cartIcon'><i className="fas fa-eye"></i></div>
                </div>
            </div>
        </>
    )
}

export default Card
