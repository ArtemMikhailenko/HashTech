import React from 'react';
import Image from 'next/image';
import styles from './WhyChooseSection.module.css';

import pixelPattern from '../../../../public/images/pixel-pattern.png';

const WhyChooseSection: React.FC = () => {
  return (
    <section className={styles.whyChooseSection}>
      <div className={styles.pixelPatternContainer}>
        <Image 
          src={pixelPattern} 
          alt="Pixel Pattern" 
          className={styles.pixelPattern}
          width={1200}
          height={150}
        />
      </div>
      
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Why choose <span className={styles.phoneticText}>[ hæʃtɛk ]</span> ?</h2>
        
        <div className={styles.featuresGrid}>
          <div className={styles.featureCardWrapper}>
            <div className={styles.featureCard}>
              <div className={styles.cardDogEar}></div>
              <h3 className={styles.featureTitle}>From idea to execution</h3>
              <p className={styles.featureDescription}>
                We don't just write code – we turn concepts into <span className={styles.highlight}>fully functional products</span>. From architecture and development to deployment and support, we guide you through every stage.
              </p>
            </div>
          </div>
          
          <div className={styles.featureCardWrapper}>
            <div className={styles.featureCard}>
              <div className={styles.cardDogEar}></div>
              <h3 className={styles.featureTitle}>Agile & Scalable Development</h3>
              <p className={styles.featureDescription}>
                With a flexible approach and cutting-edge technology, <span className={styles.highlight}>we build scalable solutions</span> that handle high demand and adapt seamlessly to evolving requirements.
              </p>
            </div>
          </div>
          
          <div className={styles.featureCardWrapper}>
            <div className={styles.featureCard}>
              <div className={styles.cardDogEar}></div>
              <h3 className={styles.featureTitle}>Expertise that delivers</h3>
              <p className={styles.featureDescription}>
                We specialize in Web3 development, combining deep industry knowledge with <span className={styles.highlight}>hands-on experience</span>. Our team ensures your project is built with precision, efficiency, and innovation.
              </p>
            </div>
          </div>
          
          <div className={styles.featureCardWrapper}>
            <div className={styles.featureCard}>
              <div className={styles.cardDogEar}></div>
              <h3 className={styles.featureTitle}>Trust & Security First</h3>
              <p className={styles.featureDescription}>
                In blockchain, trust is everything. <span className={styles.highlight}>We prioritize security</span>, conduct thorough smart contract audits, and implement <span className={styles.highlight}>robust data protection</span> measures to ensure your product is reliable and secure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;