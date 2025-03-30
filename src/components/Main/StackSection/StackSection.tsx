'use client'
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './StackSection.module.css';

import pixelPattern from '../../../../public/images/pixel-pattern.png';
import dots from '../../../../public/images/dot-pattern2.png'
import lego1 from '../../../../public/images/lego1.svg';
import lego2 from '../../../../public/images/lego2.svg';
import lego3 from '../../../../public/images/lego3.svg';
import lego4 from '../../../../public/images/lego4.svg';
import lego5 from '../../../../public/images/lego5.svg';

const StackSection: React.FC = () => {
  const legoContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  // For responsive positioning
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  
  // Calculate positions based on screen width
  const getResponsivePositions = (width: number) => {
    // Desktop positions (default)
    let scattered = {
      lego1: { left: '400px', top: '0px', opacity: 1, transform: 'translateX(0)' },
      lego2: { left: '172px', top: '60px', opacity: 1, transform: 'translateX(0)' },
      lego3: { left: '320px', top: '220px', opacity: 1, transform: 'translateX(0)' },
      lego4: { right: '-280px', top: '280px', opacity: 1, transform: 'translateX(0)' },
      lego5: { right: '-200px', top: '120px', opacity: 1, transform: 'translateX(0)' },
    };
    
    let stacked = {
      lego1: { left: '500px', top: '0px', opacity: 1, transform: 'translateX(-50%)' },
      lego2: { left: '569px', top: '107px', opacity: 1, transform: 'translateX(-50%)' },
      lego3: { left: '500px', top: '172px', opacity: 1, transform: 'translateX(-50%)', },
      lego4: { left: '370px', top: '260px', opacity: 1, transform: 'translateX(-50%)' },
      lego5: { left: '560px', top: '350px', opacity: 1, transform: 'translateX(-50%)' },
    };
    
    // Tablet adjustments
    if (width < 1024 && width >= 768) {
      const centerX = width / 2;
      stacked = {
        lego1: { left: `${centerX}px`, top: '0px', opacity: 1, transform: 'translateX(-50%)' },
        lego2: { left: `${centerX + 50}px`, top: '100px', opacity: 1, transform: 'translateX(-50%)' },
        lego3: { left: `${centerX}px`, top: '160px', opacity: 1, transform: 'translateX(-50%)', },
        lego4: { left: `${centerX - 80}px`, top: '240px', opacity: 1, transform: 'translateX(-50%)' },
        lego5: { left: `${centerX + 40}px`, top: '320px', opacity: 1, transform: 'translateX(-50%)' },
      };
      
      scattered = {
        lego1: { left: '300px', top: '0px', opacity: 1, transform: 'translateX(0)' },
        lego2: { left: '100px', top: '60px', opacity: 1, transform: 'translateX(0)' },
        lego3: { left: '250px', top: '220px', opacity: 1, transform: 'translateX(0)' },
        lego4: { right: '100px', top: '280px', opacity: 1, transform: 'translateX(0)' },
        lego5: { right: '150px', top: '120px', opacity: 1, transform: 'translateX(0)' },
      };
    }
    
    // Mobile adjustments
    if (width < 768) {
      const centerX = width / 2;
      stacked = {
        lego1: { left: `${centerX}px`, top: '0px', opacity: 1, transform: 'translateX(-50%)' },
        lego2: { left: `${centerX + 30}px`, top: '80px', opacity: 1, transform: 'translateX(-50%)' },
        lego3: { left: `${centerX}px`, top: '140px', opacity: 1, transform: 'translateX(-50%)', },
        lego4: { left: `${centerX - 40}px`, top: '210px', opacity: 1, transform: 'translateX(-50%)' },
        lego5: { left: `${centerX + 20}px`, top: '270px', opacity: 1, transform: 'translateX(-50%)' },
      };
      
      scattered = {
        lego1: { left: '60%', top: '0px', opacity: 1, transform: 'translateX(-50%)' },
        lego2: { left: '30%', top: '60px', opacity: 1, transform: 'translateX(-50%)' },
        lego3: { left: '50%', top: '180px', opacity: 1, transform: 'translateX(-50%)' },
        //@ts-ignore
        lego4: { left: '40%', top: '250px', opacity: 1, transform: 'translateX(-50%)' },
        //@ts-ignore
        lego5: { left: '60%', top: '120px', opacity: 1, transform: 'translateX(-50%)' },
      };
    }
    
    return { scattered, stacked };
  };
  
  const { scattered, stacked } = getResponsivePositions(windowWidth);
  
  // Initial scattered positions
  const [legoPositions, setLegoPositions] = useState(scattered);
  
  // Target positions when stacked
  const stackedPositions = stacked;

  useEffect(() => {
    // Handle window resize for responsive positioning
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      const { scattered, stacked } = getResponsivePositions(window.innerWidth);
      
      // If we're already in animation, calculate appropriate intermediate positions
      if (sectionRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = 1 - (sectionRect.top / window.innerHeight);
        const animationProgress = Math.max(0, Math.min(1, (scrollProgress - 0.6) / 0.6));
        
        if (animationProgress > 0) {
          // We're in the midst of animation, interpolate between new positions
          const interpolated = {
            lego1: interpolatePosition(scattered.lego1, stacked.lego1, animationProgress),
            lego2: interpolatePosition(scattered.lego2, stacked.lego2, animationProgress),
            lego3: interpolatePosition(scattered.lego3, stacked.lego3, animationProgress),
            lego4: interpolatePosition(scattered.lego4, stacked.lego4, animationProgress),
            lego5: interpolatePosition(scattered.lego5, stacked.lego5, animationProgress),
          };
          setLegoPositions(interpolated);
        } else {
          // We're not in animation yet, use scattered positions
          setLegoPositions(scattered);
        }
      }
    };
    
    // Add resize listener
    window.addEventListener('resize', handleResize);
    
    const handleScroll = () => {
      if (!legoContainerRef.current || !sectionRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const windowHeight = window.innerHeight;
      
      // Calculate how far we've scrolled through the section
      // 0 = just entered view, 1 = completely scrolled past
      const scrollProgress = 1 - (sectionTop / windowHeight);
      
      // Start animation after 60% scroll, complete by full scroll
      const animationProgress = Math.max(0, Math.min(1, (scrollProgress - 0.6) / 0.6));
      
      // Only update if we're in the relevant scroll zone
      if (scrollProgress > 0 && scrollProgress < 1.2) {
        // Get current responsive positions based on screen width
        const { scattered, stacked } = getResponsivePositions(windowWidth);
        
        // Interpolate positions based on scroll
        const newPositions = {
          lego1: interpolatePosition(scattered.lego1, stacked.lego1, animationProgress),
          lego2: interpolatePosition(scattered.lego2, stacked.lego2, animationProgress),
          lego3: interpolatePosition(scattered.lego3, stacked.lego3, animationProgress),
          lego4: interpolatePosition(scattered.lego4, stacked.lego4, animationProgress),
          lego5: interpolatePosition(scattered.lego5, stacked.lego5, animationProgress),
        };
        
        setLegoPositions(prevPositions => {
          // Only update if there's a significant change
          const hasChanged = Object.keys(newPositions).some(key => {
            //@ts-ignore
            const newPos = newPositions[key];
            //@ts-ignore
            const prevPos = prevPositions[key];
            return Math.abs(parseFloat(newPos.top) - parseFloat(prevPos.top)) > 0.5;
          });
          
          return hasChanged ? newPositions : prevPositions;
        });
      }
    };

    // Helper function to interpolate positions
    const interpolatePosition = (start: any, end: any, progress: number) => {
      const result: any = { ...start };
      
      // Handle opacity 
      result.opacity = start.opacity + (end.opacity - start.opacity) * progress;
      
      // Handle transform
      if (end.transform) {
        result.transform = end.transform;
      }
      
      // Handle left/right positioning
      if (typeof start.left === 'string' && typeof end.left === 'string') {
        const startVal = parseInt(start.left, 10);
        const endVal = parseInt(end.left, 10);
        const interpolated = startVal + (endVal - startVal) * progress;
        result.left = `${interpolated}px`;
      }
      
      if (typeof start.right === 'string' && end.left) {
        // If transitioning from right to left position
        if (progress > 0.5) {
          delete result.right;
          const endVal = parseInt(end.left, 10);
          result.left = `${endVal}px`;
        }
      }
      
      // Handle top positioning
      if (typeof start.top === 'string' && typeof end.top === 'string') {
        const startVal = parseInt(start.top, 10);
        const endVal = parseInt(end.top, 10);
        const interpolated = startVal + (endVal - startVal) * progress;
        result.top = `${interpolated}px`;
      }
      
      return result;
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    // Initial calls
    handleScroll();
    handleResize();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);

  return (
    <section className={styles.stackSection} ref={sectionRef}>
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
        
        <div className={styles.legoContainer} ref={legoContainerRef}>
          <div 
            className={styles.legoItem} 
            style={{ 
              left: legoPositions.lego2.left, 
              top: legoPositions.lego2.top,
              opacity: legoPositions.lego2.opacity,
              transform: legoPositions.lego2.transform,
              transition: 'all 0.5s ease-out',
              zIndex:2,
            }}
          >
            <Image src={lego2} alt="Blockchain apps" width={132} height={178} />
            {/* <p>Blockchain apps<br />development</p> */}
          </div>
          
          <div 
            className={styles.legoItem} 
            style={{ 
              left: legoPositions.lego1.left, 
              top: legoPositions.lego1.top,
              opacity: legoPositions.lego1.opacity,
              transform: legoPositions.lego1.transform,
              transition: 'all 0.5s ease-out',
              zIndex:2,
            }}
          >
            <Image src={lego1} alt="Tap 2 Earn games" width={265} height={305} />
            {/* <p>Tap 2 Earn games<br />development</p> */}
          </div>
          
          <div 
            className={styles.legoItem} 
            style={{ 
              //@ts-ignore
              left: legoPositions.lego5.left, 
              right: legoPositions.lego5.right,
              top: legoPositions.lego5.top,
              opacity: legoPositions.lego5.opacity,
              transform: legoPositions.lego5.transform,
              transition: 'all 0.5s ease-out'
            }}
          >
            <Image src={lego5} alt="DeFi apps" width={110} height={77} />
            {/* <p>DeFi apps<br />development</p> */}
          </div>
          
          <div 
            className={styles.legoItem} 
            style={{ 
              left: legoPositions.lego3.left, 
              top: legoPositions.lego3.top,
              opacity: legoPositions.lego3.opacity,
              transform: legoPositions.lego3.transform,
              transition: 'all 0.5s ease-out',
              zIndex:1,
            }}
          >
            <Image src={lego3} alt="AI Agents" width={265} height={160} />
            {/* <p>AI Agents</p> */}
          </div>
          
          <div 
            className={styles.legoItem} 
            style={{ 
              //@ts-ignore
              left: legoPositions.lego4.left,
              right: legoPositions.lego4.right,
              top: legoPositions.lego4.top,
              opacity: legoPositions.lego4.opacity,
              transform: legoPositions.lego4.transform,
              transition: 'all 0.5s ease-out'
            }}
          >
            <Image src={lego4} alt="Smart Contracts" width={265} height={148} />
            {/* <p>Smart Contracts<br />development</p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StackSection;