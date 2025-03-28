import React from 'react';
import Image from 'next/image';
import styles from './StackSection.module.css';

import pixelPattern from '../../../../public/images/pixel-pattern.png';
import lego1 from '../../../../public/images/lego1.png';
import lego2 from '../../../../public/images/lego2.png';
import lego3 from '../../../../public/images/lego3.png';
import lego4 from '../../../../public/images/lego4.png';
import lego5 from '../../../../public/images/lego5.png';

const StackSection: React.FC = () => {
  return (
    <section className={styles.stackSection}>
      <div className={styles.pixelPatternContainer}>
        <Image 
          src={pixelPattern} 
          alt="Pixel Pattern" 
          className={styles.pixelPattern}
          layout="responsive"
        />
      </div>
      
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>/BILD & KOHd/</h2>
        
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
        
        <div className={styles.legoContainer}>
          <div className={styles.legoItem} style={{ left: '172px', top: '60px' }}>
            <Image src={lego2} alt="Blockchain apps" width={150} height={150} />
            <p>Blockchain apps<br />development</p>
          </div>
          
          <div className={styles.legoItem} style={{ left: '400px', top: '0px' }}>
            <Image src={lego1} alt="Tap 2 Earn games" width={110} height={110} />
            <p>Tap 2 Earn games<br />development</p>
          </div>
          
          <div className={styles.legoItem} style={{ right: '200px', top: '120px' }}>
            <Image src={lego5} alt="DeFi apps" width={150} height={110} />
            <p>DeFi apps<br />development</p>
          </div>
          
          <div className={styles.legoItem} style={{ left: '320px', top: '220px' }}>
            <Image src={lego3} alt="AI Agents" width={180} height={80} />
            <p>AI Agents</p>
          </div>
          
          <div className={styles.legoItem} style={{ right: '280px', top: '280px' }}>
            <Image src={lego4} alt="Smart Contracts" width={80} height={50} />
            <p>Smart Contracts<br />development</p>
          </div>
          
          
        </div>
      </div>
    </section>
  );
};

export default StackSection;