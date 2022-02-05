import React, { useState } from 'react';
import MailContext from './mailContext';

const ProductState = (props) => {

    const host = "http://localhost:5000"

    const mailsInitial = [ ]
    const [mails, setMails] = useState(mailsInitial)

    // Get Payment Info

    const getMails = async () => {
        // TODO API CALL
        const response = await fetch(`${host}/api/mail/getmails`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = await response.json()
        setMails(json)
    }


    // Place Order

    const sendEmail = async (name, email, message) => {
        // TODO API CALL
        const response = await fetch(`${host}/api/mail/sendemail`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ name, email, message })
        });
        const mail = await response.json();
        setMails(mails.concat(mail))
    }


    const deleteMail = async (id) => {
        const response = await fetch(`${host}/api/mail/deletemail/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const newMails = mails.filter((mail) => { return mail._id !== id })
        setMails(newMails)
    }

    return (
        <MailContext.Provider value={{ mails, sendEmail, getMails, deleteMail }}>
            {props.children}
        </MailContext.Provider>
    )
}

export default ProductState