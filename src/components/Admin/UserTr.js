import React, {useState} from 'react';

const UserTr = (props) => {
    const { index, userDetail, updateUser, userUpdate } = props
    const [useUpdate, setuseUpdate] = useState({status:userDetail.status, role:userDetail.role});

    const banUser = () => {
        setuseUpdate( {...useUpdate, status:false})
        updateUser(userDetail._id, useUpdate.status, useUpdate.role)
    }



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
                <div>
                    <i className="far fa-edit text-success px-2" onClick={()=> {userUpdate()}}></i>
                    <i className="far fa-ban text-Red px-2" onClick={()=>banUser()}></i>
                </div>
            }
        </td>
    </tr>;
};

export default UserTr;
