'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './CasesSection.module.css';

// Import images
import yeetBg from '../../../../public/images/yeet-bg.png';
import notPixelBg from '../../../../public/images/not-pixel-bg.png';
import qappiBg from '../../../../public/images/qappi-bg.png';
import angryMinerBg from '../../../../public/images/angry-miner-bg.png';

// Import Swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const CasesSection: React.FC = () => {
const [isMobile, setIsMobile] = useState(false);
const [swiper, setSwiper] = useState<SwiperType | null>(null);
const [activeIndex, setActiveIndex] = useState(0);

// Cases data
const cases = [
  {
    id: 'yeet',
    title: 'Yeet',
    backgroundColor: '#a8b4c8',
    backgroundImage: yeetBg,
    tags: ['Design'],
    description: 'A DeFi hit on Berachain: $12.79M+ market cap, 30K+ stakers, 4.33M+ transactions, and a sold-out NFT collection.',
    strongParts: ['$12.79M+', '30K+', '4.33M+']
  },
  {
    id: 'not-pixel',
    title: 'Not pixel',
    backgroundColor: '#7a7a7a',
    backgroundImage: notPixelBg,
    tags: ['Design'],
    description: 'A Telegram-based pixel art game with 10M+ pixel placements and a thriving creative community',
    strongParts: ['10M+']
  },
  {
    id: 'qappi',
    title: 'Qappi',
    backgroundColor: '#bba8c8',
    backgroundImage: qappiBg,
    tags: ['Development', 'Design'],
    description: 'A Web3 engagement platform with 12M+ on-chain transactions and a branded tea line',
    strongParts: ['12M+']
  },
  {
    id: 'angry-miner',
    title: 'Angry miner',
    backgroundColor: '#a8c8b0',
    backgroundImage: angryMinerBg,
    tags: ['Development', 'Design'],
    description: 'A P2E success with 480K+ DAU, $2.59M+ in player transactions, and 120K+ user deposits',
    strongParts: ['480K+', '$2.59M+', '120K+']
  }
];

// Check screen size on mount and resize
useEffect(() => {
  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };
  
  // Initial check
  checkIsMobile();
  
  // Add resize listener
  window.addEventListener('resize', checkIsMobile);
  
  return () => {
    window.removeEventListener('resize', checkIsMobile);
  };
}, []);

// Mobile state for touch interactions
const [activeMobileCard, setActiveMobileCard] = useState<string | null>(null);

// Toggle mobile card active state
const toggleMobileCard = (id: string) => {
  setActiveMobileCard(activeMobileCard === id ? null : id);
};

// Handle navigation
const handlePrev = () => {
  if (swiper) {
    swiper.slidePrev();
  }
};

const handleNext = () => {
  if (swiper) {
    swiper.slideNext();
  }
};

const formatDescription = (description: string, strongParts: string[]) => {
  let result = description;
  
  strongParts.forEach(part => {
    result = result.replace(part, `<strong>${part}</strong>`);
  });
  
  return result;
};
return (
  <section className={styles.casesSection}>
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>See our <span className={styles.pixelText}>cases</span></h2>
        <Link href="/cases" className={styles.allButton}>All</Link>
      </div>
      
      {/* Desktop Grid View */}
      {!isMobile && (
        <div className={styles.cardsContainer}>
          {cases.map((caseItem) => (
            <Link href={`/cases/${caseItem.id}`} key={caseItem.id} className={styles.cardLink}>
              <div className={styles.card} style={{ backgroundColor: caseItem.backgroundColor }}>
                <div className={styles.backgroundImage}>
                  <Image src={caseItem.backgroundImage} alt="" layout="fill" objectFit="cover" />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{caseItem.title}</h3>
                  <div className={styles.tags}>
                    {caseItem.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                  <p 
                    className={styles.cardDescription}
                    dangerouslySetInnerHTML={{ 
                      __html: formatDescription(caseItem.description, caseItem.strongParts)
                    }}
                  />
                  <div className={styles.discoverButton}>
                    Discover more
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
      
      {/* Mobile Slider View */}
      {isMobile && (
        <div className={styles.mobileSliderContainer}>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            onSwiper={setSwiper}
            pagination={false}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className={styles.swiper}
          >
            {cases.map((caseItem) => (
              <SwiperSlide key={`mobile-${caseItem.id}`} className={styles.swiperSlide}>
                <div 
                  className={`${styles.card} ${activeMobileCard === caseItem.id ? styles.activeCard : ''}`} 
                  style={{ backgroundColor: caseItem.backgroundColor }}
                  onClick={() => toggleMobileCard(caseItem.id)}
                >
                  <div className={styles.backgroundImage}>
                    <Image src={caseItem.backgroundImage} alt="" layout="fill" objectFit="cover" />
                  </div>
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{caseItem.title}</h3>
                    <div className={styles.tags}>
                      {caseItem.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>{tag}</span>
                      ))}
                    </div>
                    <p 
                      className={styles.cardDescription}
                      dangerouslySetInnerHTML={{ 
                        __html: formatDescription(caseItem.description, caseItem.strongParts)
                      }}
                    />
                    <Link href={`/cases/${caseItem.id}`} className={styles.discoverButton}>
                      Discover more
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Mobile navigation buttons */}
          <div className={styles.navigationButtons}>
            <button 
              className={styles.navButton} 
              onClick={handlePrev}
              aria-label="Previous case"
            >
              <svg width="20" height="20" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.25 0.5L0.75 9L9.25 17.5V0.5Z" fill="black" />
                </svg>
            </button>
            <button 
              className={styles.navButton} 
              onClick={handleNext}
              aria-label="Next case"
            >
             <svg width="20" height="20" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.75 0.5L9.25 9L0.75 17.5V0.5Z" fill="black" />
                </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  </section>
);
};

export default CasesSection;