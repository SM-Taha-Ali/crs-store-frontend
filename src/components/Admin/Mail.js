import React, { useContext, useEffect, useState } from 'react';
import mailContext from '../../context/products/mailContext';
import '../../Stylesheets/Order.css'
import MailCard from './MailCard';

const Mail = () => {

    const context = useContext(mailContext)
    const { mails, getMails, deleteMail } = context

    useEffect(() => {
        getMails()
    }, []);

    return (
        <>
            <div className="container">
                <div className="">
                    <h1 className='pt-2 pb-4 text-center text-Red'>FEEDBACKS</h1>
                    <div className='row g-0'>
                        {mails.map((mail)=>{
                            return <MailCard name={mail.name} message={mail.message} deleteMail={deleteMail} id={mail._id}/>
                        })}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Mail
