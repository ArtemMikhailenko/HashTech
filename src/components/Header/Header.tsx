"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const pathname = usePathname();
  
  // Define which pages have light backgrounds
  const lightBackgroundPages = ['/cases', '/careers']; // Add your light background pages here
  
  // Check if current page has a light background
  const hasLightBackground = lightBackgroundPages.includes(pathname);
  
  return (
    <header className={`${styles.header} ${hasLightBackground ? styles.lightHeader : styles.darkHeader}`}>
      <div className={styles.logo}>
        <img src={hasLightBackground ? "/images/logo-dark.svg" : "/images/logo.svg"} alt="HashTech" />
        <span className={styles.pronunciation}>[haʃˈtɛk]</span>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li><Link href="/">Main</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/cases">Cases</Link></li>
          <li><Link href="/careers">Careers</Link></li>
        </ul>
      </nav>
      <button className={`${styles.contactButton} ${hasLightBackground ? styles.darkButton : styles.lightButton}`}>
        Contact us
      </button>
    </header>
  );
};

export default Header;