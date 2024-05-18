import css from './StockCardItem.module.scss';

const StockCardItem = ({ data }) => {
  const { images, imageAlt, name, info } = data;

  return (
    <div className={css.card}>
      <div className={css.imgWrapper}>
        <img
          loading="lazy"
          srcSet={`${images.x1} 1x, ${images.x2} 2x`}
          src={images.x1}
          alt={imageAlt}
        />
      </div>

      <div className={css.infoWrapper}>
        <p className={css.name}>{name}</p>
        <p className={css.info}>{info}</p>
      </div>

      <button className={css.btn}>Дізнатися більше</button>
    </div>
  );
};

export default StockCardItem;
