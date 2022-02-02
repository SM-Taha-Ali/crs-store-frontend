import React, {useState} from 'react';

const CartTr = (props) => {
    const {cartItem, updateCartItem, deleteItem} = props
    let {index} = props

    const [cartItemQuantity, setCartItemQuantity] = useState({ quantity: "" });

    const onChange = (e) => {
        setCartItemQuantity({ ...cartItemQuantity, [e.target.name]: e.target.value })
        console.log(cartItemQuantity.quantity)
        
    }

    const updateQuantity = () => {
        console.log('hello')
        updateCartItem(cartItem._id, cartItemQuantity.quantity)
    }

    const delItem = () => {
        console.log('hello')
        deleteItem(cartItem._id)
    }

    return (
        <tr>
            <th scope="row">{index+1}</th>
            <td>{cartItem.name}</td>
            <td>{cartItem.price}</td>
            <td className='pe-3'>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" name='quantity' placeholder={cartItem.quantity} aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={onChange} />
                    <span className="input-group-text bg-Red text-white" id="basic-addon2" onClick={updateQuantity}><i className="fas fa-redo"></i></span>
                </div>
            </td>
            <td>{cartItem.price*cartItem.quantity}</td>
            <td className='text-center'>
                <span className="btn btn-orange" onClick={delItem}><i className="far fa-trash-alt text-white"></i></span>
            </td>
        </tr>
    )
};

export default CartTr;
