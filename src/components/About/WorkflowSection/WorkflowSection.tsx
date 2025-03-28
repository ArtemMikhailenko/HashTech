import React from 'react';
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
  return (
    <section className={styles.workflowSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>/Work Flow - From Idea to Execution /</h2>
        
        <div className={styles.workflowSteps}>
          <div className={styles.step}>
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
          
          <div className={styles.step}>
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
          
          <div className={styles.step}>
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
          
          <div className={styles.step}>
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
          
          <div className={styles.step}>
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