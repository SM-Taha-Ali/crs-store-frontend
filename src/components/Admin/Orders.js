import React from 'react'

const Orders = () => {
    return (
        <>
            <div className="container">


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
                    <h1 className='pt-2 pb-4 text-center text-Red'>ORDERS</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">SNO</th>
                                <th scope="col">Customer</th>
                                <th scope="col">Product</th>
                                <th scope="col">Status</th>
                                <th scope="col" className='text-center'>Update Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Taha</td>
                                <td>Nvidia GTX 1060</td>
                                <td>Shipped</td>
                                <td className='text-center'>
                                    <button className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="far fa-edit text-success"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Taha</td>
                                <td>Nvidia GTX 1060</td>
                                <td>Delievered</td>
                                <td className='text-center'>
                                    <button className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="far fa-edit text-success"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Taha</td>
                                <td>Nvidia GTX 1060</td>
                                <td>Packed</td>
                                <td className='text-center'>
                                    <button className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="far fa-edit text-success"></i></button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}

export default Orders
