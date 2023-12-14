// import { NavLink } from 'react-router-dom';
// import { HashLink as Link } from 'react-router-hash-link';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import css from './NavAnchors.module.css';

const Nav = () => {
  return (
    <div>
      <ul className={css.navlist}>
        <li>
          <AnchorLink href="#about" className={css.navlistItem}>
            Про нас
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#benefits" className={css.navlistItem}>
            Переваги
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#stock" className={css.navlistItem}>
            Асортимент
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#reviews" className={css.navlistItem}>
            Відгуки
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#partners" className={css.navlistItem}>
            Партнери
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#location" className={css.navlistItem}>
            Мапа
          </AnchorLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
