import React, { useContext, useEffect, useState, useRef } from 'react';
import productContext from '../../context/products/productContext';
import ProductTr from './ProductTr';
import Card from '../User/Card';


const Products = () => {
    const context = useContext(productContext);
    const { products, getProduct, addProduct, editProduct } = context
    useEffect(() => {
        getProduct()
    }, [])

    const ref = useRef(null)

    const [product, setProduct] = useState({ name: "", description: "", price: "", quantity: "", category: "", discount: "" })

    const onChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }

    const handleClick = (e) => {
        e.preventDefault()
        addProduct(product.name, product.description, product.price, product.quantity, product.category, product.discount)
        var nameInp = document.getElementById("product_name")
        var quantityInp = document.getElementById("product_quantity")
        var priceInp = document.getElementById("product_price")
        var discountInp = document.getElementById("product_discount")
        var descInp = document.getElementById("product_description")
        var categoryInp = document.getElementById("product_category")
        nameInp.value = ''
        quantityInp.value = ''
        priceInp.value = ''
        discountInp.value = ''
        descInp.value = ''
        categoryInp.value = ''
    }

    const updateClick = () => {
        editProduct(product._id, product.name, product.description, product.price, product.quantity, product.category, product.discount)
    }

    const updateProduct = (currentProduct) => {
        ref.current.click();
        setProduct(currentProduct)
    }

    return (
        <>
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
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
                                <div className="row g-0">
                                    <div className="col-md-6 col-sm-12 pe-3 py-2">
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                            <input type="text" className="form-control" id="product_name" name='name' required onChange={onChange} value={product.name} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputPassword1" className="form-label">Quantity</label>
                                            <input type="number" className="form-control" id="product_quantity" name='quantity' required onChange={onChange} value={product.quantity} />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Price</label>
                                            <input type="number" className="form-control" id="product_price" name='price' required onChange={onChange} value={product.price} />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12  py-2">
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Discount</label>
                                            <input type="number" className="form-control" id="product_discount" name='discount' onChange={onChange} value={product.discount} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                                            <input type="text" className="form-control" id="product_description" name='description' onChange={onChange} value={product.description} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputPassword1" className="form-label">Category</label>
                                            <input type="text" className="form-control" id="product_category" name='category' required onChange={onChange} value={product.category} />
                                        </div>

                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Back</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={updateClick}>Update</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <h3 className="text-center pt-2 pb-3 text-Red">
                    ADD NEW PRODUCT
                </h3>
                <form>
                    <div className="row g-0">
                        <div className="col-md-6 col-sm-12 pe-3 py-2">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Name <span className="text-Red">*</span></label>
                                <input type="text" className="form-control" id="product_name" name='name' required onChange={onChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Quantity <span className="text-Red">*</span></label>
                                <input type="number" className="form-control" id="product_quantity" name='quantity' required onChange={onChange} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Price <span className="text-Red">*</span></label>
                                <input type="number" className="form-control" id="product_price" name='price' required onChange={onChange} />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12  py-2">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Discount</label>
                                <input type="number" className="form-control" id="product_discount" name='discount' onChange={onChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                                <input type="text" className="form-control" id="product_description" name='description' onChange={onChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Category <span className="text-Red">*</span></label>
                                <input type="text" className="form-control" id="product_category" name='category' required onChange={onChange} />
                            </div>

                        </div>
                    </div>

                    <div className="mt-2 mb-3 d-flex justify-content-end">
                        <button type="submit" className="btn btn-Red " onClick={handleClick}>Add Product</button>
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
                            {console.log(products)}
                            {
                                products.map((product, i)=>{
                                    return <ProductTr key={product._id} index={i} product={product} updateProduct = {updateProduct} />
                                })
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}

export default Products
