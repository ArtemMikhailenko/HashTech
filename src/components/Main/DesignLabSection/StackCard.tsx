import React from 'react';
import styles from './DesignLabSection.module.css';

const StackCard: React.FC = () => {
  return (
    <div className={styles.stackCard}>
      <svg width="63" height="62" viewBox="0 0 63 62" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 45.9089V2.99982L59.2121 60.2119H16.303C8.40368 60.2119 2 53.8083 2 45.9089Z" fill="#FBF8F0" stroke="black" strokeWidth="2.38384" />
      </svg>
      <div className={styles.stackInfo}>
        <div className={styles.stackHeader}>
          <h3>Stack</h3>
          <div className={styles.cardCorner}></div>
        </div>
        <div className={styles.stackText}>
          <div className={styles.stackDetails}>
            <p>Design: <span>Figma, Adobe Suite, Blender</span></p>
            <p>Animation: <span>After Effects, Lottie, Rive</span></p>
            <p>Illustration & 3D: <span>Procreate, Blender, Cinema 4D</span></p>
          </div>
          <div className={styles.stackDescription}>
            <p>
              We craft cutting-edge visuals that bring Web3 products to life, making them engaging, functional, and visually striking
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackCard;