import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid p-0">
                    <a className="navbar-brand media-padding" href="#"><span className="text-Red fs-3 fw-bold">CRS</span><span className="text-dark fs-3 fw-bold px-1">STORE</span></a>
                    <button className="navbar-toggler my-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item px-1">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item px-1">
                                <a className="nav-link" href="#">Shop</a>
                            </li>
                            <li className="nav-item px-1">
                                <a className="nav-link" href="#">About Us</a>
                            </li>
                            <li className="nav-item px-1">
                                <a className="nav-link" href="#">Contact Us</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search here..." aria-label="Search here..." aria-describedby="button-addon2" />
                                <button className="btn bg-Red text-white" type="button" id="button-addon2"><i class="fas fa-search"></i></button>
                            </div>
                        </form>
                        <div className="bg-Red py-4 px-3 cart">
                            <span className='text-white px-1'>
                                <i class="fas fa-shopping-cart"></i>
                            </span>
                            <span className='text-white ps-1'>
                                0
                            </span>
                            <span className='text-white px-1'>
                                item(s)
                            </span>
                        </div>
                    </div>


                </div>
            </nav>
        </>
    )
}

export default Navbar