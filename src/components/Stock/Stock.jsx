import CardItem from '../CardItem/CardItem';

import css from './Stock.module.css';

import data from '../../data/stockItems.json';

const Stock = () => {
  return (
    <section id="stock">
      <h2 className={css.title}>Що ми пропонуємо?</h2>
      <CardItem card={data} />
    </section>
  );
};

export default Stock;
