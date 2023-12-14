import { NavLink } from 'react-router-dom';

import css from './Header.module.css';
// import NavAnchors from '../../Navigation/NavAnchors';
import BurgerMenu from '../../BurgerMenu';

import logo from '../../../assets/logoSmall.svg';
import burger from '../../../assets/burgerMenu.svg';
import { useState } from 'react';

const Header = () => {
  const [burgerVisible, setBurgerVisible] = useState(false);

  const showBurger = () => {
    setBurgerVisible((prev) => !prev);
  };

  return (
    <header className={css.header}>
      <div className={css.container}>
        <nav className={css.navbar}>
          <NavLink to={'/'} className={css.logo}>
            {/* <svg>
              <use href={logo}></use>
            </svg> */}
            <img src={logo} alt="logo" />
          </NavLink>

          {/* <NavAnchors /> */}
          {/* <NavLink to={'/faq'} className={css.navlistItem}>
            FAQ
          </NavLink> */}
        </nav>
        <button onClick={showBurger} className={css.burgerBtn}>
          {/* <svg>
            <use href={burger}></use>
          </svg> */}
          <img src={burger} alt="menuBtn" className={css.btnIcon} />
        </button>
        {burgerVisible && <BurgerMenu />}
        {/* <div className={css.wrapper}>
          <NavLink className={css.contacts} to="tel:+38 050 345 14 15">
            +38 050 345 14 15
          </NavLink>
          <NavLink className={css.contacts} to="/">
            app-auth
          </NavLink>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
