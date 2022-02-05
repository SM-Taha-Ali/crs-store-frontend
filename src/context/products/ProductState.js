import React, { useState } from 'react';
import ProductContext from './productContext';

const ProductState = (props) => {

    const host = "http://localhost:5000"

    const productsInitial = [ ]
    const [products, setProducts] = useState(productsInitial)
    const [filterProducts, setFilterProducts] = useState(products)

    // Get Products

    const getProduct = async () => {
        // TODO API CALL
        const response = await fetch(`${host}/api/products/getproduct`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = await response.json()
        setProducts(json)
    }

    // Add Product

    const addProduct = async (name, description, price, quantity, category, discount, img) => {
        // TODO API CALL
        const response = await fetch(`${host}/api/products/addproduct`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, description, price, quantity, category, discount, img })
        });
        const product = await response.json();
        setProducts(products.concat(product))
    }

    // Delete Product
    const deleteProduct = async (id) => {
        const response = await fetch(`${host}/api/products/deleteproduct/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const newProducts = products.filter((product) => { return product._id !== id })
        setProducts(newProducts)
    }

    // Edit Product 
    // API CALL
    const editProduct = async (id, name, description, price, quantity, category, discount) => {
        const response = await fetch(`${host}/api/products/updateproduct/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, description, price, quantity, category, discount })
        });

        // Logic to edit in client side

        let newProducts = JSON.parse(JSON.stringify(products))

        for (let index = 0; index < newProducts.length; index++) {
            const element = products[index];
            if (element._id == id) {
                newProducts[index].name = name;
                newProducts[index].description = description;
                newProducts[index].price = price;
                newProducts[index].quantity = quantity;
                newProducts[index].category = category;
                newProducts[index].discount = discount;
                break;
            }
        }
        setProducts(newProducts);
    }

    return (
        <ProductContext.Provider value={{ products, setProducts, getProduct, addProduct, deleteProduct, editProduct, filterProducts, setFilterProducts  }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductState