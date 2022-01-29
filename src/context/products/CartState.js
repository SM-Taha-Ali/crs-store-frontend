import React, { useState } from 'react';
import CartContext from './cartContext';

const ProductState = (props) => {

    const host = "http://localhost:5000"

    const cartInitial = [ ]
    const [cartItems, setCartItems] = useState(cartInitial)

    // Get Cart Items

    const getCartItems = async () => {
        // TODO API CALL
        const response = await fetch(`${host}/api/cart//getitem`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
        });
        const json = await response.json()
        setCartItems(json)

    }

    //  Update Quantity

    const updateCartItem = async (id, quantity) => {
        const response = await fetch(`${host}/api/cart/updateitem/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ quantity })
        });

        // Logic to edit in client side

        let newCartItems = JSON.parse(JSON.stringify(cartItems))

        for (let index = 0; index < newCartItems.length; index++) {
            const element = cartItems[index];
            if (element._id == id) {
                newCartItems[index].quantity = quantity;
                break;
            }
        }
        setCartItems(newCartItems);
    }

    // Delete item

    const deleteItem = async (id) => {
        const response = await fetch(`${host}/api/cart/deleteitem/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
        });
        const newCartItems = cartItems.filter((cartItem) => { return cartItem._id !== id })
        setCartItems(newCartItems)
    }

    return (
        <CartContext.Provider value={{ cartItems, getCartItems, updateCartItem, deleteItem }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default ProductState