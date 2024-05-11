import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import polls_1x from '../../assets/images/stock/polls/sensor-1x.png';
import polls_2x from '../../assets/images/stock/polls/sensor-2x.png';

import tracker_1x from '../../assets/images/stock/trackers/uTrackR3-1x.png';
import tracker_2x from '../../assets/images/stock/trackers/uTrackR3-2x.png';

import validator_1x from '../../assets/images/stock/validators/mpi-102-1x.png';
import validator_2x from '../../assets/images/stock/validators/mpi-102-2x.png';

import css from './Stock.module.scss';

const Stock = () => {
  return (
    <section id="stock" className={css.section}>
      <div className={css.container}>
        <h2 className={css.title}>Що ми пропонуємо?</h2>
        <Swiper
          grabCursor={true}
          centeredSlides={true}
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
            320: {
              slidesPerView: 'auto',
              loop: true,
              spaceBetween: 24,
            },
            744: {
              slidesPerView: 2,
              loop: true,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              loop: false,
              spaceBetween: 41,
            },
          }}
          keyboard={{ enabled: true }}
          modules={[Pagination, Keyboard]}
        >
          <SwiperSlide className={css.card}>
            <div className={css.img}>
              <img
                loading="lazy"
                className={css.img}
                srcSet={`${tracker_1x} 1x, ${tracker_2x} 2x`}
                src={tracker_1x}
                alt="Трекер"
              />
            </div>

            <div className={css.infoWrapper}>
              <p className={css.name}>GPS-трекери для всіх видів транспорту</p>
              <p className={css.info}>
                Живлення від прикурювача або в умовах стаціонарного підключення до автомобіля
              </p>
            </div>

            <button className={css.btn}>Дізнатися більше</button>
          </SwiperSlide>
          <SwiperSlide>
            <div className={css.wrapper_card}>
              <div className={css.card}>
                <div className={css.img}>
                  <img
                    loading="lazy"
                    className={css.img}
                    srcSet={`${validator_1x} 1x, ${validator_2x} 2x`}
                    src={validator_1x}
                    alt="Валідатор"
                  />
                </div>

                <div className={css.infoWrapper}>
                  <p className={css.name}>Термінали пропускного доступу (валідатори)</p>
                  <p className={css.info}>
                    Запобігання безквиткового проїзду в корпоративному або громадському транспорті
                  </p>
                </div>

                <button className={css.btn}>Дізнатися більше</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={css.wrapper_card}>
              <div className={css.card}>
                <div className={css.img}>
                  <img
                    loading="lazy"
                    className={css.img}
                    srcSet={`${polls_1x} 1x, ${polls_2x} 2x`}
                    src={polls_1x}
                    alt="Датчик рівня палива"
                  />
                </div>

                <div className={css.infoWrapper}>
                  <p className={css.name}>Робота з датчиками контролю рівня палива</p>
                  <p className={css.info}>
                    Встановлення, калібрування та обслуговування обладнання контролю рівня палива
                  </p>
                </div>

                <button className={css.btn}>Дізнатися більше</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className={css.swiperPagination} id="swiperPagination"></div>
      </div>
    </section>
  );
};

export default Stock;
