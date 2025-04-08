import React from 'react';
import Link from 'next/link';
import styles from './PerfectRoleSection.module.css';


const PerfectRoleSection: React.FC = () => {
  
  return (
    <section className={styles.perfectRoleSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Haven't found the <br /><span className={styles.pixelText}>perfect</span> role?
        </h2>
        
        <div className={styles.ctaContent}>
          <p className={styles.ctaText}>
            We're always on the lookout for top talent<br />
            Whether you're a high-impact influencer
          </p>
          
          <Link href="https://calendly.com/ok-hashtech/30min" className={styles.ctaButton}>
            Let's talk!
          </Link>
          
          <p className={styles.ctaText}>
            or a seasoned expert ready to disrupt your<br />
            industry—let's build the future together
          </p>
        </div>
      </div>
      
    </section>
  );
};

export default PerfectRoleSection;