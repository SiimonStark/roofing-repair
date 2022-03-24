import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer>
            <div className='footer-callToAction'>
                <h2>BIGFOOT Roofing</h2>
                <h3>Call us today</h3>
                <h3>541-890-6463</h3>
            </div>
            <div className='footer-links'>
                <div className='links-top'>
                    <FontAwesomeIcon icon={faInstagram} />
                    <p>
                        Leave a Review
                        <span className='starGroup'>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </span>
                    </p>
                </div>
                <div className='divider-bar' />
                <div className='links-bottom'>
                    <Link href='/'>Careers</Link>
                    <Link href='/'>Service Area</Link>
                    <Link href='/'>Veteran Program</Link>
                    <Link href='/'>Commercial</Link>
                    <Link href='/'>Residential</Link>
                    <Link href='/'>FAQ</Link>
                </div>
                <div className='copyright'>
                    <small>
                        ©2022 All Rights Reserved
                    </small>
                </div>
            </div>
        </footer>
    );
}

export default Footer;