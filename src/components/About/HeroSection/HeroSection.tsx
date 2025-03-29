import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>
          <p className={styles.titlePrefix}>/ We empower Web3 innovation with  <span className={styles.pixelText}>cutting-edge</span> solutions/</p>
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