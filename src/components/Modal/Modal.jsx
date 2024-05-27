import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import svg from '../../assets/images/sprite.svg';

import css from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, toggleModal }) => {
  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        toggleModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [toggleModal]);

  return createPortal(
    <div className={css.modalBackdrop} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <button type="button" className={css.btnCloseModal} onClick={toggleModal}>
          <svg className={css.btnIcon}>
            <use href={svg + '#cross'}></use>
          </svg>
        </button>
        <div className={css.modalContent}>{children}</div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
