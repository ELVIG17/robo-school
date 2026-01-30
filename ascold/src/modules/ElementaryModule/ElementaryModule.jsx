import style from "./style/index.module.css";
import woman from "../../assets/woman.svg"

export const Elementary = () => {
  return (
    <elementary className={style.elementary}>
      <div className={style.contentElementary}>
        <div className={style.leftPart}>
          <h1 className={style.mainNameInElementary}>ROBO SCHOOL</h1>
          <p className={style.smallDescription}>
          Курсы повышения квалификации по робототехнике для педагогов начальной
          школы</p>
          <button className={style.buttomInElementary}>Записаться на курс</button>
        </div>
        <img src={woman}></img>
      </div>
    </elementary>
  );
};
