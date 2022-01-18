import React from 'react'

const Users = () => {
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
                                <th scope="col">Password</th>
                                <th scope="col" className='text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>CRS</td>
                                <td>Clixicon</td>
                                <td>sskk8226@gmail.com</td>
                                <td>03302851161</td>
                                <td>skyline#123</td>
                                <td className='text-center'>
                                    <button className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="far fa-ban text-Red"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>CRS</td>
                                <td>Clixicon</td>
                                <td>sskk8226@gmail.com</td>
                                <td>03302851161</td>
                                <td>skyline#123</td>
                                <td className='text-center'>
                                    <button className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="far fa-ban text-Red"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>CRS</td>
                                <td>Clixicon</td>
                                <td>sskk8226@gmail.com</td>
                                <td>03302851161</td>
                                <td>skyline#123</td>
                                <td className='text-center'>
                                    <button className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="far fa-ban text-Red"></i></button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
        </div>
    )
}

export default Users
