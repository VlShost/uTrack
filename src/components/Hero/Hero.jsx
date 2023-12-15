import css from './Hero.module.css';

const Hero = () => {
  return (
    <section className={css.sectionHero}>
      <div className={css.container}>
        <h1 className={css.title}>GPS-трекінг нового покоління</h1>
        <p className={css.text}>
          Контролюйте свій бізнес з автомобільним обладнанням найвищої якості
        </p>
        <button className={css.actionBtn}>Отримати консультацію</button>
      </div>
    </section>
  );
};

export default Hero;
