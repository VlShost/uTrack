import svg from '../../assets/images/sprite.svg';

import css from './StockDetails.module.scss';

const StockDetails = ({ data, images }) => {
  const { characteristics, supply, info, name, price } = data;
  const { x1, x2, alt } = images;

  return (
    <div className={css.detailsModal}>
      <div className={css.imgWrapper}>
        {x1 || x2 ? (
          <img
            loading="lazy"
            srcSet={`${x1} 1x, ${x2} 2x`}
            src={x1}
            alt={alt}
            className={css.img}
          />
        ) : (
          <div className={css.placeholderWrapper}>
            <svg className={css.imgPlaceholder}>
              <use href={`${svg}#placeholder`}></use>
            </svg>
          </div>
        )}
      </div>
      {name ? <p className={css.name}>{name}</p> : <p className={css.name}>Інформація відсутня</p>}
      {price > 0 ? (
        <p className={css.price}>{price}грн.</p>
      ) : (
        <p className={css.pricePlaceholder}>
          Ціну уточнюйте за номером
          <br />
          технічної підтримки
        </p>
      )}
      {info ? (
        <div className={css.infoWrapper}>
          <span className={css.title}>Опис</span>
          <p className={css.info}>{info}</p>
        </div>
      ) : (
        <p className={css.info}>Уточнюйте за номером технічної підтримки</p>
      )}

      <div className={css.moreInfoWrapper}>
        <div className={css.infoWrapper}>
          <span className={css.title}>Характеристики</span>
          {characteristics.length > 0 ? (
            <ul className={css.info}>
              {characteristics.map((item, i) => (
                <li key={i} className={css.listItem}>
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className={css.info}>Уточнюйте за номером технічної підтримки</p>
          )}
        </div>

        <div className={css.infoWrapper}>
          <span className={css.title}>Комплект постачання</span>
          {supply.length > 0 ? (
            <ol className={css.info}>
              {supply.map((item) => (
                <li key={item} className={css.orderedListItem}>
                  {item}
                </li>
              ))}
            </ol>
          ) : (
            <p className={css.info}>Уточнюйте за номером технічної підтримки</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StockDetails;
