import style from "./style/index.module.css";

export const ChoiceOfPocket = () => {
  return (
    <div className={style.choiceOfPocket}>
      <div className={style.contentChoiceOfPocket}>
        <h1 className={style.mainWordOfPocket}>Выберите нужный пакет</h1>
        <div className={style.pockets}>
          <div className={style.pocket}>
            <h1 className={style.name}>– PRO –</h1>
            <h1 className={style.price}>20.000 ₽</h1>
            <p className={style.description}>
              УМK по робототетхнике и программированию
            </p>
            <button className={style.bid}>Оставить заявку</button>
          </div>
          <div className={style.pocket}>
            <h1 className={style.name}>– ROBO –</h1>
            <h1 className={style.price}>15.000 ₽</h1>
            <p className={style.description}>УМК по робототетхнике </p>
            <button className={style.bid}>Оставить заявку</button>
          </div>
          <div className={style.pocket}>
            <h1 className={style.name}>– PROG –</h1>
            <h1 className={style.price}>10.000 ₽</h1>
            <p className={style.description}>УМК по программированию</p>
            <button className={style.bid}>Оставить заявку</button>
          </div>
        </div>
      </div>
    </div>
  );
};
