import React, { useState, useEffect, useContext } from 'react'
import Footer from './Footer'
import '../Stylesheets/Loader.css'
import Carousel from './User/Carousel';
import { Link, useNavigate } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";


const Login = () => {
    const [Loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({ email: "", password: "" });

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        
        setLoading(true)
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        // setLoading(false)
        console.log(json);

        const response2 = await fetch("http://localhost:5000/api/auth/getallusers", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json2 = await response2.json();
        localStorage.setItem("allUsers", JSON.stringify(json2));
        console.log(json2)

        if (json.success) {
            localStorage.setItem('token', json.authToken)
            const response = await fetch("http://localhost:5000/api/auth/getuser", {
                method: 'GET',
                headers: {
                    'auth-token': localStorage.getItem('token')
                }
            });
            const userDetails = await response.json();
            localStorage.setItem('user_name', userDetails.firstname)
            localStorage.setItem('user_role', userDetails.role)
            localStorage.setItem('userDetails', JSON.stringify(userDetails))
            navigate('/')
        } else {
            alert('Invalid credentials')
        }

    }

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
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' onChange={onChange} />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" name='password' onChange={onChange} />
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
