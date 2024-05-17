// import { useState, useEffect } from 'react';
import { Pagination, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/keyboard';
import 'swiper/scss/virtual';

import StockCardItem from '../StockCardItem';

// import { getStock } from '../../services/fetchData';

import polls_1x from '../../assets/images/stock/polls/sensor-1x.png';
import polls_2x from '../../assets/images/stock/polls/sensor-2x.png';

import tracker_1x from '../../assets/images/stock/trackers/uTrackR3-1x.png';
import tracker_2x from '../../assets/images/stock/trackers/uTrackR3-2x.png';

import validator_1x from '../../assets/images/stock/validators/mpi-102-1x.png';
import validator_2x from '../../assets/images/stock/validators/mpi-102-2x.png';

import css from './Stock.module.scss';

const Stock = () => {
  const stock = [
    {
      image1x: tracker_1x,
      image2x: tracker_2x,
      name: 'GPS - трекери для всіх видів транспорту',
      info: 'Живлення від прикурювача або в умовах стаціонарного підключення до автомобіля',
    },
    {
      image1x: validator_1x,
      image2x: validator_2x,
      name: 'Термінали пропускного доступу (валідатори)',
      info: 'Запобігання безквиткового проїзду в корпоративному або громадському транспорті',
    },
    {
      image1x: polls_1x,
      image2x: polls_2x,
      name: 'Робота з датчиками контролю рівня палива',
      info: 'Встановлення, калібрування та обслуговування обладнання контролю рівня палива',
    },
  ];
  // const [stock, setStock] = useState([]);

  // useEffect(() => {
  //   getStock().then((data) => {
  //     setStock(data.results);
  //   });
  // }, []);

  return (
    <section id="stock" className={css.section}>
      <div className={css.container}>
        <h2 className={css.title}>Що ми пропонуємо?</h2>
        <Swiper
          modules={[Pagination, Keyboard]}
          grabCursor={true}
          keyboard={{ enabled: true }}
          centeredSlides={true}
          watchOverflow={true}
          slidesPerView={1}
          spaceBetween={34}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            el: '#swiperPagination',
            clickable: true,
          }}
          breakpoints={{
            744: {
              slidesPerView: 2,
              centeredSlides: false,
              loop: true,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              centeredSlides: false,
              loop: false,
              spaceBetween: 10,
            },
            1440: {
              slidesPerView: 3,
              centeredSlides: false,
              // loop: false,
              spaceBetween: 24,
            },
          }}
        >
          {stock.map((card, i) => (
            <SwiperSlide key={i} className={css.slide}>
              <StockCardItem data={card} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={css.swiperPagination} id="swiperPagination"></div>
      </div>
    </section>
  );
};

export default Stock;
