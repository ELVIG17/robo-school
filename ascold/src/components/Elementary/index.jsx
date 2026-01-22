import style from "./style/index.module.css";

export const Elementary = () => {
  return (
    <div className={style.elementary}>
      <div className={style.contentElementary}>
        <h1 className={style.mainNameInElementary}>ROBO SCHOOL</h1>
        <p className={style.smallDescription}>
          Курсы повышения квалификации по робототехнике для педагогов начальной
          школы
        </p>
        <button className={style.buttomInElementary}>Записаться на курс</button>
      </div>
    </div>
  );
};

