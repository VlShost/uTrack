import css from './Benefits.module.css';
import sprite from '../../assets/images/sprite.svg';

const Benefits = () => {
  return (
    <div id="benefits">
      <div className={css.container}>
        <h2 className={css.title}>Чому ми найкращі?</h2>
        <ul className={css.list}>
          <li className={css.listItem}>
            <svg
              className={css.itemIcon}
              fill="url(#my-cool-gradient) #447799;"
              aria-hidden="true"
              focusable="false"
            >
              <use href={sprite + '#icon-1'}></use>
            </svg>
            <p className={css.text}>
              Система підходить як для бізнесу будь-якої категорії, так і для приватних клієнтів
            </p>
          </li>
          <li className={css.listItem}>
            <p className={css.text}>Обладнання власного виробництва високої якості</p>
          </li>
          <li className={css.listItem}>
            <p className={css.text}>
              Низька вартість та маленький розмір в порівнянні з існуючими аналогами
            </p>
          </li>
          <li className={css.listItem}>
            <p className={css.text}>Робота комплексу відбувається в режимі реального часу</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Benefits;
