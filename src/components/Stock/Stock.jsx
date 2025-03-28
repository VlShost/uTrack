import { useEffect, useState } from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';
import { Pagination, Keyboard, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/keyboard';
import 'swiper/scss/virtual';

import data from '@data/stock.json';
import StockCardItem from '../StockCardItem';

import css from './Stock.module.scss';

const images = import.meta.glob('/src/assets/images/**/*.{png,jpg,jpeg,webp}', { eager: true });

const Stock = () => {
  const [stock, setStock] = useState([]);

  useEffect(() => {
    const processedStock = data.map((item) => {
      // Приводим путь JSON к такому же формату, как в import.meta.glob()
      const x1Path = `/src/assets/${item.images.x1}`;
      const x2Path = `/src/assets/${item.images.x2}`;

      return {
        ...item,
        images: {
          x1: images[x1Path]?.default || '',
          x2: images[x2Path]?.default || '',
          alt: item.images.alt,
        },
      };
    });

    setStock(processedStock);
  }, []);

  return (
    <section id="stock" className={css.section}>
      <div className={css.container}>
        <h2 className={css.title}>Що ми пропонуємо?</h2>

        {stock.length === 0 ? (
          <MagnifyingGlass
            ariaLabel="magnifying-glass-loading"
            glassColor="#c0efff"
            color="#0D6197"
            wrapperClass={css.spinner}
          />
        ) : (
          <Swiper
            modules={[Pagination, Keyboard, Autoplay]}
            className={css.swiper}
            grabCursor={true}
            keyboard={{ enabled: true }}
            centeredSlides={true}
            watchOverflow={true}
            slidesPerView={1}
            spaceBetween={34}
            // autoplay={{
            //   delay: 5000,
            //   disableOnInteraction: false,
            //   pauseOnMouseEnter: true,
            // }}
            speed={1500}
            pagination={{
              el: '#swiperStockPagination',
              clickable: true,
            }}
            breakpoints={{
              744: {
                slidesPerView: 2,
                centeredSlides: false,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                centeredSlides: false,
                spaceBetween: 10,
              },
              1440: {
                slidesPerView: 3,
                centeredSlides: false,
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
        )}

        <div className={css.swiperPagination} id="swiperStockPagination"></div>
      </div>
    </section>
  );
};

export default Stock;
