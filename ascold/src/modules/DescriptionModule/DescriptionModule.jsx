import style from "./style/index.module.css";

export const Description = () => {
  return (
    <div className={style.discription}>
      <div className={style.contentDiscription}>
        <p className={style.newDiscription}>
          Robo School - учреждение для формирования кадрового педагогического
          резерва в сфере робототехники и программирования
        </p>
        <div className={style.stats}>
          <div>
            <h1 className={style.numbers}>10</h1>
            <p className={style.discriptionForNumbers}>
              УМК по различным направлениям по робототехнике
            </p>
          </div>
          <div>
            <h1 className={style.numbers}>20</h1>
            <p className={style.discriptionForNumbers}>
              Школ, в которых запущена робототехника
            </p>
          </div>
          <div>
            <h1 className={style.numbers}>100</h1>
            <p className={style.discriptionForNumbers}>
              Педагогов прошедших курсы повышения квалификации
            </p>
          </div>
          <div>
            <h1 className={style.numbers}>10 000</h1>
            <p className={style.discriptionForNumbers}>
              Обученных детей на базе собственных центров
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
