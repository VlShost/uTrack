import svg from '../../assets/images/sprite.svg';

import css from './StockDetails.module.scss';

const StockDetails = ({ data, images }) => {
  const { characteristics, supply, info, name, price } = data;
  const { x1, x2, alt } = images;

  return (
    <div className={css.detailsModal}>
      <div className={css.imgWrapper}>
        {x1 !== '' || x2 !== '' ? (
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
              <use href={svg + '#placeholder'}></use>
            </svg>
          </div>
        )}
      </div>
      {name && <p className={css.name}>{name}</p>}
      {price && <p className={css.price}>{price}грн.</p>}
      {info && (
        <div className={css.infoWrapper}>
          <span className={css.title}>Опис</span>
          <p className={css.info}>{info}</p>
        </div>
      )}

      <div className={css.moreInfoWrapper}>
        {characteristics && (
          <div className={css.infoWrapper}>
            <span className={css.title}>Характеристики</span>
            <ul className={css.info}>
              {characteristics.map((item) => (
                <li key={item} className={css.listItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {supply && (
          <div className={css.infoWrapper}>
            <span className={css.title}>Комплект постачання</span>
            <ol className={css.info}>
              {supply.map((item) => (
                <li key={item} className={css.orderedListItem}>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
};

export default StockDetails;
