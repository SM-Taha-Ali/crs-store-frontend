import React from 'react'
import '../../Stylesheets/App.css'

const Carousel = () => {
    return (
        <div className='MainCarousel'>
            <div id="carouselExampleControls" className="carousel slide carousel-ht" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://i.pinimg.com/originals/49/1e/1e/491e1ead668a27500556d68dd7a3c86b.jpg" style={{width:"100%"}} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.pinimg.com/originals/49/1e/1e/491e1ead668a27500556d68dd7a3c86b.jpg" style={{width:"100%"}} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.pinimg.com/originals/49/1e/1e/491e1ead668a27500556d68dd7a3c86b.jpg" style={{width:"100%"}} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev d-none" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next d-none" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel
