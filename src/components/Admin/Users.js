import React from 'react'
import UserTr from './UserTr'

const Users = () => {

    
    const allUsers = JSON.parse(localStorage.getItem("allUsers") || "[]");


    return (
        
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
                            {/* <th scope="col" className='text-center'>Action</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUsers.map((userDetail, i) => {
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
