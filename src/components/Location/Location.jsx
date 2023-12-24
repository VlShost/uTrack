import css from './Location.module.css';

const Location = () => {
  return (
    <div className={css.location_wrapper} id="location">
      <h2 className={css.title}>Ми завжди готові надати будь-яку інформацію</h2>
      <p className={css.text}>
        <span className={css.text_priority}>С.К.А.Т.</span> надасть Вам найкращу консультацію та
        допоможе з вибором потрібного обладнання для Вашого бізнесу за адресою:
        <p className={css.text_priority}>м. Дніпро, вул. Артільна 9, офіс 39!</p>
      </p>
     
        <iframe className={css.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1714.6601302351671!2d35.06878600292168!3d48.487855655296606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe29c1b822e73%3A0x8d2b6e2cd401a59c!2z0LLRg9C70LjRhtGPINCQ0YDRgtGW0LvRjNC90LAsIDksINCU0L3RltC_0YDQviwg0JTQvdGW0L_RgNC-0L_QtdGC0YDQvtCy0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDQ5MDAw!5e0!3m2!1suk!2sua!4v1703422202278!5m2!1suk!2sua"
         
          loading="lazy"
        ></iframe>

    </div>
  );
};

export default Location;
