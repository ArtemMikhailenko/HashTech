"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Define which pages have light backgrounds
  const lightBackgroundPages = ['/cases', '/careers']; // Add your light background pages here
  
  // Check if current page has a light background
  const hasLightBackground = lightBackgroundPages.includes(pathname);

  // Check if we're on mobile when component mounts and on window resize
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

  // Close menu when clicking outside or pressing escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest(`.${styles.mobileNav}`) && !target.closest(`.${styles.menuButton}`)) {
        setIsMenuOpen(false);
      }
    };

    const handleEscPress = (event: KeyboardEvent) => {
      if (isMenuOpen && event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscPress);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscPress);
    };
  }, [isMenuOpen]);

  // Close mobile menu when changing route
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`${styles.header} ${hasLightBackground ? styles.lightHeader : styles.darkHeader}`}>
      <div className={styles.logo}>
        <img src={hasLightBackground ? "/images/logo-dark.svg" : "/images/logo.svg"} alt="HashTech" />
        <span className={styles.pronunciation}>[haʃˈtɛk]</span>
      </div>
      
      {/* Desktop Navigation */}
      {!isMobile && (
        <>
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
        </>
      )}
      
      {/* Mobile Menu Button */}
      {isMobile && (
        <div className={styles.mobileBlock}>
           <button className={`${styles.mobileContactButton} ${hasLightBackground ? styles.darkButton : styles.lightButton}`}>
                  Contact us
                </button>
        <button 
          className={`${styles.menuButton} ${isMenuOpen ? styles.menuButtonActive : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className={styles.menuButtonGrid}>
            {[...Array(9)].map((_, index) => (
              <span key={index} className={styles.menuButtonDot}></span>
            ))}
          </div>
        </button>
                 
                </div>
      )}
      
      {/* Mobile Navigation */}
      {isMobile && (
        
          <div className={`${styles.mobileNav} ${isMenuOpen ? styles.mobileNavOpen : ''}`}>
          <div className={styles.mobileNavContent}>
            <nav className={styles.mobileNavMenu}>
              <ul className={styles.mobileNavList}>
                <li><Link href="/">Main</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/cases">Cases</Link></li>
                <li><Link href="/careers">Careers</Link></li>
              </ul>
            </nav>
            
          </div>
          
        </div>

        
        
      )}
    </header>
  );
};

export default Header;