import React from 'react';
import Image from 'next/image';
import styles from './DesignLabSection.module.css';

import design1 from '../../../../public/images/design1.png'; // Product & UI/UX Design
import design2 from '../../../../public/images/design2.png'; // Illustration & Motion Design
import design3 from '../../../../public/images/design3.png'; // Creative Content & Gamification
import design4 from '../../../../public/images/design4.png'; // Branding & Visual Identity

const DesignLabSection: React.FC = () => {
  return (
    <section className={styles.designLabSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>/ Design Lab /</h2>
        
        <div className={styles.stackCard}>
          <div className={styles.stackInfo}>
            <div className={styles.stackHeader}>
              <h3>Stack</h3>
              <div className={styles.cardCorner}></div>
            </div>
            
            <div className={styles.stackDetails}>
              <p><span>Frontend:</span> React, Typescript, JavaScript</p>
              <p><span>Backend:</span> NodeJS, Typescript, Postgres, Subgraph</p>
              <p><span>Blockchain:</span> Ethereum, Solidity Solidity Solidity</p>
              <p><span>Infrastructure:</span> CloudFlare, DigitalOcean</p>
            </div>
          </div>
          
          <div className={styles.stackDescription}>
            <p>
              Blockchain developers at hashtech can assist you with creating robust blockchain-powered applications and distributed system
            </p>
          </div>
        </div>
        
        <div className={styles.designContainer}>
          <div className={styles.designItem} style={{ left: '172px', top: '120px' }}>
            <Image src={design2} alt="Illustration & Motion Design" width={150} height={110} />
            <p>Illustration &<br />Motion Design</p>
          </div>
          
          <div className={styles.designItem} style={{ right: '400px', top: '20px' }}>
            <Image src={design1} alt="Product & UI/UX Design" width={110} height={150} />
            <p>Product & UI/UX<br />Design</p>
          </div>
          
          <div className={styles.designItem} style={{ right: '200px', top: '170px' }}>
            <Image src={design4} alt="Branding & Visual Identity" width={150} height={70} />
            <p>Branding & Visual<br />Identity</p>
          </div>
          
          <div className={styles.designItem} style={{ left: '320px', top: '250px' }}>
            <Image src={design3} alt="Creative Content & Gamification" width={150} height={110} />
            <p>Creative Content<br />& Gamification</p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default DesignLabSection;