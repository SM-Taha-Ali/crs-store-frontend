import React, { useEffect, useContext } from 'react'
import '../../Stylesheets/App.css'
import cartContext from '../../context/products/cartContext';
import { Link, useNavigate } from 'react-router-dom';

const DescCard = (props) => {

    const { product_id, product_img, product_name, product_price, product_desc } = props

    const context = useContext(cartContext)
    const { getCartItems } = context

    const navigate = useNavigate();

    const addToCart = async () => {
        if (localStorage.getItem('token')) {
            const response = await fetch(`http://localhost:5000/api/cart/addtocart/${product_id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token')
                },
                body: JSON.stringify({ quantity: 1, price: product_price, name: product_name })
            });
            const json = await response.json();
            console.log(json);

            getCartItems()
        } else {
            navigate('/login')
        }
    }

    return (
        <>
            <div className="row g-0">
                <div className='col-md-8 px-3'>
                    <div className='shadow'>
                        <img src={product_img} alt="" width={"100%"} />
                    </div>
                    <div className="product_detail shadow my-3">
                        <h3>Details</h3>
                        <div className="row g-0 my-3">
                            <div className="col-md-12 fs-5 fw-bold">Name <span className='text-Red mx-3'>{product_name}</span> </div>
                        </div>
                        <div className="row g-0 my-3">
                            <div className="col-md-6 fs-5 fw-bold">Price <span className='text-Red mx-3'>{product_price}</span></div>
                            <div className="col-md-6 fs-5 fw-bold">Condition <span className='text-Red mx-3'>New</span></div>
                        </div>
                        <hr />
                        <div className="details">
                        <h3>Description</h3>
                        {product_desc}
                        </div>
                    </div>
                </div>
                <div className="col-md-4 px-3">
                    <div className='product_desc_price shadow mb-3 p-2'>
                        <div className='d-flex flex-row justify-content-between'>
                            <p className="fs-3 fw-bold">
                                Rs {product_price}
                            </p>
                            <p className='d-flex align-items-center'>
                                <i className="far fa-heart mx-2 fs-4"></i>
                                <i className="far fa-share-alt mx-2 fs-4"></i>
                            </p>
                        </div>
                        <div>
                            <p>{product_desc}</p>
                        </div>
                    </div>
                    <div className='product_desc_name shadow my-3'>
                        <h2>{product_name}</h2>
                        <div className='text-end pt-2'>
                            <span className="btn btn-orange" onClick={() => { addToCart() }} ><i className="fas fa-shopping-cart text-white mx-1"></i> Add to Cart</span>
                        </div>
                    </div>
                    <div className='product_desc_name shadow'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.0662432461572!2d67.11264271447895!3d24.929813148615132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338b8d4494c91%3A0xf864ed97b4a8ec0e!2sNED%20University%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2s!4v1643785626525!5m2!1sen!2s" width={"100%"} height={200} style={{ border: 0 }} allowFullScreen loading="lazy">
                        </iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DescCard
