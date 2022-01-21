import React from 'react'
import '../../Stylesheets/App.css'

const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide carousel-ht" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="http://demo.ariestheme.com/themes/sm_igame/media/wysiwyg/slideshow/home-default/slider2-home.png?filmoretime=1641711608536" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="http://demo.ariestheme.com/themes/sm_igame/media/wysiwyg/slideshow/home-default/slider1-home-1.png?filmoretime=1641711608536" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="http://demo.ariestheme.com/themes/sm_igame/media/wysiwyg/slideshow/home-default/slider3-home-1.png?filmoretime=1641711608537" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel
