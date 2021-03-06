import React, { useState } from 'react'
import Carousel from './User/Carousel';
import Footer from './Footer'
import { useNavigate } from "react-router-dom";


const Register = () => {

    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({ firstname: "", lastname: "", email: "", password: "", confirmpassword: "", phoneno: "", });

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
        console.log(credentials.lastname)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch("http://localhost:5000/api/auth/create-user", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstname: credentials.firstname,
                lastname: credentials.lastname,
                email: credentials.email,
                password: credentials.password,
                phoneno: credentials.phoneno
            })
        });
        const json = await response.json();
        console.log(json);

        if (json.success){
            navigate('/login')
        } else{
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
                    <h1 className='my-3'><span className="text-Red">Sign</span> Up</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="row g-0">
                            <div className="col-md-6 col-sm-12 pe-3 py-2">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
                                    <input type="text" className="form-control" id="firstname" name='firstname' onChange={onChange}  required minLength={3}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Last Name</label>
                                    <input type="text" className="form-control" id="lastname" name='lastname' onChange={onChange} required minLength={3}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name='email' onChange={onChange} required/>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12  py-2">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" name='password' onChange={onChange} required minLength={5}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                                    <input type="password" className="form-control" id="confirmpassword" name='confirmpassword' onChange={onChange} required minLength={5}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Phone No</label>
                                    <div className="input-group flex-nowrap">
                                        <span className="input-group-text" id="addon-wrapping">+92</span>
                                        <input type="text" className="form-control" name='phoneno' id='phoneno' onChange={onChange} required/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-2 mb-3 d-flex justify-content-end">
                            <button type="submit" className="btn btn-Red ">Create Account</button>
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

export default Register
