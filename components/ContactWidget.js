import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../styles/Home.module.css';

export const ContactWidget = () => {
    const [fields, setFields] = useState({});
    const [next, setNext] = useState(false);

    useEffect(() => {

    }, [next]);

    const handleChange = (e) => {
        let updatedValue = {};
        updatedValue[e.target.name] = e.target.value;
        setFields(fields => ({
            ...fields,
            ...updatedValue
        }));
    }

    const sendEmail = (e) => {
        e.preventDefault();

        console.log(fields);
        if (!next) {
            console.log('not done')
        } else {
            console.log('check required fields')
        }
        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        //     .then((result) => {
        //         console.log(result.text);
        //     }, (error) => {
        //         console.log(error.text);
        //     });
    };

    const fieldsDetails = () => {
        return (
            <div>
                <input type='text' name='from_name' placeholder='Name' onChange={handleChange} />
                <input type='text' name='phone' placeholder='Phone Number' onChange={handleChange} />
                <input type='email' name='email' placeholder='Email' required onChange={handleChange} />
            </div>
        )
    }

    const fieldsMessage = () => {
        return (
            <div>
                <textarea name='message' placeholder='Include your details about your request here' onChange={handleChange}></textarea>
            </div>
        )
    }

    const buttons = () => {
        if (!next) {
            return (
                <input type='button' value='Next' onClick={() => setNext(true)} />
            )
        } else {
            return (
                <div>
                    <input type='button' value='Back' onClick={() => setNext(false)} />
                    <input type='submit' onSubmit={sendEmail} />
                </div>
            )
        }
    }

    return (
        <form onSubmit={sendEmail}>
            <div className={styles.formTitle}>
                <h3>Get a FREE Estimate Today!</h3>
                <h5>No cost, zero commitments!</h5>
            </div>
            <div className={styles.formInputGroup}>
                {!next ? fieldsDetails() : fieldsMessage()}
                <small>* We do not share your personal info with 3rd parties</small>
                {buttons()}
                {/* {!next ? <input type='button' value='Next' onClick={() => setNext(true)} /> : <input type='submit' onSubmit={sendEmail} />} */}
            </div>
        </form>
    )
}
