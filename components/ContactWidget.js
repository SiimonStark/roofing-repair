import React, { useState, useEffect, useRef } from 'react';
import MessageSuccess from '../components/MessageSuccess';
import emailjs from '@emailjs/browser';
import styles from '../styles/ContactWidget.module.css';


export const ContactWidget = () => {
    const [fields, setFields] = useState({});
    const [next, setNext] = useState(false);
    const [messageSent, setMessageSent] = useState(false);

    const form = useRef();

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
            console.log('not done');
            return;
        }
        console.log({ fields });

        onSuccess();
        emailjs.sendForm('service_ya02usr', 'confirm_request_template', form.current, 'um3qH1JMJI9bgUhEx')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    const onSuccess = () => {
        setMessageSent(true);

        setTimeout(() => {
            setMessageSent(false);
            setNext(false);
        }, 3500)
    }

    const fieldsDetails = () => {
        return (
            <div className={styles.fieldInputs}>
                <input type='text' name='from_name' placeholder='Name' onChange={handleChange} />
                <input type='text' name='phone' placeholder='Phone Number' onChange={handleChange} />
                <input type='email' name='email' placeholder='Email' required onChange={handleChange} />
            </div>
        )
    }

    const fieldsMessage = () => {
        return (
            <div className={styles.fieldInputs}>
                <textarea name='message' placeholder='Include your details about your request here' onChange={handleChange}></textarea>
            </div>
        )
    }

    const buttons = () => {
        if (!next) {
            return (
                <div className={styles.buttonRow}>
                    <input type='button' value='Next' onClick={() => setNext(true)} />
                </div>
            )
        } else {
            return (
                <div className={styles.buttonRow}>
                    <input type='button' value='Back' onClick={() => setNext(false)} />
                    <input type='submit' onSubmit={sendEmail} />
                </div>
            )
        }
    }

    return (
        <form ref={form} onSubmit={sendEmail}>
            {messageSent ? <MessageSuccess /> : null}
            {messageSent ? <div className={styles.backDrop}></div> : null}
            <div className={styles.formTitle}>
                <h3>Get a FREE Estimate Today!</h3>
                <h5>No cost, zero commitments!</h5>
            </div>
            <div className={styles.formInputGroup}>
                {!next ? fieldsDetails() : fieldsMessage()}
                <small>* We do not share your personal info with 3rd parties</small>
                {buttons()}
            </div>
        </form>
    )
}
