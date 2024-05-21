import { useState } from 'react';

import Modal from '../Modal';

import css from './StockCardItem.module.scss';
import StockDetails from '../StockDetails/StockDetails';

const StockCardItem = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const { images, name, info, details } = data;

  return (
    <div className={css.card}>
      <div className={css.imgWrapper}>
        <img
          loading="lazy"
          srcSet={`${images.x1} 1x, ${images.x2} 2x`}
          src={images.x1}
          alt={images.alt}
        />
      </div>

      <div className={css.infoWrapper}>
        <p className={css.name}>{name}</p>
        <p className={css.info}>{info}</p>
      </div>

      <button className={css.btn} onClick={toggleModal}>
        Дізнатися більше
      </button>

      {isModalOpen && (
        <Modal toggleModal={toggleModal}>
          <StockDetails data={details} images={images} />
        </Modal>
      )}
    </div>
  );
};

export default StockCardItem;
