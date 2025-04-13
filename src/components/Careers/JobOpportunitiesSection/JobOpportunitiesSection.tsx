'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './JobOpportunitiesSection.module.css';
import Image from 'next/image';
import pixelPattern from '../../../../public/images/pixel-pattern.png';
import dots from '../../../../public/images/dot-pattern2.png';
// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

type JobCategory = 'All' | 'Back-end' | 'Front-end' | 'Sales' | 'Design';

interface JobPosition {
  id: string;
  title: string;
  description: string;
  location: string;
  categories: JobCategory[];
}

const JobOpportunitiesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<JobCategory>('All');
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);
  
  // Check if we're on a mobile device when component mounts
  useEffect(() => {
    setIsClient(true);
    
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);
  
  const jobCategories: JobCategory[] = ['All', 'Back-end', 'Front-end', 'Sales', 'Design'];
  
  const jobPositions: JobPosition[] = [
    {
      id: 'job1',
      title: 'Lead Software Developer',
      description: 'Join our team as a Lead Software Developer to architect and execute pioneering software solutions. Candidates should have a proven track record in software development and a deep interest in emerging technologies.',
      location: 'Remote',
      categories: ['Back-end', 'Front-end']
    },
    {
      id: 'job2',
      title: 'Lead Software Developer',
      description: 'Join our team as a Lead Software Developer to architect and execute pioneering software solutions. Candidates should have a proven track record in software development and a deep interest in emerging technologies.',
      location: 'Remote',
      categories: ['Back-end']
    },
    {
      id: 'job3',
      title: 'Lead Software Developer',
      description: 'Join our team as a Lead Software Developer to architect and execute pioneering software solutions. Candidates should have a proven track record in software development and a deep interest in emerging technologies.',
      location: 'Remote',
      categories: ['Front-end']
    },
    {
      id: 'job4',
      title: 'Lead Software Developer',
      description: 'Join our team as a Lead Software Developer to architect and execute pioneering software solutions. Candidates should have a proven track record in software development and a deep interest in emerging technologies.',
      location: 'Remote',
      categories: ['Design']
    }
  ];
  
  const filteredJobs = activeCategory === 'All' 
    ? jobPositions 
    : jobPositions.filter(job => job.categories.includes(activeCategory));
  
  // For custom Swiper navigation
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  
  // Handle navigation button clicks
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
  
  // Helper function to render job card
  const renderJobCard = (job: JobPosition) => (
    <div className={styles.jobCard}>
      <div className={styles.jobCardInner}>
        <div className={styles.folded}></div>
        <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 45.6968V2.9998L59 59.9998H16.303C8.40368 59.9998 2 53.5961 2 45.6968Z" fill="#FBF8F0" stroke="black" strokeWidth="2.38384" />
        </svg>
        <h3 className={styles.jobTitle}>{job.title}</h3>
        <p className={styles.jobDescription}>{job.description}</p>
        
        <div className={styles.jobCardFooter}>
          <div className={styles.jobLocation}>
            <img src="/icons/location.svg" alt="" />
            <span>{job.location}</span>
          </div>
          <Link href={`/careers/${job.id}`} className={styles.findOutButton}>
            Find Out More
          </Link>
        </div>
      </div>
    </div>
  );
  
  return (
    <section className={styles.jobSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>/ Explore New Opportunities /</h2>
        <p className={styles.description}>
      We’re not actively hiring right now — but we’re always excited to meet talented people.
      If you think you’d be a great fit for HashTech, feel free to reach out at{' '}
      <a href="mailto:ok@hashtech.dev">ok@hashtech.dev</a>{' '}
      or follow us on{' '}
      <a
        href="https://x.com/hashtech_dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </a>{' '}
      for future openings.
    </p>
        {/* <div className={styles.categoryFilters}>
          {jobCategories.map(category => (
            <button 
              key={category}
              className={`${styles.categoryButton} ${activeCategory === category ? styles.active : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div> */}
        
        {/* Mobile Slider - only rendered on client side */}
        {/* {isClient && isMobile && (
          <div className={styles.mobileSliderContainer}>
            <Swiper
              modules={[Navigation]}
              spaceBetween={0}
              slidesPerView={1}
              onSwiper={setSwiper}
              className={styles.mySwiper}
            >
              {filteredJobs.map((job) => (
                <SwiperSlide key={job.id} className={styles.swiperSlide}>
                  {renderJobCard(job)}
                </SwiperSlide>
              ))}
            </Swiper>
            
            <div className={styles.sliderNavigation}>
              <button 
                className={`${styles.navButton} ${styles.navPrevButton}`} 
                type="button" 
                onClick={handlePrev}
                aria-label="Previous slide"
              >
                <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.25 0.5L0.75 9L9.25 17.5V0.5Z" fill="black" />
                </svg>
              </button>
              <button 
                className={`${styles.navButton} ${styles.navNextButton}`} 
                type="button" 
                onClick={handleNext}
                aria-label="Next slide">
                <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.75 0.5L9.25 9L0.75 17.5V0.5Z" fill="black" />
                </svg>
              </button>
            </div>
          </div>
        )} */}
        
        {/* Desktop Grid */}
        {/* <div className={styles.jobGrid}>
          {filteredJobs.map(job => (
            <div key={job.id}>{renderJobCard(job)}</div>
          ))}
        </div> */}
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
          alt="dots" 
          className={styles.dots}
          layout="responsive"
        />
      </div>
    </section>
  );
};

export default JobOpportunitiesSection;