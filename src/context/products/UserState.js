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
        return json
    }

    const updateUser = async (id, status, role) => {
        const response = await fetch(`${host}/api/auth/updateuser`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, status,  role })
        });

        // Logic to edit in client side

        let newUser = JSON.parse(JSON.stringify(user))

        for (let index = 0; index < newUser.length; index++) {
            const element = user[index];
            if (element._id == id) {
                newUser[index].status = status;
                newUser[index].role = role;
                break;
            }
        }
        setUser(newUser);
    }

    const getallusers = async () => {
        const response = await fetch("http://localhost:5000/api/auth/getallusers", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();
        setUser(json);
    }


    return (
        <UserContext.Provider value={{ user, getUserById, updateUser, getallusers }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default ProductState