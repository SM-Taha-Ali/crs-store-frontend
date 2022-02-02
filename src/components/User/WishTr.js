import React, {useState} from 'react';

const CartTr = (props) => {
    const {wish, deleteWish} = props
    let {index} = props

    const delItem = () => {
        console.log('hello')
        deleteWish(wish._id)
    }

    return (
        <tr>
            <th scope="row">{index+1}</th>
            <td>{wish.name}</td>
            <td>{wish.price}</td>
            <td className='text-center'>
                <span className="btn btn-orange" onClick={delItem}><i className="far fa-trash-alt text-white"></i></span>
            </td>
        </tr>
    )
};

export default CartTr;
