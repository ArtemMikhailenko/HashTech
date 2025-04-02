'use client'
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './DesignLabSection.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import design1 from '../../../../public/images/design1.png'; // Product & UI/UX Design
import design2 from '../../../../public/images/design2.png'; // Illustration & Motion Design
import design3 from '../../../../public/images/design3.png'; // Branding & Visual Identity
import design4 from '../../../../public/images/design4.png'; // Creative Content & Gamification

const DesignLabSection: React.FC = () => {
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
    gsap.set(design1Ref.current, { left: '15%', top: '70px', opacity: 1 });
    gsap.set(design2Ref.current, { left: '55%', top: '20px', opacity: 1 });
    gsap.set(design3Ref.current, { left: '70%', top: '300px', opacity: 1 });
    gsap.set(design4Ref.current, { left: '30%', top: '370px', opacity: 1 });
    gsap.set(logoRef.current, { left: '50%', top: '180px', xPercent: -50, opacity: 0, scale: 0.8 });
    gsap.set(buttonRef.current, { left: '50%', top: '260px', xPercent: -50, opacity: 0 });

    // Create the animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top -220", // Start when the top of the section is 100px above viewport top
        end: "+=600", // Animation continues for 600px of scrolling
        scrub: 8, // Smooth scrubbing effect, value reduced for more responsive animation
        pin: true, // Pin the section
        pinSpacing: true, // Maintain spacing
        anticipatePin: 1,
        markers: false, // Set to true for debugging
      }
    });

    // Important: Define the complete target position in a single animation for each element
    // This prevents the "jumping" behavior when multiple animations target the same properties
    
    // Design element 1
    tl.to(design1Ref.current, {
      left: '50%',
      top: '0',
      xPercent: -50,
      ease: "power2.inOut",
      duration: 2
    }, 0);
    
    // Design element 2
    tl.to(design2Ref.current, {
      left: '50%',
      top: '80px',
      xPercent: -50,
      ease: "power2.inOut",
      duration: 2
    }, 0.1); // Slight stagger
    
    // Design element 3 - Fix the jumping issue by having a single animation with final values
    tl.to(design3Ref.current, {
      left: '50%',
      top: '220px',
      xPercent: -50,
      ease: "power2.inOut",
      duration: 2
    }, 0.2); // Slight stagger
    
    // Design element 4 - Fix the jumping issue by having a single animation with final values
    tl.to(design4Ref.current, {
      left: '50%',
      top: '270px',
      xPercent: -50,
      ease: "power2.inOut",
      duration: 2
    }, 0.3); // Slight stagger
    
    // Fade in the logo and button - slightly delayed
    tl.to(logoRef.current, { 
      opacity: 1, 
      scale: 1.1,
      ease: "power1.inOut",
      duration: 2
    }, 1.5); // Delayed more
    
    tl.to(buttonRef.current, { 
      opacity: 1, 
      ease: "power1.inOut",
      duration: 2
    }, 2); // Delayed more

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
                <p>Design: <span>Figma, Adobe Suite, Blender</span></p>
                <p>Animation: <span>After Effects, Lottie, Rive</span></p>
                <p>Illustration & 3D: <span>Procreate, Blender, Cinema 4D</span></p>
              </div>
              <div className={styles.stackDescription}>
                <p>
                  We craft cutting-edge visuals that bring Web3 products to life, making them engaging, functional, and visually striking
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.designContainer} ref={designContainerRef}>
          <div 
            className={`${styles.designItem} ${styles.designItemRight} ${styles.zIndex4}`}
            ref={design1Ref}
          >
            <Image src={design1} alt="Product & UI/UX Design" width={99} height={185} />
            <p className={styles.textLeft}>Illustration &<br /> Motion Design</p>
          </div>
          
          <div 
            className={`${styles.designItem} ${styles.designItemRight} ${styles.zIndex3}`}
            ref={design2Ref}
          >
            <Image src={design2} alt="Illustration & Motion Design" width={99} height={185} />
            <p className={styles.textRight}>Product & UI/UX &<br />Design</p>
          </div>
          
          <div 
            className={`${styles.designItem} ${styles.designItemRight} ${styles.zIndex3}`}
            ref={design3Ref}
          >
            <Image src={design3} alt="Branding & Visual Identity" width={100} height={92} />
            <p className={styles.textRight}>Branding & Visual<br />Identity</p>
          </div>
          
          <div 
            className={`${styles.designItem} ${styles.designItemRight} ${styles.zIndex5}`}
            ref={design4Ref}
          >
            <Image src={design4} alt="Creative Content & Gamification" width={170} height={178} />
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

export default DesignLabSection;