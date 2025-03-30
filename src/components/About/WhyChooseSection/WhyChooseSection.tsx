import React from 'react';
import Image from 'next/image';
import styles from './WhyChooseSection.module.css';

import pixelPattern from '../../../../public/images/pixel-pattern.png';
import dots from '../../../../public/images/dot-pattern2.png'

const WhyChooseSection: React.FC = () => {
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
        
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.cardWrapper}  style={{ '--hover-image': `url(/images/why-choose/img2.png)` } as React.CSSProperties}>
              <div className={styles.cardContent}>
                <h3 className={styles.featureTitle}>From idea to execution</h3>
                <p className={styles.featureDescription}>
                  We don't just write code – we turn concepts into <span className={styles.highlight}>fully functional products</span>. From architecture and development to deployment and support, we guide you through every stage.
                </p>
              </div>
              <div className={styles.dogEar}>
              
              </div>
              <svg width="66" height="45" viewBox="0 0 66 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.63672 0.161705L3.50401 25.6813C4.00712 32.5572 9.73241 37.8789 16.6267 37.8789H55.4527" stroke="black" stroke-width="2.19297" />
              </svg>
            </div>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.cardWrapperR}  style={{ '--hover-image': `url(/images/why-choose/img3.png)` } as React.CSSProperties}>
              <div className={styles.cardContentR}>
                <h3 className={styles.featureTitle}>Agile & Scalable Development</h3>
                <p className={styles.featureDescription}>
                  With a flexible approach and cutting-edge technology, <span className={styles.highlight}>we build scalable solutions</span> that handle high demand and adapt seamlessly to evolving requirements.
                </p>
              </div>
              <div className={styles.dogEarR}>
              
              </div>
              <svg width="66" height="45" viewBox="0 0 66 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M54.3555 0.258209L52.4882 25.7778C51.9851 32.6537 46.2598 37.9754 39.3655 37.9754H0.539457" stroke="black" stroke-width="2.19297" />
              </svg>
            </div>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.cardWrapper}  style={{ '--hover-image': `url(/images/why-choose/img1.png)` } as React.CSSProperties}>
              <div className={styles.cardContent}>
                <h3 className={styles.featureTitle}>Expertise that delivers</h3>
                <p className={styles.featureDescription}>
                  We specialize in Web3 development, combining deep industry knowledge with <span className={styles.normalText}>hands-on experience</span>. Our team <span className={styles.highlight}>ensures</span> your project is built with precision, efficiency, and innovation.
                </p>
              </div>
              <div className={styles.dogEar}>
              
              </div>
              <svg width="66" height="45" viewBox="0 0 66 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.63672 0.161705L3.50401 25.6813C4.00712 32.5572 9.73241 37.8789 16.6267 37.8789H55.4527" stroke="black" stroke-width="2.19297" />
              </svg>
            </div>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.cardWrapperR}  style={{ '--hover-image': `url(/images/why-choose/img4.png)` } as React.CSSProperties}>
              <div className={styles.cardContentR}>
                <h3 className={styles.featureTitle}>Trust & Security First</h3>
                <p className={styles.featureDescription}>
                  In blockchain, trust is everything. <span className={styles.highlight}>We prioritize security</span>, conduct thorough smart contract audits, and implement <span className={styles.highlight}>robust data</span> protection measures to ensure your product is reliable and secure.
                </p>
              </div>
              <div className={styles.dogEarR}>
              
              </div>
              <svg width="66" height="45" viewBox="0 0 66 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M54.3555 0.258209L52.4882 25.7778C51.9851 32.6537 46.2598 37.9754 39.3655 37.9754H0.539457" stroke="black" stroke-width="2.19297" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;