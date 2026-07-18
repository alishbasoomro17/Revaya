// 'use client';
// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import styles from './astro.module.css';

// const features = [
//   { id: '01', title: 'Interactive Booking', desc: 'Real-time scheduling with automated confirmations and smart availability management.' },
//   { id: '02', title: 'Service Management', desc: 'Easily manage packages, pricing, and availability across all your services in one place.' },
//   { id: '03', title: 'Customer Dashboard', desc: 'Customers can view history, and reschedule manage all bookings effortlessly.' },
// ];

// export default function FeatureStack() {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div className={styles.stackSection}>
//       <div className={styles.headerSection}>
//         <h2 className={styles.title}>Key Features</h2>
//         <p className={styles.subtitle}>
//           Unlock the power of intelligent automation to streamline your core operations. <br />
//           Leverage our advanced toolset to drive sustainable business growth.
//         </p>
//       </div>

//       <div className={styles.stackContainer} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
//         {features.map((feat, i) => (
//           <motion.div
//             key={feat.id}
//             className={styles.featureCard}
//             animate={{
//               x: isHovered ? (i - 1) * 440 : 0, 
//               y: isHovered ? 0 : i * -15,
//               rotate: isHovered ? 0 : i * -2,
//               scale: isHovered ? 1 : 1 - (i * 0.05),
//             }}
//             transition={{ type: 'spring', stiffness: 200, damping: 25 }}
//             style={{ zIndex: isHovered ? 1 : 3 - i }}
//           >
//             <div className={styles.featureId}>{feat.id}</div>
//             <div className={styles.featureTitle}>{feat.title}</div>
//             <div className={styles.featureDesc}>{feat.desc}</div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }



'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './astro.module.css';

const features = [
  { id: '01', title: 'Interactive Booking', desc: 'Real-time scheduling with automated confirmations and smart availability management.' },
  { id: '02', title: 'Service Management', desc: 'Easily manage packages, pricing, and availability across all your services in one place.' },
  { id: '03', title: 'Customer Dashboard', desc: 'Customers can view history, and reschedule manage all bookings effortlessly.' },
];

export default function FeatureStack() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.stackSection}>
      <div className={styles.headerSection}>
        <h2 className={styles.title}>Key Features</h2>
        <p className={styles.subtitle}>Unlock the power of intelligent automation.</p>
      </div>

      <div className={styles.stackContainer} onMouseEnter={() => !isMobile && setIsHovered(true)} onMouseLeave={() => !isMobile && setIsHovered(false)}>
        {features.map((feat, i) => (
          <motion.div
            key={feat.id}
            className={styles.featureCard}
            animate={{
              x: isMobile ? 0 : (isHovered ? (i - 1) * 440 : 0), 
              y: isMobile ? i * 370 : (isHovered ? 0 : i * -15), // Stack vertically on mobile
              rotate: isMobile ? 0 : (isHovered ? 0 : i * -2),
              scale: isHovered ? 1 : 1 - (i * 0.05),
            }}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            style={{ zIndex: isHovered ? 1 : 3 - i }}
          >
            <div className={styles.featureId}>{feat.id}</div>
            <div className={styles.featureTitle}>{feat.title}</div>
            <div className={styles.featureDesc}>{feat.desc}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}