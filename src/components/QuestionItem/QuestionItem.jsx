import css from './QuestionItem.module.scss';

const QuestionItem = ({ data }) => {
  const { question, answer } = data;

  return (
    <div className={css.card}>
      <div>{question}</div>
      <div>{answer}</div>
    </div>
  );
};

export default QuestionItem;
