import React, { useContext } from 'react';
import productContext from '../../context/products/productContext';


const ProductTr = (props) => {
    const {product, updateProduct} = props
    let {index} = props
    const context = useContext(productContext);
    const {deleteProduct} = context;

    return <tr>
            <th scope="row">{index+1}</th>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td>{product.discount}</td>
            <td>{product.category}</td>
            <td className='text-center'>
                <i className="far fa-edit text-success px-2" onClick={()=> {updateProduct(product)}}></i>
                <i className="far fa-trash-alt text-Red px-2" onClick={() => {deleteProduct(product._id)}}></i>
            </td>
    </tr>;
};

export default ProductTr;
