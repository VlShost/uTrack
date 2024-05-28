import { Field, Form, Formik } from 'formik';

import css from './CallbackForm.module.scss';

const validateName = (value) => {
  let errorMessage;

  if (!value) {
    errorMessage = 'Name is required';
  } else if (value.length < 2) {
    errorMessage = 'Name is too short';
  }

  return errorMessage;
};

const validateTel = (value) => {
  let errorMessage;

  if (!value) {
    errorMessage = 'Phone number is required';
  } else if (!/^\+?\d{10,15}$/.test(value)) {
    errorMessage = 'Invalid phone number';
  }

  return errorMessage;
};

const validateEmail = (value) => {
  let errorMessage;

  if (!value) {
    errorMessage = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    errorMessage = 'Invalid email address';
  }

  return errorMessage;
};

const CallbackForm = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        tel: '',
        email: '',
        comment: '',
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {({ errors, touched }) => (
        <Form name="callback-form" autoComplete="off" className={css.form}>
          <div className={css.inputWrapper}>
            <label className={css.label}>
              <Field
                type="text"
                name="name"
                validate={validateName}
                placeholder="Ім’я"
                className={`${css.input} ${errors.email && touched.email ? css.error : null}`}
              />
            </label>
            {touched.name && (
              <span className={css.validationMessage}>{errors.name ? errors.name : null}</span>
            )}
          </div>

          <div className={css.inputWrapper}>
            <label className={css.label}>
              <Field
                type="tel"
                name="tel"
                validate={validateTel}
                placeholder="Номер телефону"
                className={`${css.input} ${errors.email && touched.email ? css.error : null}`}
              />
            </label>
            {touched.tel && (
              <span className={css.validationMessage}>{errors.tel ? errors.tel : null}</span>
            )}
          </div>

          <div className={css.inputWrapper}>
            <label className={css.label}>
              <Field
                type="email"
                name="email"
                validate={validateEmail}
                placeholder="Електронна адреса"
                className={`${css.input} ${errors.email && touched.email ? css.error : null}`}
              />
            </label>
            {touched.email && (
              <span className={css.validationMessage}>{errors.email ? errors.email : null}</span>
            )}
          </div>

          <div className={css.inputWrapper}>
            <label className={css.label}>
              <Field
                as="textarea"
                name="comment"
                placeholder="Ваше питання"
                className={css.input}
                rows="5"
              ></Field>
            </label>
          </div>

          <button type="submit" className={css.btnSubmit}>
            <p>Замовити дзвінок</p>
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default CallbackForm;
