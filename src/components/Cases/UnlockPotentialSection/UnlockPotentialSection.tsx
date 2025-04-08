import React from 'react';
import Link from 'next/link';
import styles from './UnlockPotentialSection.module.css';

const UnlockPotentialSection: React.FC = () => {
  return (
    <section className={styles.unlockSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Unlock Your<br />
          Project's Full<br />
          Potential
        </h2>
        
        <p className={styles.description}>
          Get tailored strategies, high-converting design, and expert execution from
          HashTech's top Web3 specialists. Let's turn your vision into a thriving product.
        </p>
        
        <Link href="https://calendly.com/ok-hashtech/30min" className={styles.consultationButton}>
          Book a consultation now
        </Link>
      </div>
    </section>
  );
};

export default UnlockPotentialSection;