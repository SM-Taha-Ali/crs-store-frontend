import React, { useState } from 'react';
import UserContext from './userContext';

const ProductState = (props) => {

    const host = "http://localhost:5000"

    const usersInitial = [ ]
    const [user, setUser] = useState(usersInitial)

    // Get Cart Items

    const getUserById = async (user_id) => {
        // TODO API CALL
        const response = await fetch(`${host}/api/auth/getuserbyid`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_id })
        });
        const json = await response.json()
        setUser(json)
    }



    return (
        <UserContext.Provider value={{ user, getUserById }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default ProductState