import css from './Footer.module.css';
import logo from '../../../assets/logoSmall.svg';
import { NavLink } from 'react-router-dom';

import Phone from '../../../assets/images/phone.svg?react';
import Mail from '../../../assets/images/mail.svg?react';
import Viber from '../../../assets/images/viber.svg?react';
import Telegram from '../../../assets/images/telegram.svg?react';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <NavLink to={'/'} className={css.logo}>
          <img width="76px" height="52px" src={logo} alt="logo" />
        </NavLink>
        <h3 className={css.title}>Контакти</h3>
        <ul className={css.thumb_contacts}>
          <li className={css.contacts_item}>
            <a className={css.contacts} href="tel:+380503451415">
              <Phone className={css.contacts_img} />
              +38 (050) 345 14 15
            </a>
          </li>
          <li className={css.contacts_item}>
            <a
              className={`${css.contacts} , ${css.mail}`}
              href="mailto:support@utrack.com.ua"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Mail className={css.contacts_img} />
              support@utrack.com.ua
            </a>
          </li>
          <li className={css.contacts_item}>
            <a
              className={`${css.contacts} , ${css.viber}`}
              href="viber://chat?number=%2B380503451415"
            >
              <Viber className={css.contacts_img} />
              Viber
            </a>
          </li>
          <li className={css.contacts_item}>
            <a className={`${css.contacts} , ${css.telegram}`} href="https://t.me/@scatGPS">
              <Telegram className={css.contacts_img} />
              Telegram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
