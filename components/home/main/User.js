import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { AiOutlineMessage } from 'react-icons/ai';
import { BsHeart } from 'react-icons/bs';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { IoSettingsOutline } from 'react-icons/io5';
import styles from './styles.module.scss';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
// import required modules
import { EffectCards, Navigation } from 'swiper';
import { userSwiperArray } from '@/data/home';

export default function User() {
  const { data: session } = useSession();
  return (
    <div className={styles.user}>
      <img
        src="../../../images/userheader.jpg"
        alt=""
        className={styles.user__header}
      />
      <div className={styles.user__container}>
        {session ? (
          <div className={styles.user__infos}>
            <img src={session.user?.image} alt="" />
            <h4>{session.user.name}</h4>
          </div>
        ) : (
          <div className={styles.user__infos}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/147/147140.png"
              alt=""
            />
            <div className={styles.user__infos_btns}>
              <button>Register</button>
              <button>Login</button>
            </div>
          </div>
        )}
        <ul className={styles.user__links}>
          <li>
            <Link href="/profile">
              <>
                <a>
                  <IoSettingsOutline />
                </a>
              </>
            </Link>
          </li>
          <li>
            <Link href="">
              <>
                <a>
                  <HiOutlineClipboardList />
                </a>
              </>
            </Link>
          </li>
          <li>
            <Link href="">
              <>
                <a>
                  <AiOutlineMessage />
                </a>
              </>
            </Link>
          </li>
          <li>
            <Link href="">
              <>
                <a>
                  <BsHeart />
                </a>
              </>
            </Link>
          </li>
        </ul>
        <div className={styles.user__swiper}>
          <Swiper
            effect={'cards'}
            grabCursor={true}
            navigation={true}
            modules={[EffectCards, Navigation]}
            className="user__swiper"
            style={{
              maxWidth: '180px',
              height: '240px',
              marginTop: '1rem',
            }}
          >
            {userSwiperArray.map((item) => (
              <SwiperSlide>
                <Link href="">
                  <img src={item.image} alt="" />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <img
        src="../../../images/userheader.jpg"
        alt=""
        className={styles.user__footer}
      />
    </div>
  );
}
