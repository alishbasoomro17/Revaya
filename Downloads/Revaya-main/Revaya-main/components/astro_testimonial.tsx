import React from 'react';
import styles from '@/components/astro.module.css';

const Testimonial = () => {
  return (
    <section className={styles.container}>
      {/* 1. Icon */}
      <div className={styles.quoteIcon}>
        <svg fill="currentColor" viewBox="0 0 24 24" width="40" height="40">
          <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C13.9124 8 13.017 8.89543 13.017 10V13C13.017 13.5523 12.5693 14 12.017 14H11.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C4.91203 8 4.0166 8.89543 4.0166 10V13C4.0166 13.5523 3.56889 14 3.0166 14H2.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
        </svg>
      </div>

      {/* 2. Text */}
      <p className={styles.quoteText}>
        Revaya delivered a platform that not only looks incredible but also streamlined our entire workflow. Our customers love the experience, and our bookings have never been higher.
      </p>

      {/* 3. Branding (Vertically stacked inside its own box to keep alignment) */}
      <div className={styles.authorContainer}>
        <div className={styles.brandName}>
          <span className={styles.brandAstro}>ASTRO</span>
          <span className={styles.brandStudio}>STUDIO</span>
        </div>
        <p className={styles.authorTitle}>— Founder, Astro Studio</p>
      </div>
    </section>
  );
};

export default Testimonial;