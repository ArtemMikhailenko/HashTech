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
    gsap.set(design3Ref.current, { left: '30%', top: '340px', opacity: 1 });
    gsap.set(design4Ref.current, { left: '70%', top: '200px', opacity: 1 });
    gsap.set(logoRef.current, { left: '50%', top: '180px', xPercent: -50, opacity: 0, scale: 0.8 });
    gsap.set(buttonRef.current, { left: '50%', top: '260px', xPercent: -50, opacity: 0 });

    // Create the animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top -400", 
        end: "+=800", 
        scrub: 2,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        markers: false,
      }
    });

    // Animation for each element with a single tween for both position properties
    // Each element gets exactly ONE animation that defines its complete final position
    
    // Design element 1 - using 55.5% left directly
    tl.to(design1Ref.current, {
      left: '55.5%',
      top: '135px',
      xPercent: -50,
      ease: "power2.inOut",
      duration: 2
    }, 0);
    
    // Design element 2
    tl.to(design2Ref.current, {
      left: '50%',
      top: '30px',
      xPercent: -50,
      ease: "power2.inOut",
      duration: 2
    }, 0.1);
    
    // Design element 3
    tl.to(design3Ref.current, {
      left: '53%',
      top: '360px',
      xPercent: -50,
      ease: "power2.inOut",
      duration: 2
    }, 0.2);
    
    // Design element 4
    tl.to(design4Ref.current, {
      left: '35%',
      top: '280px',
      xPercent: -50,
      ease: "power2.inOut",
      duration: 2
    }, 0.3);
    
    // Logo and button appear with delayed timing
    tl.to(logoRef.current, { 
      opacity: 1, 
      scale: 1.1,
      ease: "power1.inOut",
      duration: 2
    }, 1);
    
    tl.to(buttonRef.current, { 
      opacity: 1, 
      ease: "power1.inOut",
      duration: 2
    }, 1.2);

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