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
import pixelPattern from '../../../../public/images/pixel-pattern.png';
import dots from '../../../../public/images/dot-pattern2.png';

// Import Swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

interface CaseItem {
  id: string;
  title: string;
  backgroundColor: string;
  backgroundImage: any;
  tags: string[];
  description: string;
  strongParts: string[];
}

const CasesSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  
  // Case data array
  const cases: CaseItem[] = [
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

  // Check screen size on component mount and window resize
  useEffect(() => {
    setIsClient(true);
    
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 600);
      setIsTablet(window.innerWidth <= 900 && window.innerWidth > 600);
    };
    
    // Initial check
    checkScreenSize();
    
    // Add resize listener
    window.addEventListener('resize', checkScreenSize);
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  // Format description with highlighted parts
  const formatDescription = (description: string, strongParts: string[]) => {
    let result = description;
    
    strongParts.forEach(part => {
      result = result.replace(part, `<strong>${part}</strong>`);
    });
    
    return result;
  };

  // Handle navigation for slider
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

  // Helper function to render case card
  const renderCaseCard = (caseItem: CaseItem) => (
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
  );

  return (
    <section className={styles.casesSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>See our <span className={styles.pixelText}>cases</span></h2>
          <Link href="/cases" className={styles.allButton}>All</Link>
        </div>
        
        {/* Desktop Grid View - only visible on desktop */}
        {isClient && !isMobile && !isTablet && (
          <div className={styles.cardsContainer}>
            {cases.map((caseItem) => (
              <Link href={`/cases/${caseItem.id}`} key={caseItem.id} className={styles.cardLink}>
                {renderCaseCard(caseItem)}
              </Link>
            ))}
          </div>
        )}
        
        {/* Tablet/Mobile Slider View */}
        {isClient && (isMobile || isTablet) && (
          <div className={styles.sliderContainer}>
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={isTablet ? 2 : 1}
              onSwiper={setSwiper}
              className={styles.swiper}
            >
              {cases.map((caseItem) => (
                <SwiperSlide key={caseItem.id} className={styles.swiperSlide}>
                  <div className={styles.cardLink}>
                    {renderCaseCard(caseItem)}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            <div className={styles.navigationButtons}>
              <button 
                className={styles.navButton} 
                onClick={handlePrev}
                aria-label="Previous case"
              >
                <svg width="30" height="30" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.25 0.5L0.75 9L9.25 17.5V0.5Z" fill="black" />
                </svg>
              </button>
              <button 
                className={styles.navButton} 
                onClick={handleNext}
                aria-label="Next case"
              >
                <svg width="30" height="30" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.75 0.5L9.25 9L0.75 17.5V0.5Z" fill="black" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
      
      <div className={styles.pixelPatternContainer}>
        <Image 
          src={pixelPattern} 
          alt="Pixel Pattern" 
          className={styles.pixelPattern}
          layout="responsive"
        />
        <Image 
          src={dots} 
          alt="Dot Pattern" 
          className={styles.dots}
          layout="responsive"
        />
      </div>
    </section>
  );
};

export default CasesSection;