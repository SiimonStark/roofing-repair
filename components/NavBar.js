import Link from 'next/link';
import Image from 'next/image';

const NavBar = () => {
    return (
        <nav>
            <div className='branding'>
                <div className='logo'>
                    <Link href="/">
                        <Image src='/logo_1.png' width={128} height={77} />
                    </Link>
                </div>
                <div className='links'>
                    <Link href="/">Home</Link>
                    <Link href="/about_us">About Us</Link>
                    <Link href="/services">Services</Link>
                    <Link href="/contact_us">Contact Us</Link>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;