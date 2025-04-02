// 'use client'
// import React, { useEffect, useRef } from 'react';
// import Image from 'next/image';
// import styles from './StackSection.module.css';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// import pixelPattern from '../../../../public/images/pixel-pattern.png';
// import dots from '../../../../public/images/dot-pattern2.png';
// import lego1 from '../../../../public/images/lego1.svg';
// import lego2 from '../../../../public/images/lego2.svg';
// import lego3 from '../../../../public/images/lego3.svg';
// import lego4 from '../../../../public/images/lego4.svg';
// import lego5 from '../../../../public/images/lego5.svg';

// const StackSection: React.FC = () => {
//   const sectionRef = useRef<HTMLElement>(null);
//   const legoContainerRef = useRef<HTMLDivElement>(null);
//   const lego1Ref = useRef<HTMLDivElement>(null);
//   const lego2Ref = useRef<HTMLDivElement>(null);
//   const lego3Ref = useRef<HTMLDivElement>(null);
//   const lego4Ref = useRef<HTMLDivElement>(null);
//   const lego5Ref = useRef<HTMLDivElement>(null);
  
//   useEffect(() => {
//     // Register ScrollTrigger plugin
//     gsap.registerPlugin(ScrollTrigger);
    
//     // Make sure all refs are available
//     if (!sectionRef.current ||
//         !lego1Ref.current || 
//         !lego2Ref.current || 
//         !lego3Ref.current || 
//         !lego4Ref.current || 
//         !lego5Ref.current) {
//       return;
//     }

//     // Set initial positions (scattered within visible area)
//     gsap.set(lego1Ref.current, { left: '400px', top: '0px', opacity: 1 });
//     gsap.set(lego2Ref.current, { left: '172px', top: '60px', opacity: 1 });
//     gsap.set(lego3Ref.current, { left: '320px', top: '220px', opacity: 1 });
//     gsap.set(lego4Ref.current, { right: '280px', top: '280px', opacity: 1 });
//     gsap.set(lego5Ref.current, { right: '200px', top: '120px', opacity: 1 });

//     // Create the animation timeline
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top top", // Start when top of section hits top of viewport
//         end: "+=600", // Animation continues for 600px of scrolling
//         scrub: 2, // Smooth scrubbing effect with more lag
//         pin: true, // Pin the section
//         pinSpacing: true, // Leave space for scrolling within section
//         anticipatePin: 1, // Improves pin performance
//         markers: false, // Set to true for debugging
//       }
//     });

//     // Determine final positions based on screen width
//     const windowWidth = window.innerWidth;
    
//     if (windowWidth >= 1024) {
//       // Desktop final positions
//       tl.to(lego1Ref.current, { left: '500px', top: '0px', ease: "power2.inOut" }, 0);
//       tl.to(lego2Ref.current, { left: '569px', top: '107px', ease: "power2.inOut" }, 0.1);
//       tl.to(lego3Ref.current, { left: '500px', top: '172px', ease: "power2.inOut" }, 0.2);
//       tl.to(lego4Ref.current, { left: '370px', top: '260px', right: 'auto', ease: "power2.inOut" }, 0.3);
//       tl.to(lego5Ref.current, { left: '560px', top: '350px', right: 'auto', ease: "power2.inOut" }, 0.4);
//     } else if (windowWidth >= 768) {
//       // Tablet positions
//       const centerX = windowWidth / 2;
//       tl.to(lego1Ref.current, { left: `${centerX}px`, top: '0px', xPercent: -50, ease: "power2.inOut" }, 0);
//       tl.to(lego2Ref.current, { left: `${centerX + 50}px`, top: '100px', xPercent: -50, ease: "power2.inOut" }, 0.1);
//       tl.to(lego3Ref.current, { left: `${centerX}px`, top: '160px', xPercent: -50, ease: "power2.inOut" }, 0.2);
//       tl.to(lego4Ref.current, { left: `${centerX - 80}px`, top: '240px', right: 'auto', xPercent: -50, ease: "power2.inOut" }, 0.3);
//       tl.to(lego5Ref.current, { left: `${centerX + 40}px`, top: '320px', right: 'auto', xPercent: -50, ease: "power2.inOut" }, 0.4);
//     } else {
//       // Mobile positions
//       const centerX = windowWidth / 2;
//       tl.to(lego1Ref.current, { left: `${centerX}px`, top: '0px', xPercent: -50, ease: "power2.inOut" }, 0);
//       tl.to(lego2Ref.current, { left: `${centerX + 30}px`, top: '80px', xPercent: -50, ease: "power2.inOut" }, 0.1);
//       tl.to(lego3Ref.current, { left: `${centerX}px`, top: '140px', xPercent: -50, ease: "power2.inOut" }, 0.2);
//       tl.to(lego4Ref.current, { left: `${centerX - 40}px`, top: '210px', right: 'auto', xPercent: -50, ease: "power2.inOut" }, 0.3);
//       tl.to(lego5Ref.current, { left: `${centerX + 20}px`, top: '270px', right: 'auto', xPercent: -50, ease: "power2.inOut" }, 0.4);
//     }

//     // Cleanup
//     return () => {
//       if (ScrollTrigger.getAll().length > 0) {
//         ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//       }
//       tl.kill();
//     };
//   }, []);

//   return (
//     <section className={styles.stackSection} ref={sectionRef}>
//       <div className={styles.pixelPatternContainer}>
//         <Image 
//           src={pixelPattern} 
//           alt="Pixel Pattern" 
//           className={styles.pixelPattern}
//           layout="responsive"
//         />
//         <Image 
//           src={dots} 
//           alt="Dots" 
//           className={styles.dots}
//           layout="responsive"
//         />
//       </div>
      
//       <div className={styles.container}>
//         <h2 className={styles.sectionTitle}>/BILD & KOHd/</h2>
        
//         <div className={styles.stackCard}>
//           <svg width="63" height="62" viewBox="0 0 63 62" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M2 45.9089V2.99982L59.2121 60.2119H16.303C8.40368 60.2119 2 53.8083 2 45.9089Z" fill="#FBF8F0" stroke="black" strokeWidth="2.38384" />
//           </svg>
//           <div className={styles.stackInfo}>
//             <div className={styles.stackHeader}>
//               <h3>Stack</h3>
//             </div>
//             <div className={styles.stackText}>
//               <div className={styles.stackDetails}>
//                 <p>Frontend:<span> React, Typescript, JavaScript</span></p>
//                 <p>Backend:<span> NodeJS, Typescript, Postgres, Subgraph</span></p>
//                 <p>Blockchain:<span> Ethereum, Solidity</span></p>
//                 <p>Infrastructure:<span> CloudFlare, DigitalOcean</span></p>
//               </div>
//               <div className={styles.stackDescription}>
//                 <p>
//                   Blockchain developers at hashtech can assist you with creating robust blockchain-powered applications and distributed system
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         <div className={styles.legoContainer} ref={legoContainerRef}>
//           <div className={styles.legoItem} ref={lego2Ref}>
//             <Image src={lego2} alt="Blockchain apps" width={132} height={178} />
//             <p>Blockchain apps<br />development</p>
//           </div>
          
//           <div className={styles.legoItem} ref={lego1Ref}>
//             <Image src={lego1} alt="Tap 2 Earn games" width={265} height={305} />
//             <p>Tap 2 Earn games<br />development</p>
//           </div>
          
//           <div className={styles.legoItem} ref={lego5Ref}>
//             <Image src={lego5} alt="DeFi apps" width={110} height={77} />
//             <p>DeFi apps<br />development</p>
//           </div>
          
//           <div className={styles.legoItem} ref={lego3Ref}>
//             <Image src={lego3} alt="AI Agents" width={265} height={160} />
//             <p>AI Agents</p>
//           </div>
          
//           <div className={styles.legoItem} ref={lego4Ref}>
//             <Image src={lego4} alt="Smart Contracts" width={265} height={148} />
//             <p>Smart Contracts<br />development</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StackSection;
'use client'
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './StackSection.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import pixelPattern from '../../../../public/images/pixel-pattern.png';
import dots from '../../../../public/images/dot-pattern2.png'

import lego1 from '../../../../public/images/lego1.svg';
import lego2 from '../../../../public/images/lego2.svg';
import lego3 from '../../../../public/images/lego3.svg';
import lego4 from '../../../../public/images/lego4.svg';
import lego5 from '../../../../public/images/lego5.svg';

const StackSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const designContainerRef = useRef<HTMLDivElement>(null);
  const design1Ref = useRef<HTMLDivElement>(null);
  const design2Ref = useRef<HTMLDivElement>(null);
  const design3Ref = useRef<HTMLDivElement>(null);
  const design4Ref = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  
  // Make sure stack card is separate from animation logic
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Make sure all refs are available
    if (!sectionRef.current ||
        !design1Ref.current || 
        !design2Ref.current || 
        !design3Ref.current || 
        !design4Ref.current || 
        !logoRef.current || 
        !buttonRef.current) {
      return;
    }

    // Set initial positions (scattered)
    gsap.set(design1Ref.current, { left: '75%', top: '0px', opacity: 1 });
    gsap.set(design2Ref.current, { left: '25%', top: '30px', opacity: 1 });
    gsap.set(design3Ref.current, { left: '30%', top: '250px', opacity: 1 });
    gsap.set(design4Ref.current, { left: '70%', top: '200px', opacity: 1 });
    gsap.set(logoRef.current, { left: '50%', top: '180px', xPercent: -50, opacity: 0, scale: 0.8 });
    gsap.set(buttonRef.current, { left: '50%', top: '260px', xPercent: -50, opacity: 0 });

    // Create the animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top", // Начинаем, когда верх секции достигает верха окна
        end: "+=800", // Анимация продолжается 600px скролла
        scrub: 21,
        pin: true, // Фиксируем всю секцию
        pinSpacing: true, // Оставляем пространство для скролла внутри секции
        anticipatePin: 1,
        markers: false,
      }
    });

    // Add animations to timeline - slower for a more dramatic effect
    tl.to([design1Ref.current, design2Ref.current], {
      left: '50%', 
      xPercent: -50,
      opacity: 1,
      ease: "power3.inOut",
      // stagger: 0.08,
      duration: 2.5
    }, 0);
    tl.to(design1Ref.current, {
      left: '55.5%', // Moved to the right instead of center
      xPercent: -50,
      opacity: 1,
      ease: "power3.inOut",
      duration: 2.5
    }, 0);
    // Handle design3 and design4 separately to allow custom positions
    tl.to(design3Ref.current, {
      left: '50%', // Moved to the right instead of center
      xPercent: -50,
      opacity: 1,
      ease: "power3.inOut",
      duration: 2.5
    }, 0);
    
    tl.to(design4Ref.current, {
      left: '50%', // Moved to the right instead of center
      xPercent: -50,
      opacity: 1,
      ease: "power3.inOut",
      duration: 2.5
    }, 0);

    // Specific positions for each element
    tl.to(design1Ref.current, { top: '135px', ease: "power2.inOut" }, 0);
    tl.to(design2Ref.current, { top: '30px', ease: "power2.inOut" }, 0);
    tl.to(design3Ref.current, { top: '360px', left: '53%', ease: "power2.inOut" }, 0); // Moved slightly to the right
    tl.to(design4Ref.current, { top: '280px', left: '35%', ease: "power2.inOut" }, 0); // Moved slightly to the right
    
    // Fade in the logo and button - slightly delayed
    tl.to(logoRef.current, { 
      opacity: 1, 
      scale: 1.1,
      ease: "power1.inOut", // Gentler easing
      duration: 3 // Increased for slower animation
    }, 1); // Delayed more
    
    tl.to(buttonRef.current, { 
      opacity: 1, 
      ease: "power1.inOut", // Gentler easing
      duration: 3 // Increased for slower animation
    }, 1.5); // Delayed more

    // Cleanup
    return () => {
      if (ScrollTrigger.getAll().length > 0) {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
      tl.kill();
    };
  }, []);

  return (
    <section className={styles.designLabSection} ref={sectionRef}>
      <div className={styles.pixelPatternContainer}>
        <Image 
          src={pixelPattern} 
          alt="Pixel Pattern" 
          className={styles.pixelPattern}
          layout="responsive"
        />
        <Image 
          src={dots} 
          alt="dots" 
          className={styles.dots}
          layout="responsive"
        />
      </div>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>/ Design Lab /</h2>
        
        <div className={styles.stackCard}>
          <svg width="63" height="62" viewBox="0 0 63 62" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 45.9089V2.99982L59.2121 60.2119H16.303C8.40368 60.2119 2 53.8083 2 45.9089Z" fill="#FBF8F0" stroke="black" strokeWidth="2.38384" />
          </svg>
          <div className={styles.stackInfo}>
            <div className={styles.stackHeader}>
              <h3>Stack</h3>
              <div className={styles.cardCorner}></div>
            </div>
            <div className={styles.stackText}>
              <div className={styles.stackDetails}>
                <p>Frontend:<span> React, Typescript, JavaScript</span></p>
                <p>Backend:<span> NodeJS, Typescript, Postgres, Subgraph</span></p>
                <p>Blockchain:<span> Ethereum, Solidity</span></p>
                <p>Infrastructure:<span> CloudFlare, DigitalOcean</span></p>
              </div>
              <div className={styles.stackDescription}>
                <p>
                Blockchain developers at hashtech can assist you with creating robust blockchain-powered applications and distributed system
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.designContainer} ref={designContainerRef}>
          <div 
            className={`${styles.designItem} ${styles.designItemRight} ${styles.zIndex2}`}
            ref={design1Ref}
          >
            <Image src={lego2} alt="Blockchain apps" width={132} height={178} />
            <p className={styles.textRight}>Product & UI/UX<br />Design</p>
          </div>
          
          <div 
            className={`${styles.designItem} ${styles.designItemRight} ${styles.zIndex4}`}
            ref={design2Ref}
          >
            <Image src={lego1} alt="Tap 2 Earn games" width={265} height={305} />
            <p className={styles.textLeft}>Illustration &<br />Motion Design</p>
          </div>
          
          <div 
            className={`${styles.designItem} ${styles.designItemRight} ${styles.zIndex2}`}
            ref={design3Ref}
          >
            <Image src={lego5} alt="DeFi apps" width={110} height={77} />
            <p className={styles.textRight}>Branding & Visual<br />Identity</p>
          </div>
          
          <div 
            className={`${styles.designItem} ${styles.designItemRight} ${styles.zIndex2}`}
            ref={design4Ref}
          >
            <Image src={lego3} alt="AI Agents" width={265} height={160} />
            <p className={styles.textLeft}>Creative Content<br />& Gamification</p>
          </div>
          
          {/* Logo in the center - initially hidden, appears on scroll */}
          <div 
            className={`${styles.logoContainer} ${styles.zIndex5}`}
            ref={logoRef}
          >
            <h2 className={styles.logoText}>hashtech</h2>
            <div className={styles.logoGlow}></div>
          </div>
          
          {/* Button - initially hidden, appears on scroll */}
          <div 
            className={`${styles.buttonContainer} ${styles.zIndex5}`}
            ref={buttonRef}
          >
            <button className={styles.createButton}>Let's create together</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StackSection;