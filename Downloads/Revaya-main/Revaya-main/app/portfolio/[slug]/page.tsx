


'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/components/astro.module.css';
import VideoPlayer from '@/components/VideoPlayer';
import ScreenshotSlider from '@/components/ScreenshotSlider';
import FeatureStack from '@/components/FeatureStack';
import CTASection from '@/components/CTASection';
import Testimonial from '@/components/astro_testimonial';
import { FiAlertCircle, FiMenu, FiX, FiChevronLeft } from 'react-icons/fi'; // Added Icons
import { Lightbulb } from 'lucide-react';

export default function AstroPage() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Case Studies', href: '/#portfolio' },
    { name: 'Why us', href: '/#insights' },
    { name: 'Contact us', href: '/#contact' },
  ];

  return (
    <main className={styles.mainContainer}>
      {/* Header Section */}
      {/* Header Section */}
      <header className={styles.header}>
        <div className={styles.headerContentWrapper}>
          <div className={styles.logoAndBackButton}>
            <div className={styles.logoLeft}>
              <Image src="/loogo.png" alt="Logo" width={90} height={40} />
            </div>
            <button onClick={() => window.history.back()} className={styles.backButtonInline}>
              <FiChevronLeft size={24} />
              <span>Back</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Always in DOM but toggled via class */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className={styles.navLink}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Page Content */}
      <div className={styles.badge}>Web development</div>
      <h1 className={styles.mainTitle}>
        <Image src="/astro logo.png" alt="Astro Studio" width={120} height={80} />
      </h1>
      <h2 className={styles.subTitle}>A Premium Digital Platform for Luxury Automotive Detailing</h2>
      <p className={styles.description}>
        We partnered with Astro Studio to build a high-performance digital platform that
        reflects their premium brand and simplifies customer journey from service discovery to booking.
      </p>

      <div className={styles.techStackRow}>
        {['Next.js', 'Prisma', 'GSAP', 'Three.js'].map((tech) => (
          <div key={tech} className={styles.techPill}>{tech}</div>
        ))}
      </div>

      <VideoPlayer />

      <div className={styles.statsRow}>
        {[
          { val: '85%', label: 'Less Admin' },
          { val: '40%', label: 'More Leads' },
          { val: '98%', label: 'Engagement' },
        ].map((stat, i) => (
          <div key={i} className={styles.statCard}>
            <span className={styles.statValue}>{stat.val}</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </div>

      <div className={styles.infoGrid}>
        <div className={`${styles.infoCard} ${styles.challengeCard}`}>
          <div className={styles.iconBox}><FiAlertCircle color="#ef4444" size={32} /></div>
          <h3 className={styles.infoTitle}>The Challenge</h3>
          <div className={styles.infoText}>
            <ul>
              <li>Outdated manual booking system causing delays.</li>
              <li>Lack of a digital presence matching the premium brand.</li>
              <li>Difficult service management.</li>
            </ul>
          </div>
        </div>

        <div className={`${styles.infoCard} ${styles.solutionCard}`}>
          <div className={styles.iconBox}><Lightbulb color="#22c55e" size={32} /></div>
          <h3 className={styles.infoTitle}>The Solution</h3>
          <div className={styles.infoText}>
            <ul>
              <li>High-performance website with luxury aesthetics.</li>
              <li>Integrated booking system with real-time availability.</li>
              <li>Admin dashboard for managing operations.</li>
            </ul>
          </div>
        </div>
      </div>

      <ScreenshotSlider />
      <FeatureStack />
      <Testimonial />
      <CTASection />
    </main>
  );
}