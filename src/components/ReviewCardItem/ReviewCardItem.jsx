import star from '../../assets/images/star.svg';
import star1 from '../../assets/images/star1.svg';

import css from './ReviewCardItem.module.scss';

const CardItem = ({ data }) => {
  const { date, company, text, rating } = data;

  return (
    <div className={css.card}>
      <div className={css.infoWrapper}>
        <div className={css.imgWrapper}>
          {/* <img
          loading="lazy"
          srcSet={`${data.image1x} 1x, ${data.image2x} 2x`}
          src={data.image1x}
          alt={data.imageAlt}
        /> */}
        </div>
        <p className={css.company}>{company}</p>
        <p className={css.date}>{date}</p>
      </div>
      <p className={css.text}>{text}</p>

      <div className={css.userRating}>
        {Array.from({ length: 5 }, (_, i) => (
          <svg key={i} width={44} height={40}>
            {i < rating ? <use xlinkHref={`${star1}#star`} /> : <use xlinkHref={`${star}#star`} />}
          </svg>
        ))}
      </div>
    </div>
  );
};

export default CardItem;
