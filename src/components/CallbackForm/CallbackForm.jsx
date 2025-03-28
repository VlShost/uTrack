import { Field, Form, Formik } from 'formik';
import emailjs from 'emailjs-com';

import css from './CallbackForm.module.scss';

const validateName = (value) => {
  let errorMessage;

  if (!value) {
    errorMessage = 'Обов’язкове поле';
  } else if (value.length < 2) {
    errorMessage = 'Ім’я закоротке';
  }

  return errorMessage;
};

const validateTel = (value) => {
  let errorMessage;

  if (!value) {
    errorMessage = 'Обов’язкове поле';
  } else if (!/^\+?\d{10,15}$/.test(value)) {
    errorMessage = 'Невірний формат номеру';
  }

  return errorMessage;
};

const validateEmail = (value) => {
  let errorMessage;

  if (!value) {
    errorMessage = 'Обов’язкове поле';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    errorMessage = 'Невірний формат електронної пошти';
  }

  return errorMessage;
};

const CallbackForm = () => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = (values, actions) => {
    emailjs
      .send(serviceId, templateId, values, publicKey)
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Ваш запит надіслано!');
          actions.resetForm();
        },
        (error) => {
          console.log('FAILED...', error);
          alert('Помилка відправлення, спробуйте ще раз.');
        }
      )
      .finally(() => actions.setSubmitting(false));
  };

  return (
    <Formik
      initialValues={{
        name: '',
        tel: '',
        email: '',
        comment: '',
      }}
      onSubmit={sendEmail}
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
                className={`${css.input} ${css.textArea}`}
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
