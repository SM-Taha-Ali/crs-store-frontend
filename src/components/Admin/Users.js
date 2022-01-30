import React from 'react'
import UserTr from './UserTr'

const Users = () => {

    
    const allUsers = JSON.parse(localStorage.getItem("allUsers") || "[]");


    return (
        
        <div className='container'>
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Update Status</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                            <div className="order-status">
                                    <div>
                                        <label htmlFor="customRange3" className="form-label">Set Order Status</label>
                                        <input type="range" className="form-range" min={1} max={4} step="1" id="customRange3" />
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p>Packed</p>
                                        <p>Shipped</p>
                                        <p>En-Route</p>
                                        <p>Delivered</p>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn2-Red">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
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
                                console.log(userDetail)
                                return <UserTr key={userDetail._id} index={i} userDetail={userDetail}/>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users
