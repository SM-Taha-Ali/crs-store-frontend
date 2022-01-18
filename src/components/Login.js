import React from 'react'
import Footer from './Footer'
import Carousel from './Carousel';
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <div className="not-main">
                <Carousel />
            </div>
            <div className="container">
                <div className='login-heading'>LOGIN</div>
            </div>
            <div className="container login-main">
                <div className="login-card">
                    <h1 className='text-center'><span className='text-Red'>CRS</span> STORE</h1>
                    <h1 className='my-3'><span className="text-Red">Sign</span> in</h1>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mt-5 mb-3 d-flex justify-content-between align-items-center">
                            <p>Don't have account? <Link to="/register" className='colorRegister'>Register Now!</Link></p>
                            <button type="submit" className="btn btn-Red ">Login</button>
                        </div>
                    </form>
                </div>
                <div className='my-5'>
                    <Footer />
                </div>
            </div>

        </>
    )
}

export default Login
