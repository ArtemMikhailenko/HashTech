import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>
          <span className={styles.titlePrefix}>/ We empower Web3 innovation with</span>
          <span className={styles.pixelText}>cutting-edge</span>
          <span className={styles.titleSuffix}>solutions/</span>
        </h1>
        <p className={styles.description}>
          HashTech builds and scales decentralized technologies, transforming ideas
          into secure, high-performance blockchain applications
        </p>
      </div>
    </section>
  );
};

export default HeroSection;