"use client";

import React from 'react';
import Link from 'next/link';
import styles from '@/components/astro.module.css';



const CTASection = () => {
  // Mock handler for onMouseMove if needed
  const onMove = (e: React.MouseEvent) => {};

  return (
    <section className={styles.call_to_section_container}>
      <h2 className={styles.call_to_section_title}>
        Ready to Achieve Similar <span className={styles.call_to_section_highlight}>Results ?</span>
      </h2>
      <p className={styles.call_to_section_description}>
        Let’s turn your vision into reality. Partner with us to build an advanced, high-performing digital solution.
      </p>

      {/* Integrated custom Link component */}
      <Link
        href="/#contact"
        onMouseMove={onMove}
        className={`btn-liquid inline-flex items-center rounded-full select-none justify-center ${styles.custom_cta_wrapper}`}
        style={{
          transition: "all 200ms ease",
          background: "linear-gradient(to right,#1d9bff,#0040e0)",
          boxShadow: "0 0 24px rgba(1,144,249,0.4)",
        }}
      >
        <span
          className="text-[14px] md:text-[15px] p-[0.6rem_0.8rem_0.6rem_1.1rem] md:p-[0.7rem_0.9rem_0.7rem_1.3rem]"
          style={{
            fontFamily: "inherit",
            fontWeight: 600,
            color: "#fff",
            lineHeight: 1,
          }}
        >
          Start Your Project
        </span>
        <span
          className="w-[32px] h-[32px] md:w-[36px] md:h-[36px]"
          style={{
            margin: "0 5px 0 0",
            borderRadius: "50%",
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <svg width="13" height="13" viewBox="0 0 15 15" fill="none" aria-hidden className="md:w-[15px] md:h-[15px]">
            <path
              d="M3 7.5h9M8 3.5l4 4-4 4"
              stroke="#111"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </Link>
    </section>
  );
};

export default CTASection;