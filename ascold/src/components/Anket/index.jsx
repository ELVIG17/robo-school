import style from "./style/index.module.css";

export const Anket = () => {
  return (
    <div className={style.anket}>
      <div className={style.contentAnket}>
        <div className={style.leftBlock}>
          <h1 className={style.sale}>Запишитесь на курс  со скидкой 10%</h1>
          <p className={style.promotion}>
            Акция действительна до 10 марта 2022 года
          </p>
        </div>
        <form className={style.form}>
          <div className={style.field}>
            <label>Имя</label>
            <input type="text" name="name" required></input>
          </div>
          <div className={style.field}>
            <label>Телефон</label>
            <input type="number" name="Телефон" required></input>
          </div>
          <div className={style.field}>
            <label>Email</label>
            <input type="email" name="email" required></input>
          </div>
          <button type="submit"> Оставить заявку</button>
        </form>
      </div>
    </div>
  );
};
