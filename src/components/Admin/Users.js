import React, { useContext, useState } from 'react'
import userContext from '../../context/products/userContext';
import UserTr from './UserTr'

const Users = () => {


    var allUsers = JSON.parse(localStorage.getItem("allUsers") || "[]");


    const context = useContext(userContext);
    const { user, updateUser } = context


    const userUpdate = () => { }


    return (
        <>
            {/* <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Launch static backdrop modal
            </button>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Update Product</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Status</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown button
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Role</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Back</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={updateClick}>Update</button>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className='container'>
                <div className="">
                    <h1 className='mt-2 mb-4 text-Red text-center'>USERS</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">SNO</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone No</th>
                                <th scope="col">Role</th>
                                <th scope="col" className='text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allUsers.map((userDetail, i) => {
                                    return <UserTr key={userDetail._id} index={i} userDetail={userDetail} updateUser={updateUser} userUpdate={userUpdate} />
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </>


    )
}

export default Users
