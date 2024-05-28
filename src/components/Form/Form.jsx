import css from './Form.module.scss';

const Form = () => {
  return (
    <>
      <form name="callback-form" className={css.form}>
        <div className={css.inputWrapper}>
          <label className={css.label}>
            <input type="text" name="user-name" placeholder="Ім’я" className={css.input} />
          </label>
        </div>

        <div className={css.inputWrapper}>
          <label className={css.label}>
            <input type="tel" name="user-tel" placeholder="Номер телефону" className={css.input} />
          </label>
        </div>

        <div className={css.inputWrapper}>
          <label className={css.label}>
            <input
              type="email"
              name="user-email"
              placeholder="Електронна адреса"
              className={css.input}
            />
          </label>
        </div>

        <div className={css.inputWrapper}>
          <label className={css.label}>
            <textarea
              name="user-comment"
              placeholder="Ваше питання"
              className={css.input}
              rows="5"
            ></textarea>
          </label>
        </div>

        <button type="submit" className={css.btnSubmit}>
          <p>Замовити дзвінок</p>
        </button>
      </form>
    </>
  );
};

export default Form;
