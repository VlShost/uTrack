import Form from '../Form';
import css from './Callback.module.scss';

const Callback = () => {
  return (
    <section id="callback" className={css.section}>
      <div className={css.container}>
        <Form />
      </div>
    </section>
  );
};

export default Callback;
