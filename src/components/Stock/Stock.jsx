import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Keyboard } from 'swiper/modules';
// import CardItem from '../CardItem/CardItem';

import 'swiper/css';
import 'swiper/css/pagination';

import css from './Stock.module.css';

import data from '../../data/stockItems.json';

const Stock = () => {
  return (
    <section id="stock">
      <div className={css.containe}>
        <h2 className={css.title}>Що ми пропонуємо?</h2>
        <Swiper
          spaceBetween={40}
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 2500,
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
            },
            664: {
              slidesPerView: 2,
            },
            1440: {
              slidesPerView: 3,
            },
          }}
          keyboard={{ enabled: true }}
          modules={[Autoplay, Pagination, Keyboard]}
        >
          <SwiperSlide>
            <div className={css.container}>
              <div className={css.card}>
                <div className={css.img}></div>

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
            <div className={css.container}>
              <div className={css.card}>
                <div className={css.img}>{data.image}</div>

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
            <div className={css.container}>
              <div className={css.card}>
                <div className={css.img}>{data.image}</div>

                <div className={css.infoWrapper}>
                  <p className={css.name}>Робота з датчиками контролю рівня палива</p>
                  <p className={css.info}>
                    Встановлення, калібровка та обслуговування обладнання контролю рівня палива
                  </p>
                </div>

                <button className={css.btn}>Дізнатися більше</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className={css.swiperPagination} id="swiperPagination"></div>
        {/* {data.map((card) => (
        <CardItem card={card} />
      ))} */}
        {/* <CardItem card={data} /> */}
      </div>
    </section>
  );
};

export default Stock;
