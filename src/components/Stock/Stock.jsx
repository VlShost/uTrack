import { MagnifyingGlass } from 'react-loader-spinner';
import { Pagination, Keyboard, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/keyboard';
import 'swiper/scss/virtual';

import StockCardItem from '../StockCardItem';

// import { getStock } from '../../services/fetchData';
import stock from '../../data/stock.json';

import css from './Stock.module.scss';

const Stock = () => {
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
            el: '#swiperStockPagination',
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
              spaceBetween: 24,
            },
          }}
        >
          {!stock ||
            (stock.length === 0 && (
              <MagnifyingGlass
                ariaLabel="magnifying-glass-loading"
                glassColor="#c0efff"
                color="#0D6197"
                wrapperClass={css.spinner}
              />
            ))}
          {stock &&
            stock.map((card, i) => (
              <SwiperSlide key={i} className={css.slide}>
                <StockCardItem data={card} />
              </SwiperSlide>
            ))}
        </Swiper>

        <div className={css.swiperPagination} id="swiperStockPagination"></div>
      </div>
    </section>
  );
};

export default Stock;
