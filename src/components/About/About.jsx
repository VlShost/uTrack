import svg from '../../assets/images/decoration.svg';

import css from './About.module.scss';

const About = () => {
  return (
    <section id="about" className={css.section}>
      <div className={css.container}>
        <h2 className={css.title}>Про нас</h2>
        <div className={css.textWrapper}>
          <p className={css.text}>
            <strong className={css.textStrong}>С.К.А.Т.</strong> - це системи контролю
            автомобільного транспорту. Програмно-апаратний комплекс С.К.А.Т. призначений для
            автоматизації керування, контролю та обліку переміщень транспортних засобів, організації
            голосового зв’язку між диспетчером та водіями, а також забезпечення безпеки транспортних
            засобів та водіїв.
          </p>
          <p className={css.text}>
            Наші автомобільні трекери оснащені передовими технологіями глобального позиціонування
            (GPS), що дозволяє точно відслідковувати місцезнаходження автомобілів у режимі реального
            часу. Усе обладнання виготовляється власноруч компанією, клієнтам надається 12-місячна
            гарантія на ремонтні послуги. Наш сервісний центр завжди на зв’язку та бере до уваги
            будь-які побажання клієнтів.
          </p>
        </div>
        <svg className={css.decor}>
          <image xlinkHref={svg} className={css.svg} />
        </svg>
      </div>
    </section>
  );
};

export default About;
