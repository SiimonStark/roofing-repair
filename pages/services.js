import styles from '../styles/Services.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faCircleRight, faCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

const services = () => {
    return (
        <div className="services">
            <section className={styles.consultation}>
                <div className={styles.heroImage}>
                    <img src="/consultationHero.jpeg" alt="hero image of paperwork or sketch" />
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
            <section className={styles.materials}>
                <h3>Material Types We Specialize In</h3>
                <hr />
                <div className={styles.gallery}>
                    <div className={styles.controls}>
                        <div className={styles.content}>
                            <img src='/commercial.jpg' />
                            <article className={styles.contentText}>
                                <h4>Shingles</h4>
                                <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem</p>
                            </article>
                        </div>
                        <div className={styles.controlsLeft}>
                            <FontAwesomeIcon icon={faCircleLeft} />
                        </div>
                        <div className={styles.controlsRight}>
                            <FontAwesomeIcon icon={faCircleRight} />
                        </div>
                        <div className={styles.controlsMarker}>
                            <FontAwesomeIcon id="active" className={styles.active} icon={faCircle} />
                            <FontAwesomeIcon icon={faCircle} />
                            <FontAwesomeIcon icon={faCircle} />
                            <FontAwesomeIcon icon={faCircle} />
                            <FontAwesomeIcon icon={faCircle} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default services;