'use client'
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './StackSection.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import pixelPattern from '../../../../public/images/pixel-pattern.png';
import dots from '../../../../public/images/dot-pattern2.png';

import lego1 from '../../../../public/images/lego1.svg';
import lego2 from '../../../../public/images/lego2.svg';
import lego3 from '../../../../public/images/lego3.svg';
import lego4 from '../../../../public/images/lego4.svg';
import lego5 from '../../../../public/images/lego5.svg';

const StackSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const stackContainerRef = useRef<HTMLDivElement>(null);
  const stack1Ref = useRef<HTMLDivElement>(null);
  const stack2Ref = useRef<HTMLDivElement>(null);
  const stack3Ref = useRef<HTMLDivElement>(null);
  const stack4Ref = useRef<HTMLDivElement>(null);
  const stack5Ref = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const contextRef = useRef<gsap.Context | null>(null);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check on initial load
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  useEffect(() => {
    // Make sure we're in the browser
    if (typeof window === 'undefined') return;
    
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Create a new GSAP context for this component
    // This isolates the animations from other components
    const context = gsap.context(() => {
      // Clean up any existing animations within this context
      if (contextRef.current) {
        contextRef.current.revert();
      }
      
      // Make sure all refs are available
      if (!sectionRef.current ||
          !stack1Ref.current || 
          !stack2Ref.current || 
          !stack3Ref.current || 
          !stack4Ref.current ||
          !stack5Ref.current ||
          !logoRef.current || 
          !buttonRef.current) {
        return;
      }

      if (isMobile) {
        // MOBILE ANIMATION
        console.log("Setting up mobile animations for Stack section");
        
        // Set initial scattered positions for mobile
        gsap.set(stack1Ref.current, { left: '40%', top: '10px', xPercent: 0, opacity: 1 });
        gsap.set(stack2Ref.current, { left: '-1%', top: '90px', xPercent: 0, opacity: 1 });
        gsap.set(stack3Ref.current, { left: '60%', top: '220px', xPercent: 0, opacity: 1 });
        gsap.set(stack4Ref.current, { left: '73%', top: '120px', xPercent: 0, opacity: 1 });
        gsap.set(stack5Ref.current, { left: '20%', top: '250px', xPercent: 0, opacity: 1 });
        gsap.set(logoRef.current, { left: '50%', top: '90px', xPercent: -50, opacity: 0, scale: 0.8 });
        gsap.set(buttonRef.current, { left: '50%', top: '160px', xPercent: -50, opacity: 0 });

        // Create animation for mobile
        const mobileTl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top -15%", 
            end: "+=300",
            pin: true,
            scrub: 4,
            markers: false,
          }
        });

        // Mobile animations - converge to center
        mobileTl.to(stack1Ref.current, {
          left: '55.5%',
          top: '90px',
          xPercent: -50,
          ease: "power2.inOut",
          duration: 2
        }, 0);
        
        mobileTl.to(stack2Ref.current, {
          left: '50%',
          top: '60px',
          xPercent: -50,
          ease: "power2.inOut", 
          duration: 2
        }, 0.1);
        
        mobileTl.to(stack3Ref.current, {
          left: '53%',
          top: '200px',
          xPercent: -50,
          ease: "power2.inOut",
          duration: 2
        }, 0.2);
        
        mobileTl.to(stack4Ref.current, {
          left: '50%',
          top: '127px',
          xPercent: -50,
          ease: "power2.inOut",
          duration: 2
        }, 0.3);
        
        mobileTl.to(stack5Ref.current, {
          left: '30%',
          top: '170px',
          xPercent: -50,
          ease: "power2.inOut",
          duration: 2
        }, 0.4);
        
        mobileTl.to(logoRef.current, { 
          opacity: 1, 
          scale: 1,
          ease: "power1.inOut",
          duration: 1.5
        }, 1);
        
        mobileTl.to(buttonRef.current, { 
          opacity: 1, 
          ease: "power1.inOut",
          duration: 1.5
        }, 1.2);
        
      } else {
        // DESKTOP ANIMATION
        console.log("Setting up desktop animations for Stack section");
        
        // Set initial positions (scattered)
        gsap.set(stack1Ref.current, { left: '45%', top: '0px', opacity: 1, xPercent: 0 });
        gsap.set(stack2Ref.current, { left: '5%', top: '30px', opacity: 1, xPercent: 0 });
        gsap.set(stack3Ref.current, { left: '60%', top: '380px', opacity: 1, xPercent: 0 });
        gsap.set(stack4Ref.current, { left: '70%', top: '200px', opacity: 1, xPercent: 0 });
        gsap.set(stack5Ref.current, { left: '15%', top: '370px', opacity: 1, xPercent: 0 });
        gsap.set(logoRef.current, { left: '50%', top: '180px', xPercent: -50, opacity: 0, scale: 0.8 });
        gsap.set(buttonRef.current, { left: '50%', top: '260px', xPercent: -50, opacity: 0 });

        // Create the animation timeline for desktop
        const desktopTl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top -400", 
            end: "+=800", 
            scrub: 8,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            markers: false,
          }
        });

        // Desktop animations - single animation per element
        desktopTl.to(stack1Ref.current, {
          left: '55.5%',
          top: '135px',
          xPercent: -50,
          ease: "power2.inOut",
          duration: 2
        }, 0);
        
        desktopTl.to(stack2Ref.current, {
          left: '50%',
          top: '30px',
          xPercent: -50,
          ease: "power2.inOut",
          duration: 2
        }, 0.1);
        
        desktopTl.to(stack3Ref.current, {
          left: '53%',
          top: '380px',
          xPercent: -50,
          ease: "power2.inOut",
          duration: 2
        }, 0.2);
        
        desktopTl.to(stack4Ref.current, {
          left: '50%',
          top: '205px',
          xPercent: -50,
          ease: "power2.inOut",
          duration: 2
        }, 0.3);
        
        desktopTl.to(stack5Ref.current, {
          left: '35%',
          top: '310px',
          xPercent: -50,
          ease: "power2.inOut",
          duration: 2
        }, 0.4);
        
        // Logo and button appear with delayed timing
        desktopTl.to(logoRef.current, { 
          opacity: 1, 
          scale: 1.1,
          ease: "power1.inOut",
          duration: 2
        }, 1);
        
        desktopTl.to(buttonRef.current, { 
          opacity: 1, 
          ease: "power1.inOut",
          duration: 2
        }, 1.2);
      }
    }, sectionRef); // Scope the context to our section element
    
    // Store the context so we can revert it later
    contextRef.current = context;

    // Cleanup on unmount or when isMobile changes
    return () => {
      if (contextRef.current) {
        contextRef.current.revert(); // This properly cleans up all animations and ScrollTriggers
        contextRef.current = null;
      }
    };
  }, [isMobile]); // Re-run when isMobile changes

  return (
    <section className={styles.stackSection} ref={sectionRef} id="stack-section">
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
        <h2 className={styles.sectionTitle}>/BILD & KOHd/</h2>
        
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
        
        <div className={`${styles.stackContainer} ${isMobile ? styles.mobileStackContainer : ''}`} ref={stackContainerRef}>
          <div 
            className={`${styles.stackItem} ${styles.stackItemRight} ${styles.zIndex3}`}
            ref={stack1Ref}
          >
            <Image src={lego2} alt="Blockchain apps" width={132} height={178} />
            <p className={styles.textRight}>Tap 2 Earn games<br /> development</p>
          </div>
          
          <div 
            className={`${styles.stackItem} ${styles.stackItemRight} ${styles.zIndex3}`}
            ref={stack2Ref}
          >
            <Image src={lego1} alt="Tap 2 Earn games" width={265} height={305} />
            <p className={isMobile ? styles.textTop : styles.textLeft}>Blockchain apps <br />development</p>
          </div>
          
          <div 
            className={`${styles.stackItem} ${styles.stackItemRight} ${styles.zIndex2}`}
            ref={stack3Ref}
          >
            <Image src={lego5} alt="DeFi apps" width={110} height={77} />
            <p className={styles.textRightBottom}>Smart Contracts<br />development</p>
          </div>
          
          <div 
            className={`${styles.stackItem} ${styles.stackItemRight} ${styles.zIndex2}`}
            ref={stack4Ref}
          >
            <Image src={lego3} alt="AI Agents" width={265} height={160} />
            <p className={isMobile ? styles.textLeft : styles.textRight}>DeFi apps<br />development</p>
          </div>
          
          {/* This is the added fifth element */}
          <div 
            className={`${styles.stackItem} ${styles.stackItemRight} ${styles.zIndex2}`}
            ref={stack5Ref}
          >
            <Image src={lego4} alt="AI Engineering" width={200} height={120} />
            <p className={isMobile ? styles.textBottom : styles.textLeft}>AI Engineering<br />solutions</p>
          </div>
          
          {/* Logo in the center - initially hidden, appears on scroll */}
          <div 
            className={`${styles.logoContainer} ${styles.zIndex5}`}
            ref={logoRef}
          >
            <div className={styles.logoText}>
              <img src="/images/logos/logo-anim.svg" alt="" />
            </div>
            <div className={styles.logoGlow}></div>
          </div>
          
          {/* Button - initially hidden, appears on scroll */}
          <div 
            className={`${styles.buttonContainer} ${styles.zIndex5}`}
            ref={buttonRef}
          >
            <button className={styles.createButton}>Let's build together</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StackSection;