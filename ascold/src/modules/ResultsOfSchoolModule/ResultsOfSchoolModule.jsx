import style from "./style/index.module.css";

export const ResultOfSchool = () => {
  return (
    <div className={style.resultOfSchool}>
      <div className={style.contentResultOfSchool}>
        <h1 className={style.mainWordOfResult}>Что вы получите после курса</h1>
        <div className={style.infoOfResults}>
          <div className={style.blocksOfResult}>
            <h2 className={style.titleOfResult}>Удостоверение</h2>
            <p className={style.dicriptionOfResult}>
              Дающее право преподавать робототехнику для детей 6-12 лет в
              образовательных учреждениях
            </p>
          </div>
          <div className={style.blocksOfResult}>
            <h2 className={style.titleOfResult}>Знания</h2>
            <p className={style.dicriptionOfResult}>
              По основам разработки учебно-методических комплексов по
              робототехнике и программированию
            </p>
          </div>
          <div className={style.blocksOfResult}>
            <h2 className={style.titleOfResult}>Практику</h2>
            <p className={style.dicriptionOfResult}>
              Возможность пройти практику по преподаванию робототехники на базе
              R:ED LAB (в оффлайн или онлайн формате)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
