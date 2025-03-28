import React from 'react';
import styles from './AboutSection.module.css';

const AboutSection: React.FC = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            About <span className={styles.pronunciation}>[ hæʃˈtɛk ]</span>
          </h2>
          
          <div className={styles.description}>
            <p className={styles.paragraph}>
              Founded in 2024, HashTech is a globally distributed team of 15+ Web3 experts 
              building cutting-edge blockchain solutions. From smart contracts to scalable 
              dApps, we craft high-performance products that redefine decentralized technology.
            </p>
            
            <p className={styles.paragraph}>
              We thrive on innovation, agility, and security, delivering robust architectures 
              and seamless user experiences. Join us to push the boundaries of Web3 and shape 
              the future of decentralized ecosystems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;