import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer>
            <div className='forest'>
                {/* forest image here */}
            </div>
            <div className='footer-callToAction'>
                {/* Call image here */}
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