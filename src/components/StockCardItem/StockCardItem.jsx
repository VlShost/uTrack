import { useState } from 'react';

import StockDetails from '../StockDetails/StockDetails';
import Modal from '../Modal';
import svg from '../../assets/images/sprite.svg';

import css from './StockCardItem.module.scss';

const StockCardItem = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const { images = {}, name = 'Без назви', info = 'Опис відсутній', details = {} } = data;

  return (
    <div className={css.card}>
      <div className={css.imgWrapper}>
        {images.x1 || images.x2 ? (
          <img
            loading="lazy"
            srcSet={`${images.x1} 1x, ${images.x2} 2x`}
            src={images.x1}
            alt={images.alt || 'Зображення'}
          />
        ) : (
          <div className={css.placeholderWrapper}>
            <svg className={css.imgPlaceholder}>
              <use href={`${svg}#placeholder`}></use>
            </svg>
          </div>
        )}
      </div>

      <div className={css.infoWrapper}>
        <span className={css.name}>{name}</span>
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
