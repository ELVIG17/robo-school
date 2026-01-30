import style from "./style/index.module.css";

export const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.contentFooter}>
        <div className={style.leftBlock}>
          <h1 className={style.mainWords}>ROBO.SCHOOL</h1>
          <p className={style.mail}>© ROBO.SCHOOL</p>
        </div>
        <h2 className={style.number}>+7 800 000 11 22</h2>
      </div>
    </div>
  );
};
