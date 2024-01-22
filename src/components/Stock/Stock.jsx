import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import css from './Stock.module.css';

const Stock = () => {
  return (
    <section className={css.stock} id="stock">
      <div className={css.container}>
        <h2 className={css.title}>Що ми пропонуємо?</h2>
        <Swiper
          spaceBetween={40}
          grabCursor={true}
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
            375: {
              slidesPerView: 1,
              loop: true,
            },
            664: {
              slidesPerView: 2,
              loop: true,
            },
            1440: {
              slidesPerView: 3,
              loop: false,
            },
          }}
          keyboard={{ enabled: true }}
          modules={[Autoplay, Pagination, Keyboard]}
        >
          <SwiperSlide>
            <div className={css.wrapper_card}>
              <div className={css.card}>
                <div className={css.img}>
                  <picture>
                    <source
                      media="(min-width: 1440px)"
                      srcSet="../../../src/assets/images/stock/trackers/uTrackR3-1x.png 1x, ../../../src/assets/images/stock/trackers/uTrackR3-2x.png 2x"
                      type="image/png"
                    />
                    <source
                      media="(min-width: 744px)"
                      srcSet="../../../src/assets/images/stock/trackers/uTrackR3-1x.png 1x, ../../../src/assets/images/stock/trackers/uTrackR3-2x.png 2x"
                      type="image/png"
                    />
                    <source
                      media="(min-width: 375px)"
                      srcSet="../../../src/assets/images/stock/trackers/uTrackR3-1x.png 1x, ../../../src/assets/images/stock/trackers/uTrackR3-2x.png 2x"
                      type="image/png"
                    />
                    <img
                      src="../../../src/assets/images/stock/trackers/uTrackR3-1x.png"
                      alt="tracker"
                    />
                  </picture>
                </div>

                <div className={css.infoWrapper}>
                  <p className={css.name}>GPS-трекери для всіх видів транспорту</p>
                  <p className={css.info}>
                    Живлення від прикурювача або в умовах стаціонарного підключення до автомобіля
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
                  <picture>
                    <source
                      media="(min-width: 1440px)"
                      srcSet="../../../src/assets/images/stock/validators/mpi-102-1x.png 1x, ../../../src/assets/images/stock/validators/mpi-102-2x.png 2x"
                      type="image/png"
                    />
                    <source
                      media="(min-width: 744px)"
                      srcSet="../../../src/assets/images/stock/validators/mpi-102-1x.png 1x, ../../../src/assets/images/stock/validators/mpi-102-2x.png 2x"
                      type="image/png"
                    />
                    <source
                      media="(min-width: 375px)"
                      srcSet="../../../src/assets/images/stock/validators/mpi-102-1x.png 1x 1x, ../../../src/assets/images/stock/validators/mpi-102-2x.png 2x"
                      type="image/png"
                    />
                    <img
                      src="../../../src/assets/images/stock/validators/mpi-102-1x.png 1x"
                      alt="tracker"
                    />
                  </picture>
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
                  <picture>
                    <source
                      media="(min-width: 1440px)"
                      srcSet="../../../src/assets/images/stock/polls/sensor-1x.png 1x, ../../../src/assets/images/stock/polls/sensor-2x.png 2x"
                      type="image/png"
                    />
                    <source
                      media="(min-width: 744px)"
                      srcSet="../../../src/assets/images/stock/polls/sensor-1x.png 1x, ../../../src/assets/images/stock/polls/sensor-2x.png 2x"
                      type="image/png"
                    />
                    <source
                      media="(min-width: 375px)"
                      srcSet="../../../src/assets/images/stock/polls/sensor-1x.png 1x, ../../../src/assets/images/stock/polls/sensor-2x.png 2x"
                      type="image/png"
                    />
                    <img src="../../../src/assets/images/stock/polls/sensor-1x.png" alt="tracker" />
                  </picture>
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
