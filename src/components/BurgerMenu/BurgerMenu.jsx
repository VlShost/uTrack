import { NavLink } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import css from './BurgerMenu.module.scss';

const BurgerMenu = () => {
  return (
    <>
      <ul className={css.burgerList}>
        <li>
          <AnchorLink href="#about" className={css.burgerListItem}>
            Про нас
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#benefits" className={css.burgerListItem}>
            Переваги
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#stock" className={css.burgerListItem}>
            Асортимент
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#reviews" className={css.burgerListItem}>
            Відгуки
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#partners" className={css.burgerListItem}>
            Партнери
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#location" className={css.burgerListItem}>
            Мапа
          </AnchorLink>
        </li>
        <li>
          <NavLink to="/" className={css.btnDisabled}>
            FAQ
          </NavLink>
        </li>
        <li>
          <NavLink to="https://app.utrack.com.ua/" className={css.burgerListItem}>
            Моніторинг
          </NavLink>
        </li>
        <li>
          <NavLink to="tel:+38 050 345 14 15" className={css.burgerListItem}>
            +38 (050) 345 14 15
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default BurgerMenu;
