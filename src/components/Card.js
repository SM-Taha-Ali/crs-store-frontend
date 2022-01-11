import React from 'react'
import '../App.css'

const Card = () => {
    return (
        <>
            <div className="Card">
                <img src="http://demo.ariestheme.com/themes/sm_igame/media/catalog/product/cache/1/small_image/450x299/9df78eab33525d08d6e5fb8d27136e95/2/2/22_3.jpg" className="card-img-top" alt="..." />
                <div className="cardBody">
                    <div>
                        <h5 className="cardHeading text-dark ">Dota 2</h5>
                        <div className='starRating'>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </div>
                    </div>
                    <div className='priceTag'>$550.00</div>
                </div>
                <div className="cardFooter">
                    <div className='cartIcon'><i class="fas fa-cart-arrow-down"></i></div>
                    <div className='cartIcon'><i class="fas fa-random"></i></div>
                    <div className='cartIcon'><i class="fas fa-heart"></i></div>
                    <div className='cartIcon'><i class="fas fa-eye"></i></div>
                </div>
            </div>
        </>
    )
}

export default Card
