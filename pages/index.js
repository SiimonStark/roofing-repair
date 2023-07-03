import React from 'react';
import Link from 'next/link';
import Image from "next/legacy/image";
import { ContactWidget } from '../components/ContactWidget';
import styles from '../styles/Home.module.css';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heading}>
          <h1>
            Professional workmanship, <br />
            At reasonable pricing
          </h1>
        </div>
        <div className={styles.contactForm}>
          <ContactWidget />
        </div>
      </div>
      <div className={styles.briefing}>
        <article>
          <div>
            <p>
              Call us today at (541) 890-6463 and we will walk you through your roofing system step by step.
            </p>
            <p>
              The only question you’ll have afterwards is “Where in the woods is Sassy the Sasquatch?”
            </p>
          </div>
        </article>
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
            <p>At Bigfoot Roofing we understand that every home is as unique as the family who lives inside them. That is why we are committed to handling every project on a case by case basis. On our fist meeting we listen to the homeowners concerns. We then physically inspect your entire roofing system, inside and out. We identify high risk leak areas, signs of previous leaks and mold, structural integrity and proper air flow to ensure that your home will breathe properly and stand strong for many years to come.</p>
          </div>
        </article>
      </div>
      <div className={styles.callToAction}>
        <div></div>
        <h2>Call us today 541-890-6463</h2>
      </div>
      <div className={styles.ourServices}>
        <div className={styles.servicesHeading}>
          <h2>Our Services</h2>
          <div>
            <img src='/BigFeet.png' alt='bigfoot tracks' />
          </div>
        </div>
        <div className={styles.cards}>
          <article className='card'>
            <a href='/services'>
              <Image src='/consultation.jpg' width={280} height={200} />
              <div>
                <p>Consultation</p>
                <span> <FontAwesomeIcon icon={faChevronRight} /></span>
              </div>
            </a>
          </article>
          <article className='card'>
            <a href='/services'>
              <Image src='/residential.jpg' width={280} height={200} />
              <div>
                <p>Residential</p>
                <span> <FontAwesomeIcon icon={faChevronRight} /></span>
              </div>
            </a>
          </article>
          <article className='card'>
            <a href='/services'>
              <Image src='/commercial.jpg' width={280} height={200} />
              <div>
                <p>Commercial</p>
                <span> <FontAwesomeIcon icon={faChevronRight} /></span>
              </div>
            </a>
          </article>
          <article className='card'>
            <a href='/services'>
              <Image src='/repair.jpg' width={280} height={200} />
              <div>
                <p>Repair</p>
                <span> <FontAwesomeIcon icon={faChevronRight} /></span>
              </div>
            </a>
          </article>
        </div>
      </div>
    </div>
  )
}
