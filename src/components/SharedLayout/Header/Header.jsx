import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import css from './Header.module.scss';
import BurgerMenu from '../../BurgerMenu';

import logo from '../../../assets/logoSmall.svg';
import burger from '../../../assets/burgerMenu.svg';

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
          <NavLink to={'/'}>
            <img src={logo} alt="logo" />
          </NavLink>
        </nav>
        <button ref={btnRef} onClick={showBurger} className={css.burgerBtn}>
          <img src={burger} alt="menuBtn" className={css.btnIcon} />
        </button>

        {burgerVisible && <BurgerMenu />}
      </div>
    </header>
  );
};

export default Header;
