import { useState } from 'react';
import css from './Hero.module.scss';
import Modal from '../Modal/Modal';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
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
