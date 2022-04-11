import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>BIGFOOT Roofing</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/BF_Icon.png" />
      </Head>

      <div className={styles.hero}>
        <div className={styles.heading}>
          <h1>
            Professional workmanship, <br />
            At reasonable pricing
          </h1>
        </div>
        <div className={styles.contactForm}>
          <form>
            <div className={styles.formTitle}>
              <h3>Get a FREE Estimate Today!</h3>
              <h5>No cost, zero commitments!</h5>
            </div>
            <div className={styles.formInputGroup}>
              <input type='text' name='name' placeholder='Name' />
              <input type='text' name='phone' placeholder='Phone Number' />
              <input type="email" name="email" placeholder='Email' pattern=".+@globex\.com" required />
              <small>* We do not share your personal info with 3rd parties</small>
              <input type='submit' value='Submit' />
            </div>
          </form>
        </div>
      </div>
      <div className={styles.briefing}>
        <article className={styles.briefingTextleft}>
          <div className={styles.briefingText}>
            <h3>Mission and Vision</h3>
            <p>As Southern Oregon’s only premier Veteran owned and operated roofing company, we provide the best quality products, professional workmanship and warranties. And that’s the sasquatch promise!</p>
          </div>
          <div className={styles.briefingImage}>
            <img src='https://images.unsplash.com/photo-1505027368917-30e7dd23ced4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjJ8QUFMc3ltbHRmMXd8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60' />
          </div>
        </article>
        <article className={styles.briefingTextRight}>
          <div className={styles.briefingImage}>
            <img src='https://images.unsplash.com/photo-1603239564387-c5b5ea6f635e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mzh8QUFMc3ltbHRmMXd8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60' />
          </div>
          <div className={styles.briefingText}>
            <h3>Professional Service</h3>
            <p>At Bigfoot Roofing we understand that every home is as unique as the family who lives inside them. That is why we are committed to handling every project on a case by case basis. On our fist meeting we listen to the homeowners concerns. We then physically inspect your entire roofing system, inside and out. We identify high risk leak areas, signs of previous leaks and mold, structural integrity and proper air flow to ensure that your home will breathe properly and stand strong for many years to come.
            </p>
            <p>Call us today at (541) 890-6463 and we will walk you through your roofing system step by step. The only question you’ll have afterwards is “ Where in the woods is Sassy the Sasquatch?” </p>
          </div>
        </article>
      </div>
      <div className='callToAction'>
        <h2>Call us today 541-890-6463</h2>
      </div>
      <div className='ourServices'>
        <div className='heading'>
          <h2>Our Services</h2>
          <Image src='/logo_1.png' width={128} height={77} />
        </div>
        <div className='cards'>
          <article className='card'>
            <Image src='/vercel.svg' width={300} height={300} />
            <div>
              <p>Consultation <FontAwesomeIcon icon={faChevronRight} /></p>
            </div>
          </article>
          <article className='card'>
            <Image src='/vercel.svg' width={300} height={300} />
            <div>
              <p>Residential <FontAwesomeIcon icon={faChevronRight} /></p>
            </div>
          </article>
          <article className='card'>
            <Image src='/vercel.svg' width={300} height={300} />
            <div>
              <p>Commercial <FontAwesomeIcon icon={faChevronRight} /></p>
            </div>
          </article>
          <article className='card'>
            <Image src='/vercel.svg' width={300} height={300} />
            <div>
              <p>Improvement <FontAwesomeIcon icon={faChevronRight} /></p>
            </div>
          </article>
          <article className='card'>
            <Image src='/vercel.svg' width={300} height={300} />
            <div>
              <p>Cleaning <FontAwesomeIcon icon={faChevronRight} /></p>
            </div>
          </article>
          <article className='card'>
            <Image src='/vercel.svg' width={300} height={300} />
            <div>
              <p>Repair <FontAwesomeIcon icon={faChevronRight} /></p>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}
