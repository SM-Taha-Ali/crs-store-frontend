import React from 'react';
import '../../Stylesheets/Order.css'


const MailCard = (props) => {
    const { name, message, deleteMail, id } = props

    const deleteFeedback = () => {
        deleteMail(id)
    }

    return (<div className='col-md-4 p-3'>
        <div className="mail-card shadow">
            <h3 className='text-Red'>{name}</h3>
            <div className='mail-card-body' >
                <h5 className=''>Message</h5>
                <p>{message}</p>
            </div>
            <div className="text-end">
            <button className='btn Order_Status_Btn Wrong mx-2' onClick={(e) => deleteFeedback(e)} value={4}><i className="fal fa-times text-Red"></i></button>
            </div>
        </div>

    </div>);
};

export default MailCard;
