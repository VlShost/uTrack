import css from './StockDetails.module.scss';

const StockDetails = ({ data, images }) => {
  const { characteristics, supply, info, name, price } = data;
  const { x1, x2, alt } = images;

  return (
    <div className={css.detailsModal}>
      {name && <span className={css.name}>{name}</span>}

      {images && (
        <div className={css.imgWrapper}>
          <img loading="lazy" srcSet={`${x1} 1x, ${x2} 2x`} src={x1} alt={alt} />
        </div>
      )}

      {price && <span className={css.info}>{price}</span>}

      {info && (
        <div className={css.infoWrapper}>
          <span>Опис</span>
          <p className={css.info}>{info}</p>
        </div>
      )}

      {characteristics && (
        <div className={css.characteristicsWrapper}>
          <span>Характеристики</span>
          <ul>
            {characteristics.map((item) => (
              <li key={item} className={css.info}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {supply && (
        <div className={css.supplyWrapper}>
          <span>Комплект постачання</span>
          <ol>
            {supply.map((item) => (
              <li key={item} className={css.info}>
                {item}
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default StockDetails;
