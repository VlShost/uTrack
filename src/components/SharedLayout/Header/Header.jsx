import { NavLink } from 'react-router-dom';
// import { HashLink as Link } from 'react-router-hash-link';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <nav className={css.navbar}>
        <NavLink to={'/'}>
          <div className={css.logo}>Logo</div>
        </NavLink>

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
          <li>
            <NavLink to={'/faq'} className={css.navlistItem}>
              FAQ
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className={css.wrapper}>
        <NavLink className={css.contacts} to="tel:+38 050 345 14 15">
          +38 050 345 14 15
        </NavLink>
        <NavLink className={css.contacts} to="/">
          app-auth
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
