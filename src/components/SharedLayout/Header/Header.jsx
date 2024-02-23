import { NavLink } from 'react-router-dom';

import css from './Header.module.css';
// import NavAnchors from '../../Navigation/NavAnchors';
import BurgerMenu from '../../BurgerMenu';

import logo from '../../../assets/logoSmall.svg';
import burger from '../../../assets/burgerMenu.svg';
import { useState, useEffect, useRef } from 'react';

const Header = () => {
  const [burgerVisible, setBurgerVisible] = useState(false);
  const btnRef = useRef();

  const showBurger = () => {
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

          {/* <NavAnchors /> */}
          {/* <NavLink to={'/faq'} className={css.navlistItem}>
            FAQ
          </NavLink> */}
        </nav>
        <button ref={btnRef} onClick={showBurger} className={css.burgerBtn}>
          <img src={burger} alt="menuBtn" className={css.btnIcon} />
        </button>

        {burgerVisible && <BurgerMenu />}
        {/* <div className={`dropdown` + (burgerVisible ? `visible` : `invisible`)}> */}
        {/* </div> */}
        {/* {burgerVisible && <BurgerMenu />} */}
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
