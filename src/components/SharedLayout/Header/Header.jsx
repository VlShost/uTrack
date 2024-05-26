import { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import BurgerMenu from '../../BurgerMenu/BurgerMenu';

import logo from '../../../assets/images/logo.svg';
import logoSmall from '../../../assets/images/logo-small.svg';
import burger from '../../../assets/images/burgerMenu.svg';

import css from './Header.module.scss';

const Header = () => {
  const [burgerVisible, setBurgerVisible] = useState(false);
  const [currLocation, setCurrLocation] = useState('/');
  const location = useLocation();
  const btnRef = useRef();

  console.log(location.pathname);

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
            <img
              srcSet={`
            ${logoSmall} 320w,
            ${logoSmall} 375w,
            ${logoSmall} 744w,
            ${logo} 1024w,
            `}
              src={logoSmall}
              alt="logo"
              className={css.logoImg}
            />
          </NavLink>

          {location.pathname === '/' && (
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
                <NavLink to="/faq" className={css.navlistItem}>
                  Часті питання
                </NavLink>
              </li>
            </ul>
          )}
          {location.pathname === '/faq' && (
            <NavLink to="/" className={css.toHome}>
              На головну
            </NavLink>
          )}
        </nav>

        <div className={css.contacts}>
          <NavLink to="tel:+38 050 345 14 15" className={css.telBtn}>
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
