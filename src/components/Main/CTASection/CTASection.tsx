import React from 'react';
import Link from 'next/link';
import styles from './CTASection.module.css';

const CTASection: React.FC = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          We're always on<br />
          the lookout <span className={styles.pixelText}>for</span> an<br />
          interesting <span className={styles.projectText}>[projekt]</span>
        </h2>
        
        <div className={styles.ctaContent}>
          <div className={styles.leftText}>
            <p>If you are a founder with an idea for your own web3 project</p>
          </div>
          
          <Link href="/contact" className={styles.ctaButton}>
            Let's talk!
          </Link>
          
          <div className={styles.rightText}>
            <p>If you are the founder of a successful project and need outsourcing solutions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;