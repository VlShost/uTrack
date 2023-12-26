import css from './CardItem.module.css';

const CardItem = ({ card }) => {
  return (
    <div className={css.container}>
      <div className={css.card}>
        <div className={css.img}>{card.image}</div>

        <div className={css.infoWrapper}>
          <p className={css.name}>{card.name}</p>
          <p className={css.info}>{card.info}</p>
        </div>

        <button className={css.btn}>Дізнатися більше</button>
      </div>
    </div>
  );
};

export default CardItem;
