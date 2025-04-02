import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
            <p className={styles.copyright}>
              Copyrights are reserved. All works are protected by<br />
              copyright of the corresponding authors.
            </p>
            <div className={styles.navigation}>
            <nav className={styles.nav}>
              <Link href="/" className={styles.navLink}>Main</Link>
              <Link href="/about" className={styles.navLink}>About</Link>
              <Link href="/cases" className={styles.navLink}>Cases</Link>
              <Link href="/careers" className={styles.navLink}>Careers</Link>
            </nav>
          </div>
          </div>
          
          
          
          <div className={styles.socialSection}>
            <div className={styles.socialLinks}>
              <a href="https://linkedin.com/company/hashtech" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <div className={styles.socialIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3H5C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V5C21 3.895 20.105 3 19 3ZM9 17H6.477V10H9V17ZM7.694 8.717C6.923 8.717 6.408 8.203 6.408 7.517C6.408 6.831 6.922 6.317 7.779 6.317C8.55 6.317 9.065 6.831 9.065 7.517C9.065 8.203 8.551 8.717 7.694 8.717ZM18 17H15.558V13.174C15.558 12.116 14.907 11.872 14.663 11.872C14.419 11.872 13.605 12.035 13.605 13.174C13.605 13.337 13.605 17 13.605 17H11.082V10H13.605V10.977C13.93 10.407 14.581 10 15.802 10C17.023 10 18 10.977 18 13.174V17Z" fill="#222"/>
                  </svg>
                </div>
              </a>
              <a href="https://twitter.com/hashtech" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <div className={styles.socialIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.1761 3H20.3037L14.0516 10.1242L21.5 21H16.0375L11.3947 14.4301L6.08283 21H2.95518L9.62046 13.3975L2.5 3H8.12542L12.3225 8.98258L17.1761 3ZM16.6009 19.2823H18.0084L7.46512 4.60866H5.9325L16.6009 19.2823Z" fill="#222"/>
                  </svg>
                </div>
              </a>
              <a href="/contact" className={styles.bookCallButton}>
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