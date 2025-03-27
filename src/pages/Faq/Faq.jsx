import { useEffect, useState } from 'react';

import data from '@data/questions.json';

import css from './Faq.module.scss';

const Faq = () => {
  const [visible, setVisible] = useState(null);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setQuestions(data);
  }, []);

  const showQuestion = (i) => {
    if (visible === i) {
      return setVisible(null);
    }
    setVisible(i);
  };

  return (
    <section id="faq" className={css.section}>
      <div className={css.container}>
        <h2 className={css.title}>
          Маєте питання?
          <br /> Можливо, у нас вже є на них відповіді
        </h2>

        {questions && (
          <ul className={css.list}>
            {questions.map((item, i) => (
              <li key={i} onClick={() => showQuestion(i)} className={css.listItem}>
                <div className={css.card}>
                  <div className={css.question}>{item.question}</div>
                  <div className={`${css.answer} ${visible === i && css.visible}`}>
                    {item.answer}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Faq;
