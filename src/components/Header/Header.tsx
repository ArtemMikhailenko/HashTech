import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/images/logo.svg" alt="" />
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
      <button className={styles.contactButton}>Contact us</button>
    </header>
  );
};

export default Header;