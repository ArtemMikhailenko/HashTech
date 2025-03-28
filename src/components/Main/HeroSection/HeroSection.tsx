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
          /from 'blok.tjeɪn æps tu: 'di:.faɪ 'pao.əd sə'lu:.ʃənz, wi: bɪld ðə
          'nɛkst ˌdʒɛn.ə'reɪʃən əv ˌdɪ:.sɛn.trə.laɪzd tɛknɔ.lə.dʒi/
        </p>
      </div>
    </section>
  );
};

export default HeroSection;