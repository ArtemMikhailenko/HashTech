import React from 'react';
import styles from './CaseStudiesSection.module.css';
import Image from 'next/image';
import pixelPattern from '../../../../public/images/pixel-pattern.png';
interface CaseTag {
  name: string;
  backgroundColor: string;
}

interface CaseStudy {
  title: string;
  description: string;
  cost: string;
  services: string[];
  sectors: CaseTag[];
}

const CaseStudiesSection: React.FC = () => {
  // Data matches exactly the case studies shown in the image
  const caseStudies: CaseStudy[] = [
    {
      title: 'Angry miner',
      description: 'A P2E success with 480K+ DAU, $2.59M+ in player transactions, and 120K+ user deposits',
      cost: '40,000$',
      services: ['Development', 'Design', 'Marketing'],
      sectors: [
        { name: 'Blockchain', backgroundColor: '#8595ad' },
        { name: 'Play-to-Earn (P2E)', backgroundColor: '#85ad8a' },
        { name: 'Cryptocurrency', backgroundColor: '#ad85ac' }
      ]
    },
    {
      title: 'Qappi',
      description: 'A Web3 engagement platform with 12M+ on-chain transactions and a branded tea line',
      cost: '105,000',
      services: ['Development', 'Design'],
      sectors: [
        { name: 'Blockchain', backgroundColor: '#8595ad' },
        { name: 'Gamification', backgroundColor: '#85ad8a' },
        { name: 'Community Growth', backgroundColor: '#ad85ac' }
      ]
    },
    {
      title: 'Not Pixel',
      description: 'A Telegram-based pixel art game with 10M+ pixel placements and a thriving creative community',
      cost: '25,000',
      services: ['Design'],
      sectors: [
        { name: 'Blockchain', backgroundColor: '#8595ad' },
        { name: 'Play-to-Earn (P2E)', backgroundColor: '#85ad8a' },
        { name: 'NFT', backgroundColor: '#ad85ac' }
      ]
    },
    {
      title: 'Yeet',
      description: 'A DeFi hit on Berachain: $12.79M+ market cap, 30K+ stakers, 4.33M+ transactions, and a sold-out NFT collection.',
      cost: '25,000',
      services: ['Design', 'Animation'],
      sectors: [
        { name: 'Blockchain', backgroundColor: '#8595ad' },
        { name: 'DeFi', backgroundColor: '#85ad8a' },
        { name: 'NFT', backgroundColor: '#ad85ac' }
      ]
    }
  ];

  return (
    <section className={styles.caseStudiesSection}>
      <div className={styles.container}>
        <div className={styles.casesList}>
          {caseStudies.map((caseStudy, index) => (
            <div key={index} className={styles.caseCard}>
              <div className={styles.caseCardInner}>
                <div className={styles.folded}></div>
                <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 45.6968V2.9998L59 59.9998H16.303C8.40368 59.9998 2 53.5961 2 45.6968Z" fill="#FBF8F0" stroke="black" stroke-width="2.38384" />
                </svg>
                <h3 className={styles.caseTitle}>{caseStudy.title}</h3>
                <p className={styles.caseDescription}>{caseStudy.description}</p>
                
                <div className={styles.caseDetails}>
                  <div className={styles.detailColumn}>
                    <h4 className={styles.detailTitle}>Cost</h4>
                    <div className={styles.tagGroup}>
                      <span className={styles.costTag}>{caseStudy.cost}</span>
                    </div>
                  </div>
                  
                  <div className={styles.detailColumn}>
                    <h4 className={styles.detailTitle}>Service</h4>
                    <div className={styles.tagGroup}>
                      {caseStudy.services.map((service, serviceIndex) => (
                        <span key={serviceIndex} className={styles.serviceTag}>{service}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className={styles.detailColumn}>
                    <h4 className={styles.detailTitle}>Sectors</h4>
                    <div className={styles.tagGroup}>
                      {caseStudy.sectors.map((sector, sectorIndex) => (
                        <span 
                          key={sectorIndex} 
                          className={styles.sectorTag}
                          style={{ backgroundColor: sector.backgroundColor }}
                        >
                          {sector.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.pixelPatternContainer}>
        <Image 
          src={pixelPattern} 
          alt="Pixel Pattern" 
          className={styles.pixelPattern}
          layout="responsive"
        />
      </div>
    </section>
  );
};

export default CaseStudiesSection;