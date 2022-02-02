import React, { useState } from 'react';
import WishContext from './wishContext';

const ProductState = (props) => {

    const host = "http://localhost:5000"

    const wishInitial = []
    const [wishList, setWishList] = useState(wishInitial)

    // Get Cart Items

    const getWishList = async () => {
        // TODO API CALL
        const response = await fetch(`${host}/api/wish/getwish`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
        });
        const json = await response.json()
        setWishList(json)

    }

    // Add to Wish list

    const addToWish = async (id, name, price) => {
        const response = await fetch(`${host}/api/wish/addtowish/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ price, name })
        });
        const json = await response.json();
        console.log(json);
    }

    // Delete item

    const deleteWish = async (id) => {
        const response = await fetch(`${host}/api/wish/deletewish/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
        });
        const newCartItems = wishList.filter((cartItem) => { return cartItem._id !== id })
        setWishList(newCartItems)
    }

    // Empty Cart

    const emptyWish = async (id) => {
        const response = await fetch(`${host}/api/cart/emptycart`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
        });
        const newCartItems = wishList.filter((cartItem) => { return cartItem.user !== id })
        setWishList(newCartItems)
    }

    return (
        <WishContext.Provider value={{ wishList, getWishList, addToWish, deleteWish, emptyWish }}>
            {props.children}
        </WishContext.Provider>
    )
}

export default ProductState