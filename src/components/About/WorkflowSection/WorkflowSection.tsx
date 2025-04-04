'use client'
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './WorkflowSection.module.css';

// Import cube images and assets
import cube1 from '../../../../public/images/workflow/cube1.png';
import cube2 from '../../../../public/images/workflow/cube2.png';
import cube3 from '../../../../public/images/workflow/cube3.png';
import cube4 from '../../../../public/images/workflow/cube4.png';
import cube5 from '../../../../public/images/workflow/cube5.png';
import pixelPattern from '../../../../public/images/pixel-pattern.png';
import dots from '../../../../public/images/dot-pattern2.png';
import arrow from '../../../../public/images/workflow/arrow-right.png'; // Add this arrow image

// Import Swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const WorkflowSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleSteps, setVisibleSteps] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Check if client-side and handle window resize
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
  
  // Handle scroll animation for desktop
  useEffect(() => {
    if (isMobile) return; // Skip scroll animation on mobile
    
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const sectionHeight = sectionRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Calculate how far through the section we've scrolled (0 to 1)
      const scrollProgress = Math.min(
        Math.max(0, (windowHeight - sectionTop) / (sectionHeight + windowHeight)),
        1
      );
      
      // Map scroll progress to number of visible steps (0 to 5)
      // We divide by 0.8 to ensure all steps are visible when we've scrolled 80% through
      const stepsToShow = Math.floor(scrollProgress / 0.7 * 8);
      setVisibleSteps(stepsToShow);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]);
  
  // Workflow step data
  const workflowSteps = [
    {
      image: cube1,
      title: "Discovery & Consultation",
      description: "We start by understanding your vision, business goals, and technical requirements to ensure the best approach",
      hasTopArrow: false,
      hasBottomArrow: true,
    },
    {
      image: cube2,
      title: "Team Assembly",
      description: "We handpick top-tier Web3 specialists tailored to your project's needs, ensuring efficiency and expertise",
      hasTopArrow: true,
      hasBottomArrow: false,
    },
    {
      image: cube3,
      title: "Planning & Estimation",
      description: "We define the development roadmap, estimate timelines and costs, and align expectations to keep the process transparent",
      hasTopArrow: false,
      hasBottomArrow: true,
    },
    {
      image: cube4,
      title: "Agile Development",
      description: "Our team builds, tests, and iterates in short cycles, ensuring flexibility and seamless progress toward the final product",
      hasTopArrow: true,
      hasBottomArrow: false, 
    },
    {
      image: cube5,
      title: "Deployment & Scaling",
      description: "Once ready, we launch your solution with security audits, performance optimization, and post-launch support to scale effectively",
      hasTopArrow: false,
      hasBottomArrow: false,
    }
  ];
  
  return (
    <section className={styles.workflowSection} ref={sectionRef}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>/Work Flow - From Idea to Execution /</h2>
        
        {/* Desktop steps */}
        {!isMobile && (
          <div className={styles.workflowSteps}>
            {workflowSteps.map((step, index) => (
              <div 
                key={`desktop-step-${index}`} 
                className={`${styles.step} ${visibleSteps >= index + 1 ? styles.visible : ''}`}
              >
                <div className={styles.cubeImage}>
                  <Image 
                    src={step.image} 
                    alt={step.title} 
                    width={180} 
                    height={180} 
                  />
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
                
                {/* Add arrows */}
                {step.hasBottomArrow && (
                  <div className={`${styles.arrow} ${styles.bottomArrow}`}>
                    <Image 
                      src={arrow}
                      alt="Next step"
                      width={150}
                      height={50}
                    />
                  </div>
                )}
                
                {step.hasTopArrow && (
                  <div className={`${styles.arrow} ${styles.topArrow}`}>
                    <Image 
                      src={arrow}
                      alt="Next step"
                      width={130}
                      height={50}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        
        {/* Mobile slider */}
        {isMobile && (
          <div className={styles.mobileSliderContainer}>
            <Swiper
              modules={[Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              onSwiper={setSwiper}
              pagination={false}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              className={styles.swiper}
            >
              {workflowSteps.map((step, index) => (
                <SwiperSlide key={`mobile-step-${index}`} className={styles.swiperSlide}>
                  <div className={styles.mobileStep}>
                    <div className={styles.cubeImage}>
                      <Image 
                        src={step.image} 
                        alt={step.title} 
                        width={180} 
                        height={180} 
                      />
                    </div>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDescription}>{step.description}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            <div className={styles.paginationDots}>
              {workflowSteps.map((_, index) => (
                <button 
                  key={`dot-${index}`}
                  className={`${styles.paginationDot} ${index === activeIndex ? styles.activeDot : ''}`}
                  onClick={() => swiper?.slideTo(index)}
                  aria-label={`Go to step ${index + 1}`}
                >
                  <div className={styles.dotInner}></div>
                </button>
              ))}
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

export default WorkflowSection;