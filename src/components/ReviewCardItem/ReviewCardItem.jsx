import starUnfilled from '../../assets/images/star-unfilled.svg';
import starFilled from '../../assets/images/star-filled.svg';

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
          <svg key={i} width={44} height={40}>
            {i < rating ? (
              <use xlinkHref={`${starFilled}#star`} />
            ) : (
              <use xlinkHref={`${starUnfilled}#star`} />
            )}
          </svg>
        ))}
      </div>
    </div>
  );
};

export default CardItem;
