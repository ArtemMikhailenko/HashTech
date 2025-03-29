'use client'
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './WorkflowSection.module.css';

// Import cube images - you'll need to create these
import cube1 from '../../../../public/images/workflow/cube1.png';
import cube2 from '../../../../public/images/workflow/cube2.png';
import cube3 from '../../../../public/images/workflow/cube3.png';
import cube4 from '../../../../public/images/workflow/cube4.png';
import cube5 from '../../../../public/images/workflow/cube5.png';
import arrowRight from '../../../../public/images/workflow/arrow-right.png';
import pixelPattern from '../../../../public/images/pixel-pattern.png';

const WorkflowSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleSteps, setVisibleSteps] = useState(0);
  
  useEffect(() => {
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
      const stepsToShow = Math.floor(scrollProgress / 0.8 * 8);
      setVisibleSteps(stepsToShow);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <section className={styles.workflowSection} ref={sectionRef}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>/Work Flow - From Idea to Execution /</h2>
        
        <div className={styles.workflowSteps}>
          <div className={`${styles.step} ${visibleSteps >= 1 ? styles.visible : ''}`}>
            <div className={styles.cubeImage}>
              <Image 
                src={cube1} 
                alt="Discovery & Consultation" 
                width={180} 
                height={180} 
              />
            </div>
            <h3 className={styles.stepTitle}>Discovery & Consultation</h3>
            <p className={styles.stepDescription}>
              We start by understanding your vision, business goals, and technical requirements to ensure the best approach
            </p>
            <div className={styles.bottomArrow}>
              <Image
                src={arrowRight}
                alt="Next step"
                width={120}
                height={30}
              />
            </div>
          </div>
          
          <div className={`${styles.step} ${visibleSteps >= 2 ? styles.visible : ''}`}>
            <div className={styles.cubeImage}>
              <Image 
                src={cube2} 
                alt="Team Assembly" 
                width={180} 
                height={180} 
              />
            </div>
            <h3 className={styles.stepTitle}>Team Assembly</h3>
            <p className={styles.stepDescription}>
              We handpick top-tier Web3 specialists tailored to your project's needs, ensuring efficiency and expertise
            </p>
            <div className={styles.topArrow}>
              <Image
                src={arrowRight}
                alt="Next step"
                width={120}
                height={30}
              />
            </div>
          </div>
          
          <div className={`${styles.step} ${visibleSteps >= 3 ? styles.visible : ''}`}>
            <div className={styles.cubeImage}>
              <Image 
                src={cube3} 
                alt="Planning & Estimation" 
                width={180} 
                height={180} 
              />
            </div>
            <h3 className={styles.stepTitle}>Planning & Estimation</h3>
            <p className={styles.stepDescription}>
              We define the development roadmap, estimate timelines and costs, and align expectations to keep the process transparent
            </p>
            <div className={styles.bottomArrow}>
              <Image
                src={arrowRight}
                alt="Next step"
                width={120}
                height={30}
              />
            </div>
          </div>
          
          <div className={`${styles.step} ${visibleSteps >= 4 ? styles.visible : ''}`}>
            <div className={styles.cubeImage}>
              <Image 
                src={cube4} 
                alt="Agile Development" 
                width={180} 
                height={180} 
              />
            </div>
            <h3 className={styles.stepTitle}>Agile Development</h3>
            <p className={styles.stepDescription}>
              Our team builds, tests, and iterates in short cycles, ensuring flexibility and seamless progress toward the final product
            </p>
            <div className={styles.topArrow}>
              <Image
                src={arrowRight}
                alt="Next step"
                width={120}
                height={30}
              />
            </div>
          </div>
          
          <div className={`${styles.step} ${visibleSteps >= 5 ? styles.visible : ''}`}>
            <div className={styles.cubeImage}>
              <Image 
                src={cube5} 
                alt="Deployment & Scaling" 
                width={180} 
                height={180} 
              />
            </div>
            <h3 className={styles.stepTitle}>Deployment & Scaling</h3>
            <p className={styles.stepDescription}>
              Once ready, we launch your solution with security audits, performance optimization, and post-launch support to scale effectively
            </p>
          </div>
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

export default WorkflowSection;