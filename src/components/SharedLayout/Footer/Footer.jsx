import css from './Footer.module.scss';
import logo from '../../../assets/logoSmall.svg';
import { NavLink } from 'react-router-dom';

import Phone from '../../../assets/images/phone.svg?react';
import Mail from '../../../assets/images/mail.svg?react';
import Viber from '../../../assets/images/viber.svg?react';
import Telegram from '../../../assets/images/telegram.svg?react';
import Location from '../../../assets/images/location.svg?react';
import Copyright from '../../../assets/images/copyright.svg?react';
const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <div className={css.footer_thumb}>
          <NavLink to={'/'} className={css.logo}>
            <img width="76px" height="52px" src={logo} alt="logo" />
          </NavLink>
          <div className={css.contacts_box}>
            <h3 className={css.title}>Контакти</h3>
            <ul className={css.thumb_contacts}>
              <li className={`${css.contacts_item} , ${css.phone}`}>
                <a className={css.contacts} href="tel:+380503451415">
                  <Phone className={css.contacts_img} />
                  +38 (050) 345 14 15
                </a>
              </li>
              <li className={`${css.contacts_item} , ${css.mail}`}>
                <a
                  className={css.contacts}
                  href="mailto:support@utrack.com.ua"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Mail className={css.contacts_img} />
                  support@utrack.com.ua
                </a>
              </li>
              <li className={`${css.contacts_item} , ${css.viber}`}>
                <a className={css.contacts} href="viber://chat?number=%2B380503451415">
                  <Viber className={css.contacts_img} />
                  Viber
                </a>
              </li>
              <li className={`${css.contacts_item} , ${css.telegram}`}>
                <a className={css.contacts} href="https://t.me/@scatGPS">
                  <Telegram className={css.contacts_img} />
                  Telegram
                </a>
              </li>
            </ul>
          </div>
          <div className={css.address_box}>
            <h3 className={css.title}>Адреса</h3>
            <address className={css.address_thumb}>
              <Location className={css.address_img} />
              <a
                className={css.address}
                href="https://maps.app.goo.gl/yn3qioXGQ9ysqAKi8"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <span className={css.ukraine}>
                  Україна<span className={css.comma}>,</span>{' '}
                </span>
                м. Дніпро, вул. Артільна 9,
                <span className={css.office}>офіс 39</span>
              </a>
            </address>
          </div>
        </div>
        <div className={css.copyright_thumb}>
          <Copyright className={css.copyright_img} />
          <p className={css.text}>
            <span className={css.utrack}>
              uTrack<span className={css.team}>ТМ</span>
            </span>
            Всі права захищені.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
