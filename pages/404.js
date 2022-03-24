import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        console.log('useEffect ran');
        setTimeout(() => {
            // router.go(-1) //Go back one
            router.push('/');
        }, 3000)
    }, []);

    return (
        <div className='not-found'>
            <h1>No Bigfoot here...</h1>
            <h2>That page cannot be found</h2>
            <p>Go back to the <Link href='/'>Home Page</Link></p>
        </div>
    );
}

export default NotFound;