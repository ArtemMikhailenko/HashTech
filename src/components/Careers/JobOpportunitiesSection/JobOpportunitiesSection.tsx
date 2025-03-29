'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './JobOpportunitiesSection.module.css';
import Image from 'next/image';
import pixelPattern from '../../../../public/images/pixel-pattern.png';
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
  
  return (
    <section className={styles.jobSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>/ Explore New Opportunities /</h2>
        
        <div className={styles.categoryFilters}>
          {jobCategories.map(category => (
            <button 
              key={category}
              className={`${styles.categoryButton} ${activeCategory === category ? styles.active : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className={styles.jobGrid}>
          {filteredJobs.map(job => (
            <div key={job.id} className={styles.jobCard}>
              <div className={styles.jobCardInner}>
                <div className={styles.folded}></div>
                <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 45.6968V2.9998L59 59.9998H16.303C8.40368 59.9998 2 53.5961 2 45.6968Z" fill="#FBF8F0" stroke="black" stroke-width="2.38384" />
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

export default JobOpportunitiesSection;