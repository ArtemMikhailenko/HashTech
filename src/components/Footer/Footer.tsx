import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.logoSection}>
            <div className={styles.logo}>
              <img src="/images/logo.svg" alt="" />
              
            </div>
            
          </div>
          <div className={styles.navigation}>
            <nav className={styles.nav}>
              <Link href="/" className={styles.navLink}>Main</Link>
              <Link href="/about" className={styles.navLink}>About</Link>
              <Link href="/cases" className={styles.navLink}>Cases</Link>
              <Link href="/careers" className={styles.navLink}>Careers</Link>
            </nav>
          </div>
          
          
          <div className={styles.socialSection}>
            <div className={styles.socialLinks}>
              <a href="https://www.linkedin.com/company/hashtechdev" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <div className={styles.socialIcon}>
                <span className={styles.linkIcon}>in</span>
                </div>
              </a>
              <a href="https://x.com/hashtech_dev" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <div className={styles.socialIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.1761 3H20.3037L14.0516 10.1242L21.5 21H16.0375L11.3947 14.4301L6.08283 21H2.95518L9.62046 13.3975L2.5 3H8.12542L12.3225 8.98258L17.1761 3ZM16.6009 19.2823H18.0084L7.46512 4.60866H5.9325L16.6009 19.2823Z" fill="#222"/>
                  </svg>
                </div>
              </a>
              <a href=" https://calendly.com/ok-hashtech/30min" className={styles.bookCallButton}>
              Book a call
            </a>
            </div>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;