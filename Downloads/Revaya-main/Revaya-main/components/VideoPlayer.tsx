// 'use client';

// import { useRef } from 'react';
// import styles from '@/components/astro.module.css';

// export default function VideoPlayer() {
//   const videoRef = useRef<HTMLVideoElement>(null);


//   const togglePlay = () => {
//     if (videoRef.current?.paused) {
//       videoRef.current.play();
//     } else {
//       videoRef.current?.pause();
//     }
//   };

//   return (
//     /* Removed the outer container, the glow is now inside the wrapper */
//     <div className={styles.videoWrapper}>
//       <div className={styles.videoInner}>
//         <video 
//           ref={videoRef}
//           className={styles.videoElement} 
//           autoPlay 
//           loop 
//           muted 
//           playsInline
//           src="/astro.mp4" 
//         />
//         <div className={styles.playButton} onClick={togglePlay} />
//       </div>
//     </div>
//   );
// }


'use client';

import { useRef, useState } from 'react';
import styles from '@/components/astro.module.css';

export default function VideoPlayer() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false); // 1. Add state to track playing status

  const togglePlay = () => {
    if (videoRef.current?.paused) {
      videoRef.current.play();
      setIsPlaying(true); // 2. Update state to playing
    } else {
      videoRef.current?.pause();
      setIsPlaying(false); // 2. Update state to paused
    }
  };

  return (
    <div className={styles.videoWrapper}>
      <div className={styles.videoInner}>
        <video
          ref={videoRef}
          className={styles.videoElement}
          muted
          playsInline
          src="/astro.mp4"
          onClick={togglePlay} // Added ability to pause by clicking the video
        />
        {/* 3. Conditionally render the button only if NOT playing */}
        {!isPlaying && (
          <div className={styles.playButton} onClick={togglePlay} />
        )}
      </div>
    </div>
  );
}