import React, {useState} from 'react';

const UserTr = (props) => {
    const { index, userDetail, updateUser, userUpdate } = props
    const [useUpdate, setuseUpdate] = useState({status:userDetail.status, role:userDetail.role});


    return <tr>
        <th scope="row">{index+1}</th>
        <td>{userDetail.firstname}</td>
        <td>{userDetail.lastname}</td>
        <td>{userDetail.email}</td>
        <td>{userDetail.phoneno}</td>
        <td>{userDetail.status == true ? "Enabled" : "Disabled"}</td>
        <td>{userDetail.role}</td>
        <td className='text-center'>
            {
                userDetail.role == "Owner" ? "" : 
                <div>
                    <i className="far fa-edit text-success px-2 cursor-pointer" onClick={()=> {userUpdate(userDetail._id)}}></i>
                </div>
            }
        </td>
    </tr>;
};

export default UserTr;
