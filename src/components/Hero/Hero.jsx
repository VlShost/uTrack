import { useState } from 'react';

import Modal from '../Modal';
import Form from '../Form';

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
      </div>
      {isModalOpen && (
        <Modal toggleModal={toggleModal}>
          <div className={css.formWrapper}>
            <h2 className={css.titleModal}>
              Заповніть коротку форму і ми зв’яжемося з Вами для відповіді на будь-які питання
            </h2>
            <Form />
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Hero;
