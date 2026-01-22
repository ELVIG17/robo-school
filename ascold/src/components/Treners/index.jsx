import style from "./style/index.module.css";
import image from "../../assets/trener.svg";

export const Treners = () => {
  return (
    //ЗАМЕНИТЬ КАРТИНКИ НА НУЖНЫЕ
    <div className={style.treners}>
      <div className={style.contentTreners}>
        <h1 className={style.titleOfTreners}>Профессиональные тренеры</h1>
        <div className={style.scrollingTreners}>
          {/* <button className={style.leftButtom}>&#10094</button> */}
          <div className={style.cards}>
            <img className={style.imageOfTrener} src={image}></img>
            <h2 className={style.nameOfTrener}>Ирина Лайм</h2>
            <p className={style.post}>преподаватель по робототехнике</p>
            <button className={style.detailsOfTrener}>Подробнее</button>
          </div>
          <div className={style.cards}>
            <img className={style.imageOfTrener} src={image}></img>
            <h2 className={style.nameOfTrener}>Марина Орлова</h2>
            <p className={style.post}>преподаватель по робототехнике</p>
            <button className={style.detailsOfTrener}>Подробнее</button>
          </div>
          <div className={style.cards}>
            <img className={style.imageOfTrener} src={image}></img>
            <h2 className={style.nameOfTrener}>Максим Петров</h2>
            <p className={style.post}>преподаватель по программированию</p>
            <button className={style.detailsOfTrener}>Подробнее</button>
          </div>
          <div className={style.cards}>
            <img className={style.imageOfTrener} src={image}></img>
            <h2 className={style.nameOfTrener}>Константин Назаров</h2>
            <p className={style.post}>преподаватель по робототехнике</p>
            <button className={style.detailsOfTrener}>Подробнее</button>
          </div>
          <div className={style.cards}>
            <img className={style.imageOfTrener} src={image}></img>
            <h2 className={style.nameOfTrener}>Лиза Весенняя</h2>
            <p className={style.post}>преподаватель по робототехнике</p>
            <button className={style.detailsOfTrener}>Подробнее</button>
          </div>
          {/* <button className={style.rightButtom}>&#10095</button> */}
        </div>
      </div>
    </div>
  );
};
