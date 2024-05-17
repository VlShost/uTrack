import css from './StockCardItem.module.scss';

const CardItem = ({ data }) => {
  return (
    <div className={css.card}>
      <div className={css.imgWrapper}>
        <img
          loading="lazy"
          // className={css.img}
          srcSet={`${data.image1x} 1x, ${data.image2x} 2x`}
          src={data.image1x}
          alt={data.imageAlt}
        />
      </div>

      <div className={css.infoWrapper}>
        <p className={css.name}>{data.name}</p>
        <p className={css.info}>{data.info}</p>
      </div>

      <button className={css.btn}>Дізнатися більше</button>
    </div>
  );
};

export default CardItem;
