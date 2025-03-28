import { useEffect, useState } from 'react';

import data from '@data/questions.json';

import css from './Faq.module.scss';
import FaqItem from '../../components/FaqItem';

const Faq = () => {
  const [visible, setVisible] = useState(null);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setQuestions(data);
  }, []);

  const toggleQuestion = (index) => {
    setVisible((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className={css.section}>
      <div className={css.container}>
        <h2 className={css.title}>
          Маєте питання?
          <br /> Можливо, у нас вже є на них відповіді
        </h2>

        {questions.length > 0 && (
          <ul className={css.list}>
            {questions.map((item, index) => (
              <FaqItem
                key={item.question}
                item={item}
                isOpen={visible === index}
                onClick={() => toggleQuestion(index)}
              />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Faq;
