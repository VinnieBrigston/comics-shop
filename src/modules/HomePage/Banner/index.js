import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Controller } from 'swiper';
import cn from 'classnames';
import 'swiper/swiper.scss';
import classes from './banner.module.scss';
import miles from '../../../assets/images/miles.png';
import rick from '../../../assets/images/rick.png';
import books from '../../../assets/images/books.png';

SwiperCore.use([Controller]);

export function Banner() {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  return (
    <main className={classes.banners}>
      <Swiper onSwiper={setFirstSwiper} controller={{ control: secondSwiper }} slidesPerView={1}>
        <SwiperSlide>
          <div className={classes.banner}>
            <div className={classes.bannerCard}>
              <p className={classes.bannerText}>Miles Morales with a great offer for you</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.banner}>
            <div className={classes.bannerCard}>
              <p className={classes.bannerText}>
                Figure and book for <span>$<span className={classes.number}>50</span></span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.banner}>
            <div className={classes.bannerCard}>
              <p className={classes.bannerText}><span>NEW</span> arrival of Spiderman’s books</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className={classes.images}>
        <Swiper onSwiper={setSecondSwiper} controller={{ control: firstSwiper }} slidesPerView={1}>
          <SwiperSlide>
            <figure
              className={
                cn(
                  classes.bannerImage,
                  classes.bannerMiles,
                )
              }
            >
              <img src={miles} alt="Miles Morales" />
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure
              className={
                cn(
                  classes.bannerImage,
                  classes.bannerRick,
                )
              }
            >
              <img src={rick} alt="rick and morty" />
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure
              className={
                cn(
                  classes.bannerImage,
                  classes.bannerBooks,
                )
              }
            >
              <img src={books} alt="comic books" />
            </figure>
          </SwiperSlide>
        </Swiper>
      </div>
    </main>
  );
}
