import React from 'react';
import Link from 'next/link';
import styles from './TeamSection.module.css';

const TeamSection: React.FC = () => {
  return (
    <section className={styles.teamSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Team <span className={styles.titleHighlight}>/C-level/</span></h2>
        
        <div className={styles.teamGrid}>
          <div className={styles.memberCard}>
            <div className={styles.cardDogEar}></div>
            <div className={styles.memberInfo}>
              <h3 className={styles.memberName}>Alex<br />Kondratenko</h3>
              
              <div className={styles.memberRole}>
                <h4 className={styles.roleTitle}>Founder & CEO</h4>
                <p className={styles.memberBio}>
                  Alex is a visionary leader with a strong background in product development. Passionate about Web3, he drives HashTech's mission to build cutting-edge blockchain solutions, setting the strategic direction and ensuring product excellence.
                </p>
              </div>
              
              <div className={styles.socialLinks}>
                <Link href="https://linkedin.com" className={styles.socialLink}>
                  <span className={styles.linkIcon}>in</span>
                </Link>
                <Link href="https://twitter.com" className={styles.socialLink}>
                  <span className={styles.linkIcon}>𝕏</span>
                </Link>
              </div>
            </div>
          </div>
          
          <div className={styles.memberCard}>
            <div className={styles.cardDogEar}></div>
            <div className={styles.memberInfo}>
              <h3 className={styles.memberName}>Vladimir<br />Pulniashenko</h3>
              
              <div className={styles.memberRole}>
                <h4 className={styles.roleTitle}>Co-founder & CTO</h4>
                <p className={styles.memberBio}>
                  Vladimir drives innovation at HashTech with his expertise in smart contracts and scalable blockchain solutions, keeping our products at the forefront of Web3.
                </p>
              </div>
              
              <div className={styles.socialLinks}>
                <Link href="https://linkedin.com" className={styles.socialLink}>
                  <span className={styles.linkIcon}>in</span>
                </Link>
                <Link href="https://twitter.com" className={styles.socialLink}>
                  <span className={styles.linkIcon}>𝕏</span>
                </Link>
              </div>
            </div>
          </div>
          
          <div className={styles.memberCard}>
            <div className={styles.cardDogEar}></div>
            <div className={styles.memberInfo}>
              <h3 className={styles.memberName}>Esenia<br />Romanovskaia</h3>
              
              <div className={styles.memberRole}>
                <h4 className={styles.roleTitle}>Co-founder & Creative Director</h4>
                <p className={styles.memberBio}>
                  Focuses on HashTech's global growth, partnerships, and creative strategy to drive Web3 adoption
                </p>
              </div>
              
              <div className={styles.socialLinks}>
                <Link href="https://linkedin.com" className={styles.socialLink}>
                  <span className={styles.linkIcon}>in</span>
                </Link>
                <Link href="https://twitter.com" className={styles.socialLink}>
                  <span className={styles.linkIcon}>𝕏</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;