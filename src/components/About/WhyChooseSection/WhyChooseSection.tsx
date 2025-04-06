'use client'
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './WhyChooseSection.module.css';

import pixelPattern from '../../../../public/images/pixel-pattern.png';
import dots from '../../../../public/images/dot-pattern2.png';

const WhyChooseSection: React.FC = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const featureCards = useRef<HTMLDivElement[]>([]);

  // Function to check if an element is in viewport
  const isElementInViewport = (el: HTMLElement) => {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    // Check if the center of the card is in the middle portion of the screen
    const cardCenter = rect.top + rect.height / 2;
    const viewportCenter = windowHeight / 2;
    const threshold = windowHeight / 4; // Adjust this value to control how close to center it needs to be
    
    return Math.abs(cardCenter - viewportCenter) < threshold;
  };

  // Handle scroll event to check which cards are in viewport
  const handleScroll = () => {
    // Only apply this effect on mobile devices
    if (window.innerWidth <= 768) {
      let activeCardFound = false;
      
      // First, find which card should be active based on viewport position
      featureCards.current.forEach((card) => {
        if (card && isElementInViewport(card) && !activeCardFound) {
          activeCardFound = true;
          const cardWrapper = card.querySelector(`.${styles.cardWrapper}`) ||
                            card.querySelector(`.${styles.cardWrapperR}`);
          
          if (cardWrapper) {
            // Add active class to the card in viewport
            cardWrapper.classList.add(styles.activeCard);
          }
        } else if (card) {
          // Remove active class from all other cards
          const cardWrapper = card.querySelector(`.${styles.cardWrapper}`) ||
                            card.querySelector(`.${styles.cardWrapperR}`);
          
          if (cardWrapper) {
            cardWrapper.classList.remove(styles.activeCard);
          }
        }
      });
    }
  };

  // Function to adjust classes for mobile view
  const adjustClassesForMobile = () => {
    if (window.innerWidth <= 768) {
      // Find all elements with R classes and replace them with non-R classes
      const cardWrappersR = document.querySelectorAll(`.${styles.cardWrapperR}`);
      const cardContentsR = document.querySelectorAll(`.${styles.cardContentR}`);
      const dogEarsR = document.querySelectorAll(`.${styles.dogEarR}`);

      cardWrappersR.forEach(element => {
        element.classList.remove(styles.cardWrapperR);
        element.classList.add(styles.cardWrapper);
        
        // Change SVG path to match the non-R version
        const svg = element.querySelector('svg path');
        if (svg) {
          svg.setAttribute('d', 'M1.63672 0.161705L3.50401 25.6813C4.00712 32.5572 9.73241 37.8789 16.6267 37.8789H55.4527');
        }
      });

      cardContentsR.forEach(element => {
        element.classList.remove(styles.cardContentR);
        element.classList.add(styles.cardContent);
      });

      dogEarsR.forEach(element => {
        element.classList.remove(styles.dogEarR);
        element.classList.add(styles.dogEar);
      });
    } else {
      // Restore original classes for desktop view
      // We need to check which ones should actually be R variants
      // We can identify them by their parent's position in the grid
      featureCards.current.forEach((card, index) => {
        if (index % 2 === 1) { // Odd indexes should have R classes
          const wrapper = card.querySelector(`.${styles.cardWrapper}`);
          const content = card.querySelector(`.${styles.cardContent}`);
          const dogEar = card.querySelector(`.${styles.dogEar}`);

          if (wrapper) {
            wrapper.classList.remove(styles.cardWrapper);
            wrapper.classList.add(styles.cardWrapperR);
            
            // Change SVG path back to the R version
            const svg = wrapper.querySelector('svg path');
            if (svg) {
              svg.setAttribute('d', 'M54.3555 0.258209L52.4882 25.7778C51.9851 32.6537 46.2598 37.9754 39.3655 37.9754H0.539457');
            }
          }

          if (content) {
            content.classList.remove(styles.cardContent);
            content.classList.add(styles.cardContentR);
          }

          if (dogEar) {
            dogEar.classList.remove(styles.dogEar);
            dogEar.classList.add(styles.dogEarR);
          }
        }
      });
    }
  };

  useEffect(() => {
    // Initialize the refs array with the card elements
    if (featuresRef.current) {
      featureCards.current = Array.from(
        featuresRef.current.querySelectorAll(`.${styles.featureCard}`)
      );
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Add resize event listener to handle class changes on screen resize
    window.addEventListener('resize', adjustClassesForMobile);
    
    // Initial checks
    handleScroll();
    adjustClassesForMobile();
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', adjustClassesForMobile);
    };
  }, []);

  return (
    <section className={styles.whyChooseSection}>
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
        <h2 className={styles.sectionTitle}>Why choose <span className={styles.phoneticText}>[  hæʃ tɛk  ]</span> ?</h2>
        
        <div className={styles.featuresGrid} ref={featuresRef}>
          <div className={styles.featureCard}>
            <div className={styles.cardWrapper} style={{ '--hover-image': `url(/images/why-choose/img2.webp)` } as React.CSSProperties}>
              <div className={styles.cardContent}>
                <h3 className={styles.featureTitle}>From idea to execution</h3>
                <p className={styles.featureDescription}>
                  We don't just write code – we turn concepts into <span className={styles.highlight}>fully functional products</span>. From architecture and development to deployment and support, we guide you through every stage.
                </p>
              </div>
              <div className={styles.dogEar}></div>
              <svg width="66" height="45" viewBox="0 0 66 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.63672 0.161705L3.50401 25.6813C4.00712 32.5572 9.73241 37.8789 16.6267 37.8789H55.4527" stroke="black" strokeWidth="2.19297" />
              </svg>
            </div>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.cardWrapperR} style={{ '--hover-image': `url(/images/why-choose/img3.webp)` } as React.CSSProperties}>
              <div className={styles.cardContentR}>
                <h3 className={styles.featureTitle}>Agile & Scalable Development</h3>
                <p className={styles.featureDescription}>
                  With a flexible approach and cutting-edge technology, <span className={styles.highlight}>we build scalable solutions</span> that handle high demand and adapt seamlessly to evolving requirements.
                </p>
              </div>
              <div className={styles.dogEarR}></div>
              <svg width="66" height="45" viewBox="0 0 66 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M54.3555 0.258209L52.4882 25.7778C51.9851 32.6537 46.2598 37.9754 39.3655 37.9754H0.539457" stroke="black" strokeWidth="2.19297" />
              </svg>
            </div>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.cardWrapper} style={{ '--hover-image': `url(/images/why-choose/img1.webp)` } as React.CSSProperties}>
              <div className={styles.cardContent}>
                <h3 className={styles.featureTitle}>Expertise that delivers</h3>
                <p className={styles.featureDescription}>
                  We specialize in Web3 development, combining deep industry knowledge with <span className={styles.normalText}>hands-on experience</span>. Our team <span className={styles.highlight}>ensures</span> your project is built with precision, efficiency, and innovation.
                </p>
              </div>
              <div className={styles.dogEar}></div>
              <svg width="66" height="45" viewBox="0 0 66 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.63672 0.161705L3.50401 25.6813C4.00712 32.5572 9.73241 37.8789 16.6267 37.8789H55.4527" stroke="black" strokeWidth="2.19297" />
              </svg>
            </div>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.cardWrapperR} style={{ '--hover-image': `url(/images/why-choose/img4.webp)` } as React.CSSProperties}>
              <div className={styles.cardContentR}>
                <h3 className={styles.featureTitle}>Trust & Security First</h3>
                <p className={styles.featureDescription}>
                  In blockchain, trust is everything. <span className={styles.highlight}>We prioritize security</span>, conduct thorough smart contract audits, and implement <span className={styles.highlight}>robust data</span> protection measures to ensure your product is reliable and secure.
                </p>
              </div>
              <div className={styles.dogEarR}></div>
              <svg width="66" height="45" viewBox="0 0 66 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M54.3555 0.258209L52.4882 25.7778C51.9851 32.6537 46.2598 37.9754 39.3655 37.9754H0.539457" stroke="black" strokeWidth="2.19297" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;