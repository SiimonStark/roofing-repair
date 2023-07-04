import { ContactWidget } from '../components/ContactWidget';
import styles from '../styles/Home.module.css';

const contact_us = () => {
    return (
        <div className="contact_us">
            <div className={styles.contactForm}>
                <ContactWidget />
            </div>
        </div>
    );
}

export default contact_us;