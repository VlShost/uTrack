import css from './StockDetails.module.scss';

const StockDetails = ({ data, images }) => {
  const { characteristics, supply, info, name, price } = data;
  const { x1, x2, alt } = images;

  return (
    <div className={css.detailsModal}>
      <span className={css.name}>{name}</span>
      <div className={css.imgWrapper}>
        <img loading="lazy" srcSet={`${x1} 1x, ${x2} 2x`} src={x1} alt={alt} />
      </div>
      <span className={css.info}>{price}</span>

      <div className={css.infoWrapper}>
        <span>Опис</span>
        <p className={css.info}>{info}</p>

        <span>Характеристики</span>
        <ul>
          {characteristics.map((item) => (
            <li key={item} className={css.info}>
              {item}
            </li>
          ))}
        </ul>

        <span>Комплект постачання</span>
        <ol>
          {supply.map((item) => (
            <li key={item} className={css.info}>
              {item}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default StockDetails;
