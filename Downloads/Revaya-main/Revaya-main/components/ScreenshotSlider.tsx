// 'use client';
// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import styles from '@/components/astro.module.css';

// const images = ['/astro cover.png', '/astro_1.png', '/astro_2.png'];

// export default function ScreenshotSlider() {
//   const [index, setIndex] = useState(0);

//   const handleNext = () => setIndex((i) => (i + 1) % images.length);
//   const handlePrev = () => setIndex((i) => (i - 1 + images.length) % images.length);

//   return (
//     <div className={styles.sliderSection}>
//       <h2 className={styles.sliderTitle}>Visual Highlights</h2>
      
//       <div className={styles.sliderWrapper}>
//         <button className={styles.navArrow} onClick={handlePrev}><ChevronLeft size={24} /></button>

//         <div className={styles.carouselContainer}>
//           {images.map((img, i) => {
//             const pos = i - index; // -1 (left), 0 (center), 1 (right)
//             return (
//               <motion.div
//                 key={i}
//                 className={styles.slideCard}
//                 animate={{
//                   x: pos * 650, // Controls spacing between cards
//                   scale: pos === 0 ? 1 : 0.85,
//                   opacity: pos === 0 ? 1 : 0.4,
//                   zIndex: pos === 0 ? 10 : 5,
//                   filter: pos === 0 ? 'blur(0px) brightness(1)' : 'blur(5px) brightness(0.5)'
//                 }}
//                 transition={{ type: 'spring', stiffness: 200, damping: 25 }}
//               >
//                 <img src={img} alt="Project" className={styles.slideImage} />
//               </motion.div>
//             );
//           })}
//         </div>

//         <button className={styles.navArrow} onClick={handleNext}><ChevronRight size={24} /></button>
//       </div>

//       <div className={styles.paginationDots}>
//         {images.map((_, i) => (
//           <div key={i} className={i === index ? styles.activeDot : styles.dot} />
//         ))}
//       </div>
//     </div>
//   );
// }

'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from '@/components/astro.module.css';

const images = ['/astro cover.png', '/astro_1.png', '/astro_2.png'];

export default function ScreenshotSlider() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => setIndex((i) => (i + 1) % images.length);
  const handlePrev = () => setIndex((i) => (i - 1 + images.length) % images.length);

 

// ... (imports remain the same)
  return (
    <div className={styles.sliderSection}>
      <h2 className={styles.sliderTitle}>Visual Highlights</h2>
      
      <div className={styles.sliderWrapper}>
        <button className={styles.navArrow} onClick={handlePrev}><ChevronRight style={{ transform: 'rotate(180deg)' }} /></button>

        <div className={styles.carouselContainer}>
          {images.map((img, i) => {
            const pos = i - index; 
            return (
              <motion.div
                key={i}
                className={styles.slideCard}
                animate={{
                  x: pos * (isMobile ? 320 : 650),
                  scale: pos === 0 ? 1 : (isMobile ? 0.7 : 0.85),
                  opacity: pos === 0 ? 1 : 0.4,
                  zIndex: pos === 0 ? 10 : 5,
                }}
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              >
                <img src={img} alt="Project" className={styles.slideImage} />
              </motion.div>
            );
          })}
        </div>

        <button className={styles.navArrow} onClick={handleNext}><ChevronRight /></button>
      </div>

      {/* Pagination Dots Restored */}
      <div className={styles.paginationDots}>
        {images.map((_, i) => (
          <div key={i} className={i === index ? styles.activeDot : styles.dot} />
        ))}
      </div>
    </div>
  );
}