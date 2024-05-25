import { NavLink } from 'react-router-dom';

import logo from '../../../assets/images/logo.svg';
import logoSmall from '../../../assets/images/logo-small.svg';
import svg from '../../../assets/images/sprite.svg';

import css from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <NavLink to={'/'} className={css.logo}>
          <img
            srcSet={`
            ${logoSmall} 320w,
            ${logoSmall} 375w,
            ${logo} 1024w,
            `}
            src={logoSmall}
            alt="logo"
            className={css.logoImg}
          />
        </NavLink>

        <div className={css.contactsWrapper}>
          <ul className={css.list}>
            <li className={css.item}>
              <a className={css.itemLink} href="tel:+380503451415">
                <svg className={css.img}>
                  <use href={svg + '#phone'}></use>
                </svg>
                +38 (050) 345 14 15
              </a>
            </li>
            <li className={css.item}>
              <a
                className={css.itemLink}
                href="mailto:scat.gps@gmail.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg className={css.img}>
                  <use href={svg + '#mail'}></use>
                </svg>
                scat.gps@gmail.com
              </a>
            </li>
            <li className={css.item}>
              <a className={css.itemLink} href="viber://chat?number=%2B380503451415">
                <svg className={css.img}>
                  <use href={svg + '#viber'}></use>
                </svg>
                Viber
              </a>
            </li>
            <li className={css.item}>
              <a className={css.itemLink} href="https://t.me/@scatGPS">
                <svg className={css.img}>
                  <use href={svg + '#telegram'}></use>
                </svg>
                Telegram
              </a>
            </li>
          </ul>
        </div>

        <div className={css.copyrightWrapper}>
          <svg className={css.copyrightImg}>
            <use href={svg + '#copyright'}></use>
          </svg>
          <p className={css.text}>
            <span className={css.utrack}>
              uTrack<span className={css.tm}>ТМ</span>
            </span>
            Всі права захищені.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
