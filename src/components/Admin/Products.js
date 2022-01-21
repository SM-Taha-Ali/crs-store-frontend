import React from 'react'

const Products = () => {
    return (
        <>
            <div className="container">
                <h3 className="text-center pt-2 pb-3 text-Red">
                    ADD NEW PRODUCT
                </h3>
                <form>
                    <div className="row g-0">
                        <div className="col-md-6 col-sm-12 pe-3 py-2">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Name <span className="text-Red">*</span></label>
                                <input type="text" className="form-control" id="" name='' required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Quantity <span className="text-Red">*</span></label>
                                <input type="number" className="form-control" id="" name='' required />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Price <span className="text-Red">*</span></label>
                                <input type="number" className="form-control" id="" name='' required />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12  py-2">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Discount</label>
                                <input type="number" className="form-control" id="" name='' />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                                <input type="text" className="form-control" id="" name='' />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Category <span className="text-Red">*</span></label>
                                <input type="text" className="form-control" id="" name='' required />
                            </div>

                        </div>
                    </div>

                    <div className="mt-2 mb-3 d-flex justify-content-end">
                        <button type="submit" className="btn btn-Red ">Add Product</button>
                    </div>
                </form>
                <div className="mt-5">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">SNO</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Discount</th>
                                <th scope="col">Category</th>
                                <th scope="col" className='text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Nvidia 1060 3GB</td>
                                <td>35000</td>
                                <td>12</td>
                                <td>5%</td>
                                <td>Graphics Card</td>
                                <td className='text-center'>
                                    <button className="btn"><i class="far fa-edit text-success"></i></button>
                                    <button className="btn"><i class="far fa-trash-alt text-Red"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>i3 9100f</td>
                                <td>12000</td>
                                <td>71</td>
                                <td>10%</td>
                                <td>Processor</td>
                                <td className='text-center'>
                                    <button className="btn"><i class="far fa-edit text-success"></i></button>
                                    <button className="btn"><i class="far fa-trash-alt text-Red"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}

export default Products
