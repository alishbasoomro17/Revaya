"use client";

import React from 'react';
import styles from './WhyRevaya.module.css';

const testimonialsData = [
  { id: 1, quote: "Revaya turned our manual process into a fully automated system.", name: "Ali Raza", role: "Executive Engineer", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80" },
  { id: 2, quote: "Real-time view of the business instead of chasing spreadsheets.", name: "Sana Ahmed", role: "Executive Engineer", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80" },
  { id: 3, quote: "We came to Revaya with a vague idea and left with a working product in six weeks.", name: "Bilal Khan", role: "Executive Engineer", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80" },
  { id: 4, quote: "Communication was flawless, support is always there.", name: "Hira Sheikh", role: "Executive Engineer", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80" }
];

export const WhyRevaya: React.FC = () => {
  return (
    <section id="insights" className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.leftColumn}>
          <h2 className={styles.mainHeading}>
            Why <span className={styles.brandText}>Revaya</span>?
          </h2>
          <p className={styles.subText}>We don’t just ship software — we build systems that run your business.</p>
          <div className={styles.videoContainer}>
            <video className={styles.videoElement} src="/Revaya.mp4" autoPlay muted loop playsInline />
          </div>
        </div>

        <div className={styles.rightColumn}>
          {testimonialsData.map((t, idx) => (
            <div
              key={t.id}
              className={styles.glassCard}
              style={{ '--card-idx': idx } as React.CSSProperties}
            >
              <div className={styles.avatarWrapper}>
                <div className={styles.avatarFrame}>
                  <img src={t.avatar} alt={t.name} className={styles.avatarImage} />
                </div>
              </div>
              <p className={styles.quoteText}>“{t.quote}”</p>
              <h4 className={styles.clientName}>{t.name}</h4>
              <span className={styles.clientRole}>{t.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyRevaya;