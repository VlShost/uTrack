import { useState, useEffect } from 'react';
import { Pagination, Keyboard, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/keyboard';
import 'swiper/scss/virtual';

import data from '@data/reviews.json';

import ReviewCardItem from '../ReviewCardItem';

import css from './Reviews.module.scss';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setReviews(data);
  }, []);

  return (
    <section id="reviews" className={css.section}>
      <div className={css.container}>
        <h2 className={css.title}>Відгуки наших постійних клієнтів</h2>
        <Swiper
          modules={[Pagination, Keyboard, Autoplay]}
          className={css.swiper}
          grabCursor={true}
          keyboard={{ enabled: true }}
          centeredSlides={true}
          watchOverflow={true}
          slidesPerView={1}
          spaceBetween={34}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={1500}
          pagination={{
            el: '#swiperReviewPagination',
            clickable: true,
          }}
          breakpoints={{
            744: {
              slidesPerView: 1,
              centeredSlides: false,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1440: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
        >
          {reviews &&
            reviews.map((card, i) => (
              <SwiperSlide key={i} className={css.slide}>
                <ReviewCardItem data={card} />
              </SwiperSlide>
            ))}
        </Swiper>

        <div className={css.swiperPagination} id="swiperReviewPagination"></div>
      </div>
    </section>
  );
};

export default Reviews;
