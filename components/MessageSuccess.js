import React from 'react';
import styles from '../styles/ContactWidget.module.css';


const MessageSuccess = () => {
    return (
        <div className={styles.MessageSuccess}>
            <p>Thank you, email sent 📫</p>
        </div>
    )
}

export default MessageSuccess;