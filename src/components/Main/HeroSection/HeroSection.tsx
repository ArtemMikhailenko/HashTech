import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <p className={styles.subTitle}>/ We Build</p>
        <h1 className={styles.title}>
          <img src="/images/logo-hero.svg" alt="" />
        </h1>
        <p className={styles.description}>
        /frʌm ˈblɒk.tʃeɪn æps tuː ˌeɪ.aɪ-ˈdrɪv.ən səˈluː.ʃənz, wiː bɪld ðə nekst ˌʤɛn.əˈreɪ.ʃən ʌv ˌdiːˈsɛn.trə.laɪzd tɛkˈnɒl.ə.dʒi/
        </p>
      </div>
    </section>
  );
};

export default HeroSection;