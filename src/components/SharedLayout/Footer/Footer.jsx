import css from './Footer.module.css';
import logo from '../../../assets/logoSmall.svg';
import { NavLink } from 'react-router-dom';

import phone from '../../../assets/images/phone.svg';
import mail from '../../../assets/images/mail.svg';
import viber from '../../../assets/images/viber.svg';
import telegram from '../../../assets/images/telegram.svg';

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
            <a className={`${css.contacts} , ${css.phone}`} href="tel:+380503451415">
              <img className={css.contacts_img} src={phone} alt="Контактний телефон" />
              {/* <svg className={css.contacts_img} width="40" height="40">
                <use href={phone}></use>
              </svg> */}
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
              <img className={css.contacts_img} src={mail} alt="Пошта" />
              support@utrack.com.ua
            </a>
          </li>
          <li className={css.contacts_item}>
            <a
              className={`${css.contacts} , ${css.viber}`}
              href="viber://chat?number=%2B380503451415"
            >
              <img className={css.contacts_img} src={viber} alt="Вайбер" />
              Viber
            </a>
          </li>
          <li className={css.contacts_item}>
            <a className={`${css.contacts} , ${css.telegram}`} href="https://t.me/@scatGPS">
              <img className={css.contacts_img} src={telegram} alt="Телеграм" />
              Telegram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
