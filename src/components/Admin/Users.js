import React, { useContext, useState, useRef, useEffect, useAsync } from 'react'
import userContext from '../../context/products/userContext';
import UserTr from './UserTr'

const Users = () => {

    var allUsers = JSON.parse(localStorage.getItem("allUsers") || "[]");

    const modalRef = useRef(null)

    const context = useContext(userContext);
    const { user, updateUser, getallusers, getUserById } = context

    useEffect(() => {
        getallusers()
    }, []);
    
    
    const [userRole, setuserRole] = useState(null);
    
    const [userStatus, setuserStatus] = useState("Enable");
    
    const [userID, setuserID] = useState(null);
    
    const statusUpdate = (e) => {
        setuserStatus(e.target.value)
    }
    
    const roleUpdate = (e) => {
        setuserRole(e.target.value)
    }
    
    const userUpdate = (id) => {
        modalRef.current.click();
        setuserID(id)
    }

    const finalUpdate = () => {
        if (userStatus == "Enable") {
            updateUser(userID, true, userRole.toString())
        } else if (userStatus == "Disable") {
            updateUser(userID, false, userRole.toString())
        }
    }


    return (
        <>
            <button ref={modalRef} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#userModal">
                Launch static backdrop modal
            </button>

            <div className="modal fade" id="userModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Update Product</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row g-0">
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Status</label>
                                        <select className="form-control" onChange={statusUpdate} defaultValue={userStatus}>
                                            <option value={"Enable"} >Enable Account</option>
                                            <option value={"Disable"}>Disable Account</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Role</label>
                                        <select className="form-control" onChange={roleUpdate} defaultValue={userRole} >
                                            <option value={"User"} defaultChecked>User</option>
                                            <option value={"Admin"}>Admin</option>
                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Back</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => finalUpdate()}>Update</button>
                        </div>
                    </div>
                </div>
            </div>

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
                                <th scope="col">Status</th>
                                <th scope="col">Role</th>
                                <th scope="col" className='text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                user.map((userDetail, i) => {
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
