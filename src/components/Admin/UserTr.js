import React from 'react';

const UserTr = (props) => {
    const { index, userDetail } = props
    return <tr>
        <th scope="row">{index+1}</th>
        <td>{userDetail.firstname}</td>
        <td>{userDetail.lastname}</td>
        <td>{userDetail.email}</td>
        <td>{userDetail.phoneno}</td>
        <td>{userDetail.role ? "Admin" : "User"}</td>
        <td className='text-center'>
            {
                userDetail.role ? "" : 
                <button className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="far fa-ban text-Red"></i></button>
            }
        </td>
    </tr>;
};

export default UserTr;
