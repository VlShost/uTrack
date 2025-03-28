import React, { useRef } from 'react';

import css from './FaqItem.module.scss';

const FaqItem = ({ item, isOpen, onClick }) => {
  const contentRef = useRef(null);

  return (
    <li className={css.listItem}>
      <div className={css.card} onClick={onClick} role="button" tabIndex={0}>
        <div className={css.question} aria-expanded={isOpen}>
          {item.question}
        </div>
        <div ref={contentRef} className={`${css.answer} ${isOpen ? css.visible : ''}`}>
          {item.answer}
        </div>
      </div>
    </li>
  );
};

export default FaqItem;
