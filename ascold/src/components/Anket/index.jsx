import style from "./style/index.module.css";

export const Anket = () => {
  return (
    <div className={style.anket}>
      <div className={style.contentAnket}>
        <div className={style.leftBlock}>
          <h1 className={style.sale}>Запишитесь на курс со скидкой 10%</h1>
          <p className={style.promotion}>
            Акция действительна до 10 марта 2022 года
          </p>
        </div>
        <form className={style.form}>
          <div className={style.field}>
            <input type="text" placeholder="Name" name="name" required />
          </div>
          <div className={style.field}>
            <input type="tel" placeholder="Number" name="Phone" required />
          </div>
          <div className={style.field}>
            <input type="email" placeholder="Email" name="email" required />
          </div>
          <button className={style.submitButton} type="submit">
            {" "}
            Оставить заявку
          </button>
        </form>
      </div>
    </div>
  );
};
