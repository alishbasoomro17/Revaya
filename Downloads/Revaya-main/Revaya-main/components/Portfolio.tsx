"use client";
import React from 'react';
import Link from 'next/link';
import styles from './Portfolio.module.css';

const portfolioData = [
  { id: 1, slug: 'astro-studio', badge: 'Web Development', title: 'Astro Studio', shortDesc: 'A high-performance digital platform.', cardImg: '/astro cover.png' },
  { id: 2, slug: 'solvit', badge: 'Web Application (LMS)', title: 'Solvit', shortDesc: 'A targeted learning management system.', cardImg: '/solvit cover5.png' },
  { id: 3, slug: 'revaya-pos', badge: 'Enterprise Retail SaaS', title: 'Revaya POS', shortDesc: 'A high-performance POS ecosystem.', cardImg: '/pos cover5.png' }, 
];

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.mainHeading}>Software that quietly<br /> runs <span className={styles.blueText}>real businesses.</span></h2>
      </header>

      <div className={styles.grid}>
        {portfolioData.map((item) => (
          <div key={item.id} className={styles.card}>
            <div className={styles.imageContainer}>
              <span className={styles.badge}>{item.badge}</span>
              <img src={item.cardImg} alt={item.title} className={styles.cardImg} />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.shortDesc}</p>
              <Link href={`/portfolio/${item.slug}`}>
                <button className={styles.ctaButton}>View case study</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Portfolio;