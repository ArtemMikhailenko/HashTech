'use client'
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './DesignLabSection.module.css';

import design1 from '../../../../public/images/design1.png'; // Product & UI/UX Design
import design2 from '../../../../public/images/design2.png'; // Illustration & Motion Design
import design3 from '../../../../public/images/design3.png'; // Creative Content & Gamification
import design4 from '../../../../public/images/design4.png'; // Branding & Visual Identity

const DesignLabSection: React.FC = () => {
  const designContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  
  // Calculate positions based on screen width
  const getResponsivePositions = (width: number) => {
    // Desktop positions (default)
    let scattered = {
      design1: { right: '400px', top: '20px', opacity: 1, transform: 'translateX(0)' },
      design2: { left: '172px', top: '120px', opacity: 1, transform: 'translateX(0)' },
      design3: { left: '320px', top: '250px', opacity: 1, transform: 'translateX(0)' },
      design4: { right: '200px', top: '170px', opacity: 1, transform: 'translateX(0)' },
    };
    
    let stacked = {
      design1: { left: '500px', top: '0px', opacity: 1, transform: 'translateX(-50%)' },
      design2: { left: '570px', top: '120px', opacity: 1, transform: 'translateX(-50%)' },
      design3: { left: '500px', top: '180px', opacity: 1, transform: 'translateX(-50%)' },
      design4: { left: '400px', top: '240px', opacity: 1, transform: 'translateX(-50%)' },
    };
    
    // Tablet adjustments
    if (width < 1024 && width >= 768) {
      const centerX = width / 2;
      stacked = {
        design1: { left: `${centerX}px`, top: '0px', opacity: 1, transform: 'translateX(-50%)' },
        design2: { left: `${centerX + 40}px`, top: '120px', opacity: 1, transform: 'translateX(-50%)' },
        design3: { left: `${centerX}px`, top: '180px', opacity: 1, transform: 'translateX(-50%)' },
        design4: { left: `${centerX - 60}px`, top: '240px', opacity: 1, transform: 'translateX(-50%)' },
      };
      
      scattered = {
        design1: { right: '300px', top: '20px', opacity: 1, transform: 'translateX(0)' },
        design2: { left: '120px', top: '120px', opacity: 1, transform: 'translateX(0)' },
        design3: { left: '250px', top: '250px', opacity: 1, transform: 'translateX(0)' },
        design4: { right: '150px', top: '170px', opacity: 1, transform: 'translateX(0)' },
      };
    }
    
    // Mobile adjustments
    if (width < 768) {
      const centerX = width / 2;
      stacked = {
        design1: { left: `${centerX}px`, top: '0px', opacity: 1, transform: 'translateX(-50%)' },
        design2: { left: `${centerX + 20}px`, top: '100px', opacity: 1, transform: 'translateX(-50%)' },
        design3: { left: `${centerX}px`, top: '160px', opacity: 1, transform: 'translateX(-50%)' },
        design4: { left: `${centerX - 30}px`, top: '220px', opacity: 1, transform: 'translateX(-50%)' },
      };
      
      scattered = {
        design1: { left: '60%', top: '20px', opacity: 1, transform: 'translateX(-50%)' },
        design2: { left: '30%', top: '120px', opacity: 1, transform: 'translateX(-50%)' },
        design3: { left: '50%', top: '250px', opacity: 1, transform: 'translateX(-50%)' },
        design4: { left: '70%', top: '170px', opacity: 1, transform: 'translateX(-50%)' },
      };
    }
    
    return { scattered, stacked };
  };
  
  const { scattered, stacked } = getResponsivePositions(windowWidth);
  
  // Initial scattered positions
  const [designPositions, setDesignPositions] = useState(scattered);

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
            design1: interpolatePosition(scattered.design1, stacked.design1, animationProgress),
            design2: interpolatePosition(scattered.design2, stacked.design2, animationProgress),
            design3: interpolatePosition(scattered.design3, stacked.design3, animationProgress),
            design4: interpolatePosition(scattered.design4, stacked.design4, animationProgress),
          };
          setDesignPositions(interpolated);
        } else {
          // We're not in animation yet, use scattered positions
          setDesignPositions(scattered);
        }
      }
    };
    
    const handleScroll = () => {
      if (!designContainerRef.current || !sectionRef.current) return;

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
          design1: interpolatePosition(scattered.design1, stacked.design1, animationProgress),
          design2: interpolatePosition(scattered.design2, stacked.design2, animationProgress),
          design3: interpolatePosition(scattered.design3, stacked.design3, animationProgress),
          design4: interpolatePosition(scattered.design4, stacked.design4, animationProgress),
        };
        
        setDesignPositions(prevPositions => {
          // Only update if there's a significant change
          const hasChanged = Object.keys(newPositions).some(key => {
            const newPos = newPositions[key];
            const prevPos = prevPositions[key];
            return Math.abs(parseFloat(String(newPos.top)) - parseFloat(String(prevPos.top))) > 0.5;
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
            className={styles.designItem} 
            style={{ 
              left: designPositions.design2.left, 
              right: designPositions.design2.right,
              top: designPositions.design2.top,
              opacity: designPositions.design2.opacity,
              transform: designPositions.design2.transform,
              transition: 'all 0.5s ease-out',
              zIndex: 2
            }}
          >
            <Image src={design2} alt="Illustration & Motion Design" width={150} height={110} />
            <p>Illustration &<br />Motion Design</p>
          </div>
          
          <div 
            className={styles.designItem} 
            style={{ 
              left: designPositions.design1.left, 
              right: designPositions.design1.right,
              top: designPositions.design1.top,
              opacity: designPositions.design1.opacity,
              transform: designPositions.design1.transform,
              transition: 'all 0.5s ease-out',
              zIndex: 3
            }}
          >
            <Image src={design1} alt="Product & UI/UX Design" width={110} height={150} />
            <p>Product & UI/UX<br />Design</p>
          </div>
          
          <div 
            className={styles.designItem} 
            style={{ 
              left: designPositions.design4.left, 
              right: designPositions.design4.right,
              top: designPositions.design4.top,
              opacity: designPositions.design4.opacity,
              transform: designPositions.design4.transform,
              transition: 'all 0.5s ease-out',
              zIndex: 1
            }}
          >
            <Image src={design4} alt="Branding & Visual Identity" width={150} height={70} />
            <p>Branding & Visual<br />Identity</p>
          </div>
          
          <div 
            className={styles.designItem} 
            style={{ 
              left: designPositions.design3.left, 
              right: designPositions.design3.right,
              top: designPositions.design3.top,
              opacity: designPositions.design3.opacity,
              transform: designPositions.design3.transform,
              transition: 'all 0.5s ease-out',
              zIndex: 2
            }}
          >
            <Image src={design3} alt="Creative Content & Gamification" width={150} height={110} />
            <p>Creative Content<br />& Gamification</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignLabSection;