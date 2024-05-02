import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import BurgerMenu from '../../BurgerMenu/BurgerMenu';

import logo from '../../../assets/images/logo.svg';
import burger from '../../../assets/images/burgerMenu.svg';

import css from './Header.module.scss';

const Header = () => {
  const [burgerVisible, setBurgerVisible] = useState(false);
  const btnRef = useRef();

  const toggleBurger = () => {
    setBurgerVisible((prev) => !prev);
  };

  useEffect(() => {
    const closeDropdown = (e) => {
      if (!btnRef.current.contains(e.target)) {
        setBurgerVisible(false);
      }
    };

    document.body.addEventListener('click', closeDropdown);

    return () => {
      document.body.removeEventListener('click', closeDropdown);
    };
  }, []);

  return (
    <header className={css.header}>
      <div className={css.container}>
        <nav className={css.navbar}>
          <NavLink to={'/'} className={css.logo}>
            <img src={logo} alt="logo" />
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
              <NavLink to="/" className={css.navlistItem}>
                Часті питання
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className={css.contacts}>
          <NavLink to="tel:+38 050 345 14 15" className={css.navlistItem}>
            +38 (050) 345 14 15
          </NavLink>

          <NavLink to="https://app.utrack.com.ua/" className={css.navlistItem}>
            Моніторинг
          </NavLink>
        </div>

        <button ref={btnRef} onClick={toggleBurger} className={css.burgerBtn}>
          <img src={burger} alt="menuBtn" className={css.btnIcon} />
        </button>

        {burgerVisible && <BurgerMenu />}
      </div>
    </header>
  );
};

export default Header;
