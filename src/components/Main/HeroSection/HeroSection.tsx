'use client';

import React, { useEffect, useState } from 'react';
import styles from './HeroSection.module.css';

const HeroSection: React.FC = () => {
  // Массив сообщений для эффекта печатной машинки
  const messages = ["/ We Build", "/ We Disrupt", "/ We Lead Web3 & DeFi"];
  const [text, setText] = useState("");         // текущий отображаемый текст
  const [messageIndex, setMessageIndex] = useState(0); // индекс текущего сообщения
  const [isDeleting, setIsDeleting] = useState(false); // режим удаления

  useEffect(() => {
    const currentMessage = messages[messageIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && text.length < currentMessage.length) {
      // Печатаем следующую букву
      timer = setTimeout(() => {
        setText(currentMessage.substring(0, text.length + 1));
      }, 150); // скорость набора (150 мс)
    } else if (isDeleting && text.length > 0) {
      // Удаляем последнюю букву
      timer = setTimeout(() => {
        setText(currentMessage.substring(0, text.length - 1));
      }, 100); // скорость удаления (100 мс)
    } else if (!isDeleting && text.length === currentMessage.length) {
      // После полного набора делаем паузу
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2000); // пауза 2 секунды
    } else if (isDeleting && text.length === 0) {
      // После удаления запускаем следующее сообщение
      setIsDeleting(false);
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, messageIndex, messages]);

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <p className={styles.subTitle}>
          {text}
          <span className={styles.cursor}>|</span>
        </p>
        <h1 className={styles.title}>
          <img src="/images/logo-hero.svg" alt="Hero logo" />
        </h1>
        <p className={styles.description}>
        /frəm ˈblɒk.tʃeɪn æps tuː ˈdiː.faɪ ˈpaʊ.əd səˈluː.ʃənz, wiː bɪld ðə ˈnɛkst ˌdʒɛn.əˈreɪ.ʃən əv ˌdiː.sɛn.trə.laɪzd tɛkˈnɒ.lə.dʒi/
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
