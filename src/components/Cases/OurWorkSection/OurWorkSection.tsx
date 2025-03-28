import React from 'react';
import styles from './OurWorkSection.module.css';

const OurWorkSection: React.FC = () => {
  return (
    <section className={styles.ourWorkSection}>
        <div className={styles.container}>
            <h2 className={styles.heading}>
                / Our Work. Your Success /
            </h2>
            <p className={styles.subheading}>
                Explore the products we&apos;ve built and see how we turn ideas into 
                powerful Web3 solution
            </p>
        </div>
    </section>
  );
};

export default OurWorkSection;
