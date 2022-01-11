import React from 'react'
import '../App.css'
import Accordion from './Accordion'
import Card from './Card'

const Home = () => {
    return (
        <>
            <div className="container bg-white p-3">
                <div className="row">
                    <div className="col-lg-9 col-md-12 col-sm-12">
                        <div className="heading ps-2">
                            LATEST PRODUCTS
                            <hr />
                        </div>
                        <div className="row g-0">
                            <div className="col-lg-4 col-md-6 p-2"><Card /></div>
                            <div className="col-lg-4 col-md-6 p-2"><Card /></div>
                            <div className="col-lg-4 col-md-6 p-2"><Card /></div>
                            <div className="col-lg-4 col-md-6 p-2"><Card /></div>
                            <div className="col-lg-4 col-md-6 p-2"><Card /></div>
                            <div className="col-lg-4 col-md-6 p-2"><Card /></div>
                        </div>

                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12">
                        <div className="heading">
                            TOP <span className="text-Red">5</span> POPULAR
                            <hr />
                            <div className="py-2">

                                <Accordion />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="lol">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quis itaque saepe, recusandae illo cupiditate reiciendis cumque provident nisi maiores dicta quae voluptas eligendi molestiae repellat nostrum dolorem labore optio!</p>
            </div>
        </>
    )
}

export default Home
