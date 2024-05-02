import { useState } from 'react';
import Modal from '../Modal/Modal';

import css from './Hero.module.scss';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <section id="hero" className={css.section}>
      <div className={css.container}>
        <h1 className={css.title}>GPS-трекінг нового покоління</h1>
        <p className={css.text}>
          Контролюйте свій бізнес з автомобільним обладнанням найвищої якості
        </p>
        <button onClick={toggleModal} className={css.actionBtn}>
          Отримати консультацію
        </button>
        {isModalOpen && <Modal toggleModal={toggleModal}>I am super modal</Modal>}
      </div>
    </section>
  );
};

export default Hero;
