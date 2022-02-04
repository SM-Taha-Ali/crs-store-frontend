import React from 'react'
import Footer from '../Footer';
import Carousel from './Carousel';
import { useLocation } from 'react-router-dom'
import DescCard from './DescCard';


const ProductDesc = () => {
    const location = useLocation()
    const name = location.state.name
    const id = location.state.id
    const price = location.state.price
    const img = location.state.img
    const desc = location.state.desc
    return <div>
        <div className="not-main">
            <Carousel />
        </div>
        <div className="contact-main rounded">
            <div className="container bg-white p-4 Rounded">
                <h1 className='my-3 p-2'>Product <span className="text-Red">Description</span></h1>
                <div className="desc_card">
                    <DescCard product_id={id} product_img={img} product_desc={desc} product_name={name} product_price={price} />
                </div>
            </div>
            <Footer></Footer>
        </div>
    </div>;
};

export default ProductDesc;
