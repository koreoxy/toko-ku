import CountDown from '@/components/countdown';
import { MdFlashOn } from 'react-icons/md';
import styles from './styles.module.scss';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper';
import { flashDealsArray } from '@/data/home';
import FlashCard from './Card';

export default function FlashDeals() {
  return (
    <div className={styles.flashDeals}>
      <div className={styles.flashDeals__header}>
        <h1>
          FLASH SALE
          <MdFlashOn />
        </h1>
        <CountDown date={new Date(2023, 1, 28, 11)} />
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="flashDeals__swiper"
        breakpoints={{
          450: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          920: {
            slidesPerView: 4,
          },
          1232: {
            slidesPerView: 5,
          },
          1520: {
            slidesPerView: 6,
          },
        }}
      >
        <div className={styles.flashDeals__list}>
          {flashDealsArray.map((product, i) => (
            <SwiperSlide>
              <FlashCard product={product} key={i} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}
