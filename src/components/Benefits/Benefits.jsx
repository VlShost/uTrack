import css from './Benefits.module.scss';
// import sprite from '../../assets/images/sprite.svg';

const Benefits = () => {
  return (
    <section id="benefits" className={css.section}>
      <div className={css.container}>
        <h2 className={css.title}>Чому ми найкращі?</h2>
        <ul className={css.list}>
          <li className={css.listItem}>
            <span className={css.itemNum}>1</span>
            <p className={css.text}>
              Система підходить як для бізнесу будь-якої категорії, так і для приватних клієнтів
            </p>
          </li>
          <li className={css.listItem}>
            <span className={css.itemNum}>2</span>
            <p className={css.text}>Обладнання високої якості власного виготовлення</p>
          </li>
          <li className={css.listItem}>
            <span className={css.itemNum}>3</span>
            <p className={css.text}>
              Низька вартість та маленький розмір в порівнянні з існуючими аналогами
            </p>
          </li>
          <li className={css.listItem}>
            <span className={css.itemNum}>4</span>
            <p className={css.text}>Робота комплексу відбувається в режимі реального часу</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Benefits;
