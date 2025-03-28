import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './CasesSection.module.css';

import yeetBg from '../../../../public/images/yeet-bg.png';
import notPixelBg from '../../../../public/images/not-pixel-bg.png';
import qappiBg from '../../../../public/images/qappi-bg.png';
import angryMinerBg from '../../../../public/images/angry-miner-bg.png';

const CasesSection: React.FC = () => {
  return (
    <section className={styles.casesSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>See our <span className={styles.pixelText}>cases</span></h2>
          <Link href="/cases" className={styles.allButton}>All</Link>
        </div>
        
        <div className={styles.cardsContainer}>
          <Link href="/cases/yeet" className={styles.cardLink}>
            <div className={styles.card} style={{ backgroundColor: '#a8b4c8' }}>
              <div className={styles.backgroundImage}>
                <Image src={yeetBg} alt="" layout="fill" objectFit="cover" />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Yeet</h3>
                <div className={styles.tags}>
                  <span className={styles.tag}>Design</span>
                </div>
                <p className={styles.cardDescription}>
                  A DeFi hit on Berachain: 
                  <strong> $12.79M+</strong> market cap, <strong>30K+</strong> 
                  stakers, <strong>4.33M+</strong> 
                  transactions, and a sold-
                  out NFT collection.
                </p>
                <div className={styles.discoverButton}>
                  Discover more
                </div>
              </div>
            </div>
          </Link>
          
          <Link href="/cases/not-pixel" className={styles.cardLink}>
            <div className={styles.card} style={{ backgroundColor: '#7a7a7a' }}>
              <div className={styles.backgroundImage}>
                <Image src={notPixelBg} alt="" layout="fill" objectFit="cover" />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Not pixel</h3>
                <div className={styles.tags}>
                  <span className={styles.tag}>Design</span>
                </div>
                <p className={styles.cardDescription}>
                  A Telegram-based pixel art 
                  game with <strong>10M+</strong> pixel 
                  placements and a thriving 
                  creative community
                </p>
                <div className={styles.discoverButton}>
                  Discover more
                </div>
              </div>
            </div>
          </Link>
          
          <Link href="/cases/qappi" className={styles.cardLink}>
            <div className={styles.card} style={{ backgroundColor: '#bba8c8' }}>
              <div className={styles.backgroundImage}>
                <Image src={qappiBg} alt="" layout="fill" objectFit="cover" />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Qappi</h3>
                <div className={styles.tags}>
                  <span className={styles.tag}>Development</span>
                  <span className={styles.tag}>Design</span>
                </div>
                <p className={styles.cardDescription}>
                  A Web3 engagement platform 
                  with <strong>12M+</strong> on-chain 
                  transactions and a branded 
                  tea line
                </p>
                <div className={styles.discoverButton}>
                  Discover more
                </div>
              </div>
            </div>
          </Link>
          
          <Link href="/cases/angry-miner" className={styles.cardLink}>
            <div className={styles.card} style={{ backgroundColor: '#a8c8b0' }}>
              <div className={styles.backgroundImage}>
                <Image src={angryMinerBg} alt="" layout="fill" objectFit="cover" />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Angry miner</h3>
                <div className={styles.tags}>
                  <span className={styles.tag}>Development</span>
                  <span className={styles.tag}>Design</span>
                </div>
                <p className={styles.cardDescription}>
                  A P2E success with <strong>480K+</strong> 
                  DAU, <strong>$2.59M+</strong> in player 
                  transactions, and <strong>120K+</strong> 
                  user deposits
                </p>
                <div className={styles.discoverButton}>
                  Discover more
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;