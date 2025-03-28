import React from 'react';
import Link from 'next/link';
import styles from './OpenPositionsSection.module.css';

const OpenPositionsSection: React.FC = () => {
  return (
    <section className={styles.openPositionsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>/ Open <span className={styles.pixelText}>Positions</span> /</h2>
        
        <p className={styles.description}>
          Join our team and build the future of Web3. Explore open 
          roles and become part of something bigger.
        </p>
        
        <Link href="/careers" className={styles.joinButton}>
          Join our team
        </Link>
      </div>
    </section>
  );
};

export default OpenPositionsSection;