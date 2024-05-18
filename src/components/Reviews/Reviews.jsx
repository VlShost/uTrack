// import { useState, useEffect } from 'react';
import { Pagination, Keyboard, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/keyboard';
import 'swiper/scss/virtual';

import ReviewCardItem from '../ReviewCardItem';

// import { getReviews } from '../../services/fetchData';

import css from './Reviews.module.scss';

const Reviews = () => {
  const reviews = [
    {
      date: '25.09.22',
      company: 'Шері',
      text: 'Відмінна робота працівників служби підтримки! Відповідають на будь-які питання, завжди оперативно реагують та інформують.',
      rating: 2,
    },
    {
      date: '25.09.22',
      company: 'Шері',
      text: 'Відмінна робота працівників служби підтримки! Відповідають на будь-які питання, завжди оперативно реагують та інформують.',
      rating: 5,
    },
    {
      date: '25.09.22',
      company: 'Шері',
      text: 'Відмінна робота працівників служби підтримки! Відповідають на будь-які питання, завжди оперативно реагують та інформують.',
      rating: 3,
    },
  ];

  // const [reviews, setReviews] = useState([]);

  // useEffect(() => {
  //   getReviews().then((data) => {
  //     setReviews(data.results);
  //   });
  // }, []);

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
            delay: 5000000,
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
              loop: true,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 2,
              centeredSlides: false,
              loop: false,
              spaceBetween: 10,
            },
            1440: {
              slidesPerView: 3,
              centeredSlides: false,
              spaceBetween: 24,
            },
          }}
        >
          {reviews.map((card, i) => (
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
