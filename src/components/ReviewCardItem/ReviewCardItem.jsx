import svg from '../../assets/images/sprite.svg';

import css from './ReviewCardItem.module.scss';

const CardItem = ({ data }) => {
  const { date, company, text, rating } = data;

  return (
    <div className={css.card}>
      <div className={css.infoWrapper}>
        <p className={css.company}>{company}</p>
        <p className={css.date}>{date}</p>
      </div>
      <p className={css.text}>{text}</p>

      <div className={css.userRating}>
        {Array.from({ length: 5 }, (_, i) => (
          <svg key={i} className={css.icon}>
            <use href={i < rating ? `${svg}#star-filled` : `${svg}#star-unfilled`}></use>
          </svg>
        ))}
      </div>
    </div>
  );
};

export default CardItem;
