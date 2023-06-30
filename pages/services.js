import Head from 'next/head';
import Image from 'next/image'
import { ServiceGallery } from '../components/ServiceGallery';
import styles from '../styles/Services.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faCircleRight, faCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

const services = () => {
    return (
        <div className="services">
            <section className={styles.consultation}>
                <div className={styles.heroImage}>
                    <Image
                        src="/consultation_sketch.jpg" alt="hero image of paperwork or sketch"
                        height={400}
                        width={800}
                    />
                </div>
                <article className="heroText">
                    <h3>Consultation:</h3>
                    <div>
                        <p>When you need to plan your next project, you can count on the help of our experienced team to assist you in making the right call for your project.</p>
                        <br />
                        <p>We will work with you to turn your vision into a reality. We pride ourselves on our practicality.</p>
                    </div>
                    <div className={styles.callLink}>
                        <a href="call:15418906463">
                            541-890-6463
                            <FontAwesomeIcon icon={faPhone} />
                        </a>
                    </div>
                </article>
            </section>
            <ServiceGallery />
        </div>
    );
}

export default services;